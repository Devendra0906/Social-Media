import React, { Component } from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import DeviceInfo from 'react-native-device-info';
import ImagePicker from 'react-native-image-picker';
import {
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  Button,
  Icon,
  Title,
} from "native-base";

import { didUpdateGroupIcon } from "../../actions";
import data from "./data";
import styles from "./styles";
import Color from "../../Helper/Color";

class GroupCoverPhoto extends Component {

  openImagePicker() {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'photo'
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.props.didUpdateGroupIcon(source);
        this.props.navigation.goBack();
        // this.setState({
        //   avatarSource: source,
        // });
      }
    });
  }

  render() {
    const navigation = this.props.navigation;
    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }
    return (
      <Container style={{ backgroundColor: Color.WHITE }}>
        <Header style={headerStyle}>
          <Left>
            <Button
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              transparent
              onPress={() => navigation.goBack()}>
              <Icon type='Ionicons' name="ios-arrow-back" style={{ color: "#000" }} />
            </Button>
          </Left>
          <Body style={{ flex: 2 }}>
            <Title style={{ color: "#000" }}>Choose cover photo</Title>
          </Body>
          <Right>
            <Button
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              transparent
              onPress={() => { this.openImagePicker() }}>
              <Icon type='EvilIcons' name="camera" style={{ color: "#000", fontSize: 35 }} />
            </Button>
          </Right>
        </Header>

        <Content style={styles.content}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={{ flex: 1 }}
                onPress={() => {
                  const source = item;
                  this.props.didUpdateGroupIcon(item)
                  this.props.navigation.goBack();
                }}>
                <View style={{ flex: 1, aspectRatio: 1 }}>
                  <Image style={{ flex: 1, aspectRatio: 1 }} source={item} resizeMode='cover' />
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => `${index}`}
            numColumns={3} />
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    didUpdateGroupIcon: icon => dispatch(didUpdateGroupIcon(icon)),
  };
}

const mapStateToProps = state => {
  return {
    groupImage: state.groupMembersReducer.groupImage,
  }
};

export default connect(mapStateToProps, bindAction)(GroupCoverPhoto);