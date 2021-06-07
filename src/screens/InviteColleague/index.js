import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image, FlatList, TextInput } from "react-native";
import DeviceInfo from 'react-native-device-info';
import {
  Container,
  Content,
  Icon
} from "native-base";
import styles from "./styles";
import { Header } from "react-native-elements";
import localizedStrings from '../../Helper/LocalisedString'

class InviteColleague extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "asdfas"
    };
  }

  renderContent() {
    if (this.state.email.length == 0) {
      return (
        <View>
          <View style={{ backgroundColor: '#ddd', paddingVertical: 10, marginHorizontal: 0 }}>
            <TouchableOpacity style={{ paddingHorizontal: 20, alignItems: 'center', height: 60, backgroundColor: '#fff', flexDirection: 'row' }}>
              <View style={{ height: 40, width: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1F40E6', borderRadius: 20 }}>
                <Image source={require('../../../assets/images/people.png')} style={{ height: 25, width: 25, tintColor: '#fff' }} resizeMode='contain' />
              </View>
              <Text style={{ marginLeft: 10, fontSize: 15 }}>{localizedStrings.inviteColleague.findPhone}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ paddingHorizontal: 20, alignItems: 'center', height: 60, backgroundColor: '#fff', flexDirection: 'row' }}>
            <View style={{ height: 40, width: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#666', borderRadius: 20 }}>
              <Image source={require('../../../assets/images/email.png')} style={{ height: 25, width: 25, tintColor: '#fff' }} resizeMode='contain' />
            </View>
            <Text style={{ marginLeft: 10, fontSize: 15 }}>{localizedStrings.inviteColleague.pendingInvites}</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ backgroundColor: '#ddd', paddingVertical: 10, marginHorizontal: 0 }}>
            <View style={{ paddingHorizontal: 20, alignItems: 'center', height: 60, backgroundColor: '#fff', flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                <View style={{ height: 40, width: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#666', borderRadius: 20 }}>
                  <Image source={require('../../../assets/images/email.png')} style={{ height: 25, width: 25, tintColor: '#fff' }} resizeMode='contain' />
                </View>
                <Text style={{ marginLeft: 10, fontSize: 15 }}>{this.state.email}@predapp.com</Text>
              </View>
              <TouchableOpacity>
                <Text style={{ color: '#1F40E6', paddingVertical: 8, paddingHorizontal: 15, borderColor: '#1F40E6', borderWidth: 1, borderRadius: 6 }}>
                  {localizedStrings.inviteColleague.invite}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    }
  }

  render() {
    const navigation = this.props.navigation;

    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }

    return (
      <Container testID="SettingScreen" style={{ backgroundColor: "#fff" }}>
        <Header
          containerStyle={[{
            backgroundColor: '#fff',
            paddingTop: 0,
            elevation: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 2,
            shadowOpacity: 0.1,
            shadowColor: '#000',
            marginBottom: 5
          }, headerStyle]}
          leftComponent={(
            <TouchableOpacity
              testID="sideMenuButton"
              style={{ marginLeft: 16 }}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              onPress={() => navigation.goBack()}
            >
              <Icon type='Ionicons' name="ios-arrow-back" style={{ color: "#000" }} />
            </TouchableOpacity>)}
          centerComponent={{ text: `${localizedStrings.inviteColleague.inviteColleague}`, style: { color: '#000', fontSize: 17, fontWeight: 'bold' } }}
        />
        <Content>
          <TextInput
            style={{ marginHorizontal: 0, paddingVertical: 10, paddingHorizontal: 15, fontSize: 17, color: '#000', marginVertical: 10 }}
            placeholder={localizedStrings.inviteColleague.enterEmail}
            placeholderTextColor={'#666'}
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
          />
          {this.renderContent()}
        </Content>
      </Container>
    );
  }
}

export default InviteColleague;
