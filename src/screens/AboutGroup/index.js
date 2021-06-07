import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  Container,
  Icon,
  Item,
  Thumbnail
} from "native-base";
import { Header } from 'react-native-elements';

import members from './../AddGroup/data';
import Color from '../../Helper/Color';

class AboutGroup extends Component {

  constructor(props) {
    super(props)

  }

  render() {

    let names = ""
    const groupMembers = members.map((item, index) => {
      return item.name.split(" ")[0]
      // return names = names + firstName + ", "
    });
    names = groupMembers.join(", ") + " are members";

    const navigation = this.props.navigation;
    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }

    return (
      <Container style={{ backgroundColor: Color.WHITE }}>
        <Header
          containerStyle={[{
            backgroundColor: Color.WHITE,
            paddingTop: 0,
            elevation: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 2,
            shadowOpacity: 0.1,
            shadowColor: Color.BLACK,
            marginBottom: 5
          }, headerStyle]}
          leftComponent={(
            <TouchableOpacity
              testID="sideMenuButton"
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              onPress={() => navigation.goBack()}
            >
              <Icon name="arrow-back" style={{ color: Color.BLACK }} />
            </TouchableOpacity>)}
          centerComponent={{ text: 'Social Group', style: { color: Color.BLACK, fontSize: 17, fontWeight: 'bold' } }}
        />
        <Text style={{ fontSize: 20, fontWeight: '700', margin: 10 }}>
          About
        </Text>
        <Text style={{ fontSize: 16, marginHorizontal: 10 }}>
          Plan, Share files and work togather on social App.
        </Text>
        <Item style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 10 }}>
          <Icon name='unlock-alt' type='FontAwesome' style={{ color: '#999', alignSelf: 'flex-start', top: 5 }} />
          <View style={{ marginHorizontal: 10, paddingBottom: 10 }}>
            <Text style={{ fontSize: 16 }}>
              Close group
            </Text>
            <Text style={{ fontSize: 13, marginTop: 5, marginRight: 10 }}>
              Anyone on Predapp GmBH can find the group add see who's in it. Only members can see posts.
            </Text>
          </View>
        </Item>
        <Text style={{ fontSize: 20, fontWeight: '700', margin: 10 }}>
          Members
        </Text>
        <FlatList
          testID="topGorupList"
          style={{ marginTop: 5, flexGrow: 0, marginLeft: 10 }}
          data={members}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View style={{ marginLeft: index === 0 ? 0 : -8, alignItems: 'center' }}>
                <Thumbnail small source={item.thumbnail} style={{ borderColor: '#999', borderWidth: 1 }} />
              </View>
            )
          }}
        />
        <Text style={{ fontSize: 16, marginHorizontal: 10, marginTop: 15 }}>
          {names}
        </Text>
      </Container>
    );
  }
}

export default AboutGroup;