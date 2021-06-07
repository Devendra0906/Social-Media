import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
} from "react-native";
import * as querystring from 'query-string';
import uuidv4 from 'uuid/v4';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import jwtDeode from 'jwt-decode';
import { WebView } from 'react-native-webview';
import LoginKeyCloak from '../../Helper/KeycloakManager';

const config = {
  url: 'http://35.225.64.127/auth/',
  realm: 'prenigma',
  clientId: 'web_app',
  appsiteUri: 'https://social.prenigma.com/',
  redirectUri: 'https://social.prenigma.com/'
};
// clientId: 'security-admin-console',

const INJECTEDJAVASCRIPT = `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `

class Login extends Component {

  static navigationOptions = {
    headerShown: false
  };

  state = {
    spinner: true
  }

  constructor(props) {
    super(props)

    this.route = 'StartScreen'
  }

  async componentDidMount() {
    const login = await AsyncStorage.getItem('IS_LOGIN');
    if (login === null || login === undefined) {
      // StorageManager.getObjectForKey("APP_TOKEN")
      AsyncStorage.getItem('APP_TOKEN')
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
            LoginKeyCloak.setConf(config);
            this.hideSpinner()
            this.props.navigation.navigate('HomeTabNavigator')
          } else {
            this.hideSpinner();
          }
        }).catch((error) => {
          this.hideSpinner();
        });
    } else {
      this.hideSpinner();
    }
    this._focusedScreen = this.props.navigation.addListener(
      'willFocus',
      this._componentFocused
    )
  }

  _componentFocused = () => {
    this.webView.stopLoading()
    this.webView.reload()
  }

  getRealmURL() {
    const { url, realm } = config;
    const slash = url.endsWith('/') ? '' : '/';
    return `${url + slash}realms/${encodeURIComponent(realm)}`;
  }

  getLoginURL() {
    const { redirectUri, clientId, kcIdpHint } = config;
    const responseType = 'code';
    const state = uuidv4();
    const scope = 'openid';
    const url = `${this.getRealmURL()}/protocol/openid-connect/auth?${querystring.stringify({
      scope,
      kc_idp_hint: kcIdpHint,
      redirect_uri: redirectUri,
      client_id: clientId,
      response_type: responseType,
      state,
    })}`;
    return { url, state };
  }

  async retrieveTokens(code) {
    const { redirectUri, clientId } = config;
    let url = `${this.getRealmURL()}/protocol/openid-connect/token`;

    let requestOptions = {
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "method": "POST",
      "body": querystring.stringify({
        grant_type: 'authorization_code', redirect_uri: redirectUri, client_id: clientId, code, 'client_secret': '1bcc8992-d357-4b80-9d7a-d43deac5806e'
      })
    }

    // 'client_secret': '5a9f5af7-937b-49b1-92fb-089736be1339'
    const fullResponse = await fetch(url, requestOptions);
    const jsonResponse = await fullResponse.json();
    console.log(jsonResponse)
    this.parseKeycloakToken(jsonResponse)
  }

  hideSpinner = () => {
    this.setState({ spinner: false });
  }

  parseKeycloakToken(jsonResponse) {
    // StorageManager.setObject(JSON.stringify(response.data), "APP_TOKEN")
    console.log(jsonResponse)
    AsyncStorage.setItem("APP_TOKEN", JSON.stringify(jsonResponse))
      .then(() => {
        LoginKeyCloak.setTokens(jsonResponse);
        LoginKeyCloak.setConf(config);
        const profile = jwtDeode(jsonResponse.access_token);
        this.hideSpinner()
        this.props.navigation.navigate('HomeTabNavigator')
      }).catch((error) => {
        this.setState({ spinner: false });
      })
  }

  render() {
    const loginURL = this.getLoginURL()
    debugger
    if (this.state.spinner) {
      return (
        <Spinner animation='slide' visible={this.state.spinner} />
      )
    }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <WebView
          ref={ref => this.webView = ref}
          source={{ uri: loginURL.url }}
          cacheEnabled={false}
          cacheMode='LOAD_NO_CACHE'
          onShouldStartLoadWithRequest={(request) => {
            console.log('=============>' + request.url);
            if (request.url.startsWith(config.appsiteUri)) {
              const {
                state,
                code,
              } = querystring.parse(querystring.extract(request.url));
              if (loginURL.state === state) {
                this.setState({
                  spinner: true
                })
                this.retrieveTokens(code)
              }
              return false
            }
            return true
          }}
          scalesPageToFit={false}
          injectedJavaScript={INJECTEDJAVASCRIPT}
          style={styles.webView}
          sharedCookiesEnabled={false}
          thirdPartyCookiesEnabled={false}
          incognito={true}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  webView: {
    flex: 1,
    marginTop: 10
  }
});

export default Login;
