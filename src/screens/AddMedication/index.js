import React, { Component } from 'react';
import { View, SafeAreaView, KeyboardAvoidingView, TextInput } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import CustomButton from '../../components/CustomButtom';
import Footer from '../../components/Footer';
import styles from './styles';
import Color from '../../Helper/Color';

class AddMedication extends Component {

  state = {
    name: ''
  }

  _onPressSave = () => {
    this.props.navigation.goBack()//.navigate('HomeTab')
  }

  _onChangenameText = (text) => {
    this.setState({ name: text })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.mainViewContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={'Enter your name'}
              placeholderTextColor={Color.GREY}
              value={this.state.name}
              onChangeText={this._onChangenameText}
            />
            {
              this.state.name.length > 0 &&
              <TouchableOpacity
                style={{ marginHorizontal: 10 }}
                onPress={() => this._onChangenameText('')}>
                <SimpleLineIcons name='close' size={20} color={Color.GREY} />
              </TouchableOpacity>
            }
          </View>
          <CustomButton
            buttonContainer={styles.buttonContainer}
            onPress={this._onPressSave}
            title={'Save'}
          />
          <Footer />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default AddMedication;
