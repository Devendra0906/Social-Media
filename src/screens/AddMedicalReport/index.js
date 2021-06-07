import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Platform, ScrollView, TextInput, FlatList } from 'react-native';
import { Header } from 'react-native-elements';
import DateTimePickerModal from "react-native-modal-datetime-picker"
import Color from '../../Helper/Color';
import { Icon } from 'native-base'
import moment from 'moment'
import ImagePicker from 'react-native-image-picker'

import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'
import localizedStrings from '../../Helper/LocalisedString'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgPlus from '../../../assets/images/plus.png'
import imgDownArrow from '../../../assets/images/downArrow.png'
import imgAttachment from '../../../assets/images/attachment.png'
import { KeyboardAvoidingView } from 'react-native';

class AddMedicalReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDatePicker: false,
      reportDate: null,
      selectedImages: []
    };
  }

  _onPressDatePicker = () => {
    this.setState({ showDatePicker: true })
  }

  hideDatePicker = () => {
    this.setState({ showDatePicker: false })
  }

  handleConfirm = date => {
    this.setState({ reportDate: date })
    this.hideDatePicker();
  };

  openImagePicker = () => {
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
        debugger
        let images = [...this.state.selectedImages]
        images.push(response.uri)
        this.setState({ selectedImages: images });
      }
    });
  }

  onPressDeleteImage = (index) => {
    let images = [...this.state.selectedImages]
    let filteredImage = images.filter((image, idx) => idx != index)
    this.setState({ selectedImages: filteredImage })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderReportForm()}
        <DateTimePickerModal
          isVisible={this.state.showDatePicker}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
          date={this.state.reportDate ? this.state.reportDate : new Date()}
        />
      </View>
    );
  }
  renderHeader = () => {
    return (
      <Header
        containerStyle={{ backgroundColor: Color.WHITE, marginTop: headerMarginTop, borderBottomWidth: 0 }}
        leftComponent={this.renderLeftHeader()}
        centerComponent={this.renderCenterHeader()}
        rightComponent={this.renderRightHeader()}
      />
    )
  }

  renderLeftHeader = () => {
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
        <Image source={imgBack} style={styles.btnMenu} />
      </TouchableOpacity>
    )
  }

  renderCenterHeader = () => {
    return (
      <Text style={styles.headerText}>{localizedStrings.addMedicalReport.addMedicalReport}</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }}>
        <Text style={styles.headerRightText}>{localizedStrings.addMedicalReport.save}</Text>
      </TouchableOpacity>
    )
  }

  renderInputTitleLabel(title) {
    return (
      <Text style={{ color: Color.GREY, fontSize: 14, fontWeight: '600' }}>{title}</Text>
    )
  }

  renderReportForm() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null}
        style={[styles.container, { paddingHorizontal: 15, paddingVertical: 10 }]}>
        <ScrollView style={styles.container}>
          {this.renderReportName()}
          {this.renderDatePicker()}
          {this.renderTestResultInput()}
          {this.renderPrescribedByInput()}
          {this.renderTestCenterInput()}
          {this.renderAttachments()}
          {this.renderNotes()}
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }

  renderReportName() {
    return (
      <View>
        {this.renderInputTitleLabel(`${localizedStrings.addMedicalReport.nameOfMedicalReport}`)}
        <TextInput
          style={styles.inputStyle}
          placeholderTextColor={Color.GREY}
          placeholder="e.g. Chest x-ray, Thyrod blood test etc."
        />
      </View>
    )
  }

  renderDatePicker() {
    return (
      <View style={[{ marginTop: 20 }]}>
        {this.renderInputTitleLabel('Date')}
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: 130, borderBottomColor: Color.LIGHT_GREY, borderBottomWidth: 1 }} onPress={this._onPressDatePicker}>
          <TextInput
            placeholder=''
            style={[styles.inputStyle, { flex: 1, borderBottomWidth: 0 }]}
            editable={false}
            pointerEvents='none'
            value={this.state.reportDate ? moment(this.state.reportDate).format('MMM DD, YYYY') : ""}
          />
          <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: 8, marginTop: 0 }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderTestResultInput() {
    return (
      <View style={[{ marginTop: 20 }]}>
        {this.renderInputTitleLabel(`${localizedStrings.addMedicalReport.testTitle}`)}
        <TextInput
          style={styles.inputStyle}
          placeholderTextColor={Color.GREY}
          placeholder={localizedStrings.addMedicalReport.testTitlePlaceholder}
        />
      </View>
    )
  }

  renderPrescribedByInput() {
    return (
      <View style={[{ marginTop: 20 }]}>
        {this.renderInputTitleLabel(`${localizedStrings.addMedicalReport.prescribedBy}`)}
        <TextInput
          style={styles.inputStyle}
          placeholderTextColor={Color.GREY}
          placeholder=""
        />
      </View>
    )
  }

  renderTestCenterInput() {
    return (
      <View style={[{ marginTop: 20 }]}>
        {this.renderInputTitleLabel(`${localizedStrings.addMedicalReport.testCenter}`)}
        <TextInput
          style={styles.inputStyle}
          placeholderTextColor={Color.GREY}
          placeholder=""
        />
      </View>
    )
  }

  renderAttachments = () => {
    return (
      <View style={{ marginTop: 20 }}>
        {this.renderInputTitleLabel(`${localizedStrings.addMedicalReport.addAttachment}`)}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <TouchableOpacity onPress={this.openImagePicker} style={{ height: 80, justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
            <Image source={imgAttachment} style={{ tintColor: 'rgb(72,166,211)', width: 30, height: 35 }} />
            <Text style={{ color: 'rgb(72,166,211)', fontSize: 12, marginTop: 5, textAlign: 'center' }}>{localizedStrings.addMedicalReport.uploadAttachment}</Text>
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <FlatList
              data={this.state.selectedImages}
              horizontal
              renderItem={this.renderImageCell}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    )
  }

  renderImageCell = ({ item, index }) => {
    return (
      <View style={{ marginLeft: 15, height: 80, paddingTop: 10 }}>
        <Image style={{ height: 70, width: 70, borderRadius: 6 }} source={{ uri: item }} />
        <TouchableOpacity
          style={{ backgroundColor: 'rgba(0,0,0,0.3)', height: 25, width: 25, borderRadius: 12.5, position: 'absolute', alignItems: 'center', justifyContent: 'center', top: 0, right: -10 }}
          onPress={() => this.onPressDeleteImage(index)}
        >
          <Icon name="close" type='AntDesign' style={{ fontSize: 18, color: Color.WHITE }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderNotes() {
    return (
      <View style={[{ marginTop: 20 }]}>
        {this.renderInputTitleLabel(`${localizedStrings.addMedicalReport.notes}`)}
        <TextInput
          style={styles.inputStyle}
          placeholderTextColor={Color.GREY}
          placeholder=""
        />
      </View>
    )
  }
}

export default AddMedicalReport;
