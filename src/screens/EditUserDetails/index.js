import React, { Component } from 'react';
import { View, TouchableOpacity, Image, TextInput, Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Container, Icon, Content } from "native-base";
import { Header } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import ImagePicker from 'react-native-image-picker';
import styles from "./styles";
import Color from '../../Helper/Color';

const userThumb = require('./../../../assets/images/user_thumb.png');
const languages = require('../../../assets/languages.json');

class EditUserDetails extends Component {

  constructor(props) {
    super(props)

    this.state = {
      profileImage: undefined,
      language: 'English'
    }
  }

  openImagePicker() {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'mixed'
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
        this.setState({ profileImage: source });
      }
    });
  }

  render() {
    const navigation = this.props.navigation;
    const { profileImage } = this.state;
    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }

    return (
      <Container style={{ backgroundColor: Color.WHITE }}>
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
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              testID="sideMenuButton"
              onPress={() => navigation.goBack()}
            >
              <Icon type='Ionicons' name="ios-arrow-back" style={{ color: "#000" }} />
            </TouchableOpacity>)}
          centerComponent={{ text: 'Edit Details', style: { color: '#000', fontSize: 17, fontWeight: 'bold' } }}
        />
        <Content>
          <View style={styles.profileImageButton}>
            <View style={styles.editContainer}>
              <Icon name='pencil' type='MaterialCommunityIcons' style={styles.editIcon}
                onPress={() => this.openImagePicker()}
              />
            </View>
            <View style={styles.imageContainer}>
              <Image style={styles.imageContainer} source={profileImage !== undefined ? profileImage : userThumb}
                resizeMode='cover' />
            </View>
          </View>
          <View style={{ marginTop: 15, marginHorizontal: 15 }}>
            <TextInput
              placeholder='First Name'
              placeholderTextColor='#666'
              style={styles.textInput}
            />
            <TextInput
              placeholder='Last Name'
              placeholderTextColor='#666'
              style={[styles.textInput, { marginTop: 15 }]}
            />
            <TextInput
              placeholder='Headline'
              placeholderTextColor='#666'
              style={[styles.textInput, { marginTop: 15 }]}
            />
            <TextInput
              placeholder='Country/Region'
              placeholderTextColor='#666'
              style={[styles.textInput, { marginTop: 15 }]}
            />
            <TextInput
              placeholder='Province/State'
              placeholderTextColor='#666'
              style={[styles.textInput, { marginTop: 15 }]}
            />
            <TextInput
              placeholder='City/District'
              placeholderTextColor='#666'
              style={[styles.textInput, { marginTop: 15 }]}
            />
            <Dropdown
              rippleOpacity={0}
              data={languages}
              textColor={'#000'}
              baseColor={'#000'}
              value={this.state.language}
              onChangeText={label => {
                this.setState({ language: label });
              }}
              valueExtractor={(item, index) => item.name}
              renderBase={() => {
                return (
                  <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#666',
                    borderBottomWidth: 0.5, marginTop: 15
                  }}>
                    <TextInput
                      placeholder='Asspciate With'
                      placeholderTextColor='#666'
                      style={{
                        flex: 1, marginHorizontal: 0,
                        paddingVertical: 8,
                        fontSize: 15
                      }}
                      value={this.state.language}
                      editable={false}
                      pointerEvents='none'
                    />
                    <Icon name='chevron-thin-down' type='Entypo' style={{ fontSize: 20, color: '#000' }} />
                  </View>
                );
              }}
            />
            <TouchableOpacity style={styles.saveContainer}
              onPress={() => navigation.goBack()}>
              <Text style={styles.saveText}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

export default EditUserDetails;