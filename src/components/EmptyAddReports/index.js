import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import localizedStrings from '../../Helper/LocalisedString'
import Color from '../../Helper/Color';
import styles from './styles'

class EmptyAddReport extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const navigation = this.context;
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/images/addReport.png')} style={{ height: 150, width: 150 }} />
        <Text style={styles.introText}>
          {localizedStrings.healthProfile.noMedicle}
        </Text>
        <TouchableOpacity style={styles.btnAddNew} onPress={() => { navigation.navigate('AddMedicalReport') }}>
          <Text style={{ fontSize: 17, color: Color.WHITE, fontWeight: '600' }}>{localizedStrings.healthProfile.addNew}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default EmptyAddReport;
