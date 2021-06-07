import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import DeviceInfo from 'react-native-device-info';
import {
  Container,
  Content,
  Left,
  Right,
  Body,
  Button,
  Icon,
  Thumbnail,
  Title,
  List,
  Input
} from "native-base";
import { Header } from 'react-native-elements';

import data from "./../AddGroup/data";
import styles from "./styles";
import Color from "../../Helper/Color";

class AddMembers extends Component {
  render() {
    const navigation = this.props.navigation;
    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }
    return (
      <Container testID="groupList" style={{ backgroundColor: Color.WHITE }}>
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
          centerComponent={{ text: 'Add Members', style: { color: Color.BLACK, fontSize: 17, fontWeight: 'bold' } }}
        />

        <Content style={styles.content}>
          <View style={styles.requestContainerTwoView}>
            <Input placeholder='Type name or email Address'
              placeholderTextColor='#999'
              style={styles.emailInput}
            />
            <View style={[styles.requestContainerInnerView, styles.innerContainerView]}>
              <View style={styles.iconView}>
                <Icon type='MaterialIcons' name="people" style={{ color: Color.WHITE, fontSize: 25 }} />
              </View>
              <View style={{ marginLeft: 15, justifyContent: 'center' }}>
                <Text style={styles.nameText}>
                  Find Phone Contacts
                </Text>
              </View>
            </View>

            <View style={[styles.requestContainerInnerView, styles.innerContainerView]}>
              <View style={[styles.iconView, { backgroundColor: '#666' }]}>
                <Icon type='Entypo' name="link" style={{ color: Color.WHITE, fontSize: 25 }} />
              </View>
              <View style={{ marginLeft: 15, justifyContent: 'center' }}>
                <Text style={styles.nameText}>
                  Share an Invitation Link
                </Text>
              </View>
            </View>

            <View style={[styles.requestContainerInnerView, styles.innerContainerView]}>
              <View style={[styles.iconView, { backgroundColor: '#666' }]}>
                <Icon type='Foundation' name="mail" style={{ color: Color.WHITE, fontSize: 25 }} />
              </View>
              <View style={{ marginLeft: 15, justifyContent: 'center' }}>
                <Text style={styles.nameText}>
                  Pending Invites
                </Text>
              </View>
            </View>
            <Text style={{ backgroundColor: Color.WHITE, paddingLeft: 10, fontSize: 16, fontWeight: '600', paddingVertical: 10 }}>
              Coworker
            </Text>
            <FlatList
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <View>
                    <Button onPress={() => { }}>
                      <View style={[styles.requestContainerInnerView, { flex: 1 }]}>
                        <Thumbnail square small source={item.thumbnail} />
                        <View style={{ marginLeft: 15, justifyContent: 'center' }}>
                          <Text style={styles.nameText}>
                            {item.name}
                          </Text>
                        </View>
                      </View>
                    </Button>
                  </View>
                )
              }}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default AddMembers;