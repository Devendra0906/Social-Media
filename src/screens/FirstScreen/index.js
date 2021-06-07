import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Logo from '../../components/Logo';
import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButtom';
import Footer from '../../components/Footer';

const logo = require('../../../assets/images/logo.png')

class FirstScreen extends Component {

  _onPressOkay = () => {
    this.props.navigation.navigate('EnterName')
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainViewContainer}>
          <Logo />
          <CustomText text={'I get smarter the more you tell me, so I\'m going to ask a few questions the will help me help you.'} />
          <CustomButton
            buttonContainer={styles.continueContainer}
            onPress={this._onPressOkay}
            title={'Okay'}
          />
          <Footer />
        </View>
      </SafeAreaView>
    );
  }
}

export default FirstScreen;
