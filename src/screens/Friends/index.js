import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import DeviceInfo from 'react-native-device-info';
import { Header } from 'react-native-elements';
import {
  Container,
  Content,
  Button,
  Icon,
  Thumbnail,
  List,
  ListItem
} from "native-base";

import data from "./data";
import styles from "./styles";
import Color from "../../Helper/Color";

const commonColor = require("../../theme/variables/commonColor");

class Friends extends Component {
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
            backgroundColor: '#fff',
            paddingTop: 0,
            elevation: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 2,
            shadowOpacity: 0.1,
            shadowColor: '#000',
            marginBottom: 5
          }, headerStyle]}
          centerComponent={{ text: 'Groups', style: { color: '#000', fontSize: 17, fontWeight: 'bold' } }}
          rightComponent={(
            <TouchableOpacity onPress={() => navigation.navigate("AddGroup", { route: 'addGroup' })} testID="btnAddGroup">
              <Icon name="md-add" style={{ color: "#000" }} />
            </TouchableOpacity>
          )}
        />
        <Content style={styles.content}>
          <View style={styles.requestContainerTwoView}>
            <Text style={styles.requestContainerTwoText}>
              Your Groups
            </Text>
            <FlatList
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <ListItem>
                    <Button onPress={() => {
                      navigation.navigate('GroupDetails')
                    }}>
                      <View style={styles.requestContainerInnerView}>
                        <Thumbnail small source={item.thumbnail} />
                        <View style={{ marginLeft: 15, justifyContent: 'center', flex: 1 }}>
                          <Text style={styles.nameText}>
                            {item.name}
                          </Text>
                        </View>
                      </View>
                    </Button>
                  </ListItem>
                )
              }}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default Friends;
