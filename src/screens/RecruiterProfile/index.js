// Global imports
import React, { Component } from 'react'
import {
  View, TouchableOpacity, Text, ScrollView,
  Image, TextInput, KeyboardAvoidingView
} from 'react-native'
import { Icon } from 'native-base'
import ImagePicker from 'react-native-image-picker'
import { Dropdown } from "react-native-material-dropdown"
import { Header } from '@react-navigation/stack';

// Styles
import styles from './styles'

let _this
const INDUSTRY_LIST = [
  { value: "Information & Technology - India" },
  { value: "Cook" },
  { value: "Waiter" }
];
const COMPANY_SIZE = [
  { value: "0 - 10 Employees" },
  { value: "11 - 20 Employees" },
  { value: "21 - 50 Employees" },
  { value: "51 - 100 Employees" },
  { value: "101 - 500 Employees" },
  { value: "501 - 1000 Employees" },
  { value: "1001 - 5000 Employees" },
  { value: "5001 - 10000 Employees" },
  { value: "10000+ Employees" },
]

const TYPE_LIST = [
  { value: "Government" },
  { value: "Private" },
  { value: "Public" },
  { value: "Privately held" },
]

class RecruiterProfile extends Component {

  constructor(props) {
    super(props)

    _this = this
    this.state = {
      isEditable: false,
      companyName: '',
      description: '',
      website: '',
      founded: '',
    };

    props.navigation.setOptions({
      title: 'Profile',
      headerLeft: () => (
        <TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          style={{ marginLeft: 16 }}
          onPress={() => props.navigation.goBack()}>
          <Icon name='ios-arrow-back' />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 16 }}
          onPress={() => { props.navigation.goBack() }}>
          <Text>{props.route.params && props.route.params.buttonTitle ? props.route.params.buttonTitle : 'Save'}</Text>
        </TouchableOpacity>
      )
    });
  };


  render() {
    return this.renderMainView()
  }


  _openImagePicker = () => {
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
        _this.setState({ avatarSource: source });
      }
    });
  }

  _onChangeTextCompanyName = (text) => {
    this.setState({ companyName: text })
  }

  _onChangeTextDescription = (text) => {
    this.setState({ description: text })
  }

  _onChangeTextWebsite = (text) => {
    this.setState({ website: text })
  }

  _onChangeTextFounded = (text) => {
    this.setState({ website: text })
  }

  renderMainView = () => {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        keyboardVerticalOffset={Header.HEIGHT}
        behavior={'padding'}>
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
          {this.renderTopImageView()}
          {this.renderCompanyName()}
          {this.renderIndustry()}
          {this.renderDescription()}
          {this.renderWebsite()}
          {this.renderCompanySize()}
          {this.renderType()}
          {this.renderFounded()}
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }

  renderTopImageView = () => {
    return (
      <View>
        <Image
          source={this.state.avatarSource}
          style={styles.companyImage}
        />
        <TouchableOpacity style={[styles.floatButtons, { right: 20 }]} onPress={this._openImagePicker}>
          <Icon name={'camera'} style={{ fontSize: 25 }} />
        </TouchableOpacity>

      </View>
    )
  }

  renderCompanyName = () => {
    return (
      <View style={{ paddingHorizontal: 15 }}>
        <Text style={styles.indicationLabel}>Company</Text>
        <TextInput
          value={this.state.companyName}
          placeholder='Company name'
          style={styles.inputField}
          onChangeText={this._onChangeTextCompanyName}
        />
      </View>
    )
  }

  renderIndustry = () => {
    return (
      <View style={{ paddingHorizontal: 15, marginVertical: 10 }}>
        <Text style={styles.indicationLabel}>Industry</Text>
        <Dropdown
          containerStyle={styles.dropdownContainer}
          rippleOpacity={0}
          dropdownOffset={{ top: -30, left: 0 }}
          data={INDUSTRY_LIST}
          value={"Information & Technology - India"}
          dropdownPosition={-5}
          onChangeText={(value, idx) => {

          }}
          renderBase={({ props, title, value, renderAccessory }) => {
            return (
              <View>
                <TextInput
                  pointerEvents="none"
                  style={styles.filterText}
                  editable={false}
                  value={title}
                />
              </View>
            );
          }}
        />
      </View>
    )
  }

  renderDescription = () => {
    return (
      <View style={{ paddingHorizontal: 15, marginVertical: 10 }}>
        <Text style={styles.indicationLabel}>Description</Text>
        <TextInput
          value={this.state.description}
          placeholder='Description'
          style={[styles.inputField, { height: 100, padding: 8 }]}
          multiline
          onChangeText={this._onChangeTextDescription}
        />
      </View>
    )
  }

  renderWebsite = () => {
    return (
      <View style={{ paddingHorizontal: 15 }}>
        <Text style={styles.indicationLabel}>Website</Text>
        <TextInput
          value={this.state.website}
          placeholder='Website'
          style={styles.inputField}
          onChangeText={this._onChangeTextWebsite}
        />
      </View>
    )
  }

  renderCompanySize = () => {
    return (
      <View style={{ paddingHorizontal: 15, marginVertical: 10 }}>
        <Text style={styles.indicationLabel}>Industry</Text>
        <Dropdown
          containerStyle={styles.dropdownContainer}
          rippleOpacity={0}
          dropdownOffset={{ top: -80, left: 0 }}
          data={COMPANY_SIZE}
          value={"0 - 50 Employees"}
          dropdownPosition={-5}
          onChangeText={(value, idx) => {

          }}
          renderBase={({ props, title, value, renderAccessory }) => {
            return (
              <View>
                <TextInput
                  pointerEvents="none"
                  style={styles.filterText}
                  editable={false}
                  value={title}
                />
              </View>
            );
          }}
        />
      </View>
    )
  }


  renderType = () => {
    return (
      <View style={{ paddingHorizontal: 15, marginVertical: 10 }}>
        <Text style={styles.indicationLabel}>Type</Text>
        <Dropdown
          containerStyle={styles.dropdownContainer}
          rippleOpacity={0}
          dropdownOffset={{ top: -200, left: 0 }}
          data={TYPE_LIST}
          value={"Privately Held"}
          dropdownPosition={-5}
          onChangeText={(value, idx) => {

          }}
          renderBase={({ props, title, value, renderAccessory }) => {
            return (
              <View>
                <TextInput
                  pointerEvents="none"
                  style={styles.filterText}
                  editable={false}
                  value={title}
                />
              </View>
            );
          }}
        />
      </View>
    )
  }

  renderFounded = () => {
    return (
      <View style={{ paddingHorizontal: 15 }}>
        <Text style={styles.indicationLabel}>Founded</Text>
        <TextInput
          value={this.state.founded}
          placeholder='Founded'
          style={styles.inputField}
          onChangeText={this._onChangeTextFounded}
        />
      </View>
    )
  }

}

export default RecruiterProfile
