import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from './styles';
import Logo from '../../components/Logo';
import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButtom';
import Footer from '../../components/Footer';

class GenderSelection extends Component {

  _onPressMale = () => {
    this.props.navigation.navigate('SelectBirthdate')
  }

  _onPressFemale = () => {
    this.props.navigation.navigate('SelectBirthdate')
  }

  render() {
    const name = this.props.route.params.name
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainViewContainer}>
          <Logo />
          <CustomText text={`Hi ${name},\nare you male or female?`} />
          <CustomButton
            buttonContainer={styles.buttonContainer}
            onPress={this._onPressMale}
            title={'Male'}
          />
          <CustomButton
            buttonContainer={[styles.buttonContainer, { marginTop: 10 }]}
            onPress={this._onPressFemale}
            title={'Female'}
          />
          <Footer />
        </View>
      </SafeAreaView>
    );
  }
}

export default GenderSelection;
