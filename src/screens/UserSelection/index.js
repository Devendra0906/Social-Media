import React, { Component } from 'react';
import { Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';

import styles from './styles';

const logo = require('../../../assets/images/logo.png')
class UserSelection extends Component {
  static navigationOptions = {
    headerShown: false
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={{ marginHorizontal: 20, textAlign: 'center', fontWeight: '600', fontSize: 17, marginTop: 10 }}>
          Looking for a job in the UAE?{"\n"}Get a Job with Prenigma Works!
        </Text>
        <TouchableOpacity style={{ marginHorizontal: 20, backgroundColor: '#000', paddingVertical: 10, borderRadius: 8, alignItems: 'center', marginTop: 15 }}
          onPress={() => {
            this.props.navigation.navigate('HomeTab')
          }}>
          <Text style={{ color: "#fff", fontWeight: '600' }}>
            I AM LOOKING FOR A JOB
          </Text>
        </TouchableOpacity>

        <Text style={{ marginHorizontal: 20, textAlign: 'center', fontWeight: '600', fontSize: 17, marginTop: 40 }}>
          Need to hire staff for your business?
        </Text>
        <TouchableOpacity style={{ marginHorizontal: 20, borderColor: '#000', borderWidth: 1, paddingVertical: 10, borderRadius: 8, alignItems: 'center', marginTop: 15 }}
          onPress={() => {
            this.props.navigation.navigate('RecruiterTab')
          }}>
          <Text style={{ fontWeight: '600' }}>
            I AM A RECRUITER
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default UserSelection;
