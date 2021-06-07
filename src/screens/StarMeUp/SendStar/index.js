import { Button, Container, Header, Icon, Item, Left, Right } from "native-base";
import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import styles from './styles';
import Color from "../../../Helper/Color";
import localizedStrings from '../../../Helper/LocalisedString'

class StarMeUpChooseType extends Component {

  constructor(props) {
    super(props)

    props.navigation.setOptions({
      title: `${localizedStrings.starMeUpChooseType.sendAStar}`,
      headerLeft: () => (
        <TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          onPress={() => props.navigation.goBack()}
          style={{ marginLeft: 16 }}
        >
          <Icon name='ios-arrow-back' color={'#000'} size={25} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => props.navigation.navigate('StarMeUpDashboard')}>
          <Text style={{ fontSize: 15, marginRight: 16 }}>{localizedStrings.starMeUpChooseType.send}</Text>
        </TouchableOpacity>
      )
    })
  }

  componentWillMount() {
    this.selectedType = this.props.route.params.selectedType;
    this.selectedGroups = this.props.route.params.selecedGroups;
    this.route = this.props.route.params.route
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <Container testID="feed" style={{ backgroundColor: Color.WHITE }}>
        <View style={{ flex: 1, paddingHorizontal: 15, marginTop: 20 }}>
          <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold' }}>
            {this.route === 'giveStar' ? `${localizedStrings.starMeUpChooseType.selectedColleague}` : `${localizedStrings.starMeUpChooseType.selectedGroups}`}
          </Text>
          <View style={styles.tagsContainer}>
            {this.selectedGroups.map(value => {
              return (
                <View style={styles.tagTextContainer}>
                  <Text style={{ color: '#000' }}>{this.route === 'giveStar' ? value.name : value}</Text>
                </View>
              )
            })}
          </View>
          <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', marginTop: 8 }}>
            {localizedStrings.starMeUpChooseType.writeAComment}
          </Text>
          <TextInput
            placeholder={localizedStrings.starMeUpChooseType.placeHolder}
            placeholderTextColor='#bbb'
            multiline={true}
            style={{ marginTop: 10, borderBottomColor: '#bbb', borderBottomWidth: 1, height: 80 }}
          />
        </View>
      </Container>
    );
  }
}

export default StarMeUpChooseType;