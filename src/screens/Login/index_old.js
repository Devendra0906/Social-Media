import React, { Component } from "react";
import {
  Image, StatusBar, Platform, Alert, DeviceEventEmitter,
  NativeModules
} from "react-native";
import LoginKeyCloak from '../../Helper/KeycloakManager';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import { NavigationActions, StackActions } from "react-navigation";
import {
  Container,
  Content,
  Text,
  Item,
  Input,
  Button,
  View,
  Toast,
  Icon
} from "native-base";
import { Field, reduxForm } from "redux-form";
import styles from "./styles";

const axios = require('axios');
const commonColor = require("../../theme/variables/commonColor");
const logo = require("../../../assets/images/logo.png");

const config = {
  url: 'https://sso.prenigma.com/auth',
  realm: 'prenigma',
  clientId: 'socialnetwork-ui',
  appsiteUri: 'com.prenigma.socialappauth://',
  redirectUri: 'com.prenigma.socialappauth://social'
};

const StorageManager = NativeModules.StorageManager;

const required = value => (value ? undefined : "Required");
const maxLength = max => value => {
  return value.length > max ? `Must be ${max} characters or less` : undefined;
}
const maxLength15 = maxLength(15);
const minLength = min => value => {
  return value.length < min ? `Must be ${min} characters or more` : undefined;
}
const minLength8 = minLength(8);
const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(value) || value.length === 0)
    ? "Invalid email address"
    : undefined;
const alphaNumeric = value => {
  return value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;
}

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "HomeTabNavigation" })]
});

declare type Any = any;

class LoginForm extends Component {
  textInput: Any;
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      spinner: true
    };
  }

  componentWillMount = async () => {
    const isLogin = await AsyncStorage.getItem("IS_LOGIN");
    if (isLogin === null || isLogin === undefined) {
      StorageManager.getObjectForKey("APP_TOKEN")
        .then((tokenData) => {
          let stringData = ""
          if (Platform.OS === 'android') {
            stringData = tokenData.data.token;
          } else {
            stringData = tokenData;
          }
          if (stringData.length !== 0) {
            let tokenObject = JSON.parse(stringData);
            LoginKeyCloak.setTokens(tokenObject);
            console.log(tokenObject);
            LoginKeyCloak.setConf(config);
            LoginKeyCloak.retrieveUserInfo()
              .then((user) => {
                console.log("UserDetails" + JSON.stringify(user));
                AsyncStorage.setItem('IS_LOGIN', "true")
                  .then(() => {
                    this.setState({ spinner: false }, () => {
                      this.props.navigation.dispatch(resetAction);
                    })
                  }).catch((error) => { console.log(error); });
              }).catch((error) => {
                console.log("Error" + error);
                this.hideSpinner()
              });
          } else {
            this.hideSpinner()
          }
        }).catch((error) => { this.hideSpinner() });
    } else if (isLogin === "true") {
      this.setState({ spinner: false }, () => {
        this.props.navigation.dispatch(resetAction);
      });
    } else {
      this.hideSpinner();
    }
  }

  hideSpinner = () => {
    this.setState({ spinner: false });
  }

  renderInput(type) {
    return (
      <View>
        <Item style={styles.inputGrp}>
          <Icon active
            name={type === "email" ? "mail-outline" : "unlock"}
            type={type === "email" ? "MaterialIcons" : "AntDesign"}
            style={{ color: commonColor.contentTextColor }}
          />
          <Input testID={type}
            ref={c => (this.textInput = c)}
            placeholderTextColor={commonColor.lightTextColor}
            style={{ color: commonColor.contentTextColor }}
            placeholder={type === "email" ? "Email or Phone" : "Password"}
            secureTextEntry={type === "password" ? true : false}
            value={type === 'email' ? this.state.email : this.state.password}
            onChangeText={(text) => {
              type === "email" ? this.setState({ email: text }) : this.setState({ password: text })
            }}
          />
        </Item>
      </View>
    );
  }

  login = () => {
    this.navigateToDashboard()
    return;
    if (required(this.state.email) !== undefined) {
      Alert.alert('Ooops!!!!', 'Please enter username',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
    } else if ((minLength(6))(this.state.password) !== undefined || maxLength15(this.state.password) !== undefined || alphaNumeric(this.state.password) !== undefined) {
      Alert.alert('Ooops!!!!',
        'Password should be alphanumric and between 8 to 15 charecters long',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
    } else {
      this.setState({ spinner: true });
      const params = new URLSearchParams();
      params.append('grant_type', 'password');
      params.append('client_id', 'socialnetwork-ui');
      params.append('username', this.state.email);
      params.append('password', this.state.password);
      params.append('scope', 'roles');

      axios.post('https://sso.prenigma.com/auth/realms/prenigma/protocol/openid-connect/token', params)
        .then((response) => {
          console.log('RESPONSE LOGIN :' + JSON.stringify(response.data));
          StorageManager.setObject(JSON.stringify(response.data), "APP_TOKEN")
            .then(() => {
              this.navigateToDashboard()
            }).catch((error) => {
              console.log("ERROR: " + error);
            })
        }).catch((error) => {
          console.log('ERRORRRRR :' + error);
        });
    }
  }

  navigateToDashboard = () => {
    AsyncStorage.setItem('IS_LOGIN', "true")
      .then(() => {
        this.setState({ spinner: false }, () => {
          this.props.navigation.dispatch(resetAction);
        })
      }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    const navigation = this.props.navigation;
    if (this.state.spinner) {
      return (<Spinner
        visible={this.state.spinner}
        textContent={'Loading...'}
        textStyle={{ color: '#FFF' }}
      />);
    }
    return (
      <Container style={styles.backgroundContainer} testID="Login">
        <StatusBar
          backgroundColor={Platform.OS === "android" ? commonColor.statusBarColor : "transparent"
          }
          barStyle="dark-content"
        />
        <Content>
          <View style={styles.logoContainerView}>
            <Image source={logo} tintColor="#000" style={styles.imageShadow} />
          </View>
          <View style={styles.formContainerView}>
            <View style={styles.formView}>
              {this.renderInput('email')}
              {this.renderInput('password')}
              <Button block style={styles.loginBtn}
                onPress={() => this.login()} testID="loginButton">
                <Text style={{ lineHeight: 16, fontWeight: "bold" }}>
                  LOG IN
                </Text>
              </Button>
              <Button transparent style={{ alignSelf: "center" }}
                onPress={() => navigation.navigate("HomeTabNavigation")}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </Button>
            </View>
          </View>
          <View style={styles.footerView}>
            <Button bordered block
              style={styles.createAccountBtn}
              onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.createAccountBtnTxt}>
                CREATE NEW SOCIAL ACCOUNT
              </Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default LoginForm;
