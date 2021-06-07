import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from './styles';
import Logo from '../../components/Logo';
import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButtom';
import Footer from '../../components/Footer';

class StartAssessment extends Component {

  _onPressStartAssessment = () => {
    this.props.navigation.navigate('HomeTab')
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainViewContainer}>
          <Logo />
          <CustomText text={`Thank you, Darshit Zalavadiya.\nI have enough info for now and can help you find out what's going on. Just start a symptom assessment.`} />
          <CustomButton
            buttonContainer={styles.buttonContainer}
            onPress={this._onPressStartAssessment}
            title={'Start symptom assessment'}
          />
          <Footer />
        </View>
      </SafeAreaView>
    );
  }
}

export default StartAssessment;
