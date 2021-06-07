import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from './styles';
import Logo from '../../components/Logo';
import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButtom';
import Footer from '../../components/Footer';

class Diabetes extends Component {

  _onPressYes = () => {
    this.props.navigation.navigate('StartAssessment')
  }

  _onPressNo = () => {
    this.props.navigation.navigate('StartAssessment')
  }

  _onPressNotSay = () => {
    this.props.navigation.navigate('StartAssessment')
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainViewContainer}>
          <Logo />
          <CustomText text={`Do you have diabetes?`} />
          <CustomButton
            buttonContainer={styles.buttonContainer}
            onPress={this._onPressYes}
            title={'Yes'}
          />
          <CustomButton
            buttonContainer={[styles.buttonContainer, { marginTop: 10 }]}
            onPress={this._onPressNo}
            title={'No'}
          />
          <CustomButton
            buttonContainer={[styles.buttonContainer, { marginTop: 10 }]}
            onPress={this._onPressNotSay}
            title={'I\'d rather not say'}
          />
          <Footer />
        </View>
      </SafeAreaView>
    );
  }
}

export default Diabetes;
