import React, { Component } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import DeviceInfo from 'react-native-device-info';
import {
  Container, Header,
  Content, Left, Right, Body,
  Button, Icon, Thumbnail, Title,
} from "native-base";

import data from "./../Friends/data";
import styles from "./styles";
import Color from "../../Helper/Color";
import localizedStrings from '../../Helper/LocalisedString'

class PostToGroup extends Component {
  render() {
    const navigation = this.props.navigation;
    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }
    return (
      <Container testID="postToGroupSreen" style={{ backgroundColor: Color.WHITE }}>
        <Header style={headerStyle}>
          <Left>
            <Button
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              transparent
              onPress={() => {
                this.props.route.params.onClose()
                navigation.goBack()
              }}>
              <Icon type='Ionicons' name="ios-arrow-back" style={{ color: "#000" }} />
            </Button>
          </Left>
          <Body style={{ flex: 1.5 }}>
            <Title style={{ color: "#000" }}>{localizedStrings.postToGroup.postToGroup}</Title>
          </Body>
          <Right>

          </Right>
        </Header>

        <View style={{ backgroundColor: '#ddd' }}>
          <TextInput style={{ height: 40, fontSize: 16, backgroundColor: '#fff', paddingHorizontal: 10, marginBottom: 8 }}
            placeholder={localizedStrings.postToGroup.searchGroups}
            placeholderTextColor='#ddd'
          />
        </View>
        <Content style={styles.content}>
          <View style={styles.requestContainerTwoView}>
            <Text style={styles.requestContainerTwoText}>
              {localizedStrings.postToGroup.yourTopGroups}
            </Text>
            <FlatList
              style={{ marginTop: 10 }}
              data={data}
              keyExtractor={(item, index) => `${index}`}
              renderItem={({ item, index }) => {
                return (
                  <View testID={`group${index}`}>
                    <Button onPress={() => {
                      this.props.route.params.onSelect(item.name)
                      navigation.goBack()
                    }}>
                      <View style={styles.requestContainerInnerView}>
                        <Thumbnail square small source={item.thumbnail} />
                        <View style={{ marginLeft: 15, justifyContent: 'center', flex: 1 }}>
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

export default PostToGroup;
