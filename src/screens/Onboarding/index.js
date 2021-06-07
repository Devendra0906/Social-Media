import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import CustomButton from '../../components/CustomButtom';
import Color from '../../Helper/Color';

const onBoardingData = [
  {
    title: 'Meet Chain.Care, your health companion',
    description: 'Chain.care was created by doctors and scientists to help if you\'re feeling unwell'
  },
  {
    title: 'Tell Chain.care what\'s troubling you the most',
    description: 'Chain.care understands thousands of symptoms and conditions.'
  },
  {
    title: 'Decide what to do next',
    description: 'Chain.care suggest how to manage your health.'
  },
  {
    title: 'Your health, your data',
    description: 'And gives you over your data and helps you gain meaningful health insights.'
  }
]

class Onboarding extends Component {

  state = {
    currentIndex: 0
  }

  _onPressLogin = (type) => {
    // this.props.navigation.navigate('Login', { userAction: type })
    this.props.navigation.navigate('FirstScreen', { userAction: type })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          ref={ref => this.flatListRef = ref}
          data={onBoardingData}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          style={styles.container}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.infoItemContainer}>
                <Text style={styles.infoTitle}>
                  {item.title}
                </Text>
                <Text style={styles.infoDescription}>
                  {item.description}
                </Text>
              </View>
            )
          }}
        />
        <View style={styles.dotsContainer}>
          {onBoardingData.map((item, index) => {
            return (<View style={[styles.dot, { backgroundColor: this.state.currentIndex == index ? '#000' : '#666' }]} />)
          })
          }
        </View>
        <CustomButton
          buttonContainer={styles.loginContainer}
          onPress={() => { this._onPressLogin('login') }}
          title={'Login'}
        />
        <CustomButton
          buttonContainer={styles.registerContainer}
          onPress={() => this._onPressLogin('register')}
          title={'Register'}
          buttonTitle={{ color: Color.WHITE }}
        />
      </SafeAreaView>
    );
  }
}

export default Onboarding;
