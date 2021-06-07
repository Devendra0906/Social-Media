import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import Logo from '../../components/Logo';
import CustomText from '../../components/CustomText';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Color from '../../Helper/Color';
import CustomButton from '../../components/CustomButtom';
import Footer from '../../components/Footer';


class EnterName extends Component {

  state = {
    name: 'Darshit Zalavadiya'
  }

  _onPressOkay = () => {
    this.props.navigation.navigate('GenderSelection', { name: this.state.name })
  }

  _onChangeEmailText = (text) => {
    this.setState({ name: text })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.mainViewContainer}
          behavior='padding'>
          <Logo />
          <CustomText text={'Great, What is your name?'} />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={'Enter your name'}
              placeholderTextColor={Color.GREY}
              value={this.state.name}
              onChangeText={this._onChangeEmailText}
            />
            {
              this.state.name.length > 0 &&
              <TouchableOpacity
                style={{ marginHorizontal: 10 }}
                onPress={() => this._onChangeEmailText('')}>
                <SimpleLineIcons name='close' size={20} color={Color.GREY} />
              </TouchableOpacity>
            }
          </View>
          <CustomButton
            buttonContainer={styles.continueContainer}
            onPress={this._onPressOkay}
            title={'Send'}
          />
          <Footer />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default EnterName;
