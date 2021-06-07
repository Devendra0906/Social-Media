import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import styles from './styles';
import Color from '../../Helper/Color';
import CustomButton from '../../components/CustomButtom';

const email = require('../../../assets/images/email.png');

class EnterPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      showPassword: true
    };
  }

  _onChangePasswordText = (text) => {
    this.setState({ password: text })
  }

  _onPressShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    })
  }

  _onPressLogin = () => {
    const userAction = this.props.route.params.userAction
    if (userAction == 'login') {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: 'HomeTab' },
          ],
        })
      );
    } else {
      this.props.navigation.navigate('TermsAndConditions')
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <View>
            <SimpleLineIcons name={'lock'} size={70} color={Color.BLACK} style={styles.image} />
            <Text style={styles.title}>
              What's your password?
          </Text>
            <Text style={{ fontSize: 14, color: Color.GREY, marginTop: 30, marginLeft: 15 }}>
              darshit.devstree@gmail.com
              </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                secureTextEntry={this.state.showPassword}
                placeholder={'Enter password'}
                placeholderTextColor={Color.GREY}
                value={this.state.password}
                onChangeText={this._onChangePasswordText}
              />
              <TouchableOpacity
                style={{ marginHorizontal: 10 }}
                onPress={this._onPressShowPassword}>
                <Text style={{ fontSize: 14, color: Color.GREY }}>
                  {this.state.showPassword ? 'Hide' : 'Show'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <CustomButton
            buttonContainer={styles.continueContainer}
            onPress={this._onPressLogin}
            title={'Log in'}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default EnterPassword;
