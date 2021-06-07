import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './styles';

class Assessment extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text> index </Text>
      </SafeAreaView>
    );
  }
}

export default Assessment;
