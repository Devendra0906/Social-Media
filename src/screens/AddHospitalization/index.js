// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  TextInput, ScrollView, FlatList
} from 'react-native'
import { Header } from 'react-native-elements'
import { Icon } from 'native-base'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import moment from 'moment'
import ImagePicker from 'react-native-image-picker'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'
import localizedStrings from '../../Helper/LocalisedString'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgDownArrow from '../../../assets/images/downArrow.png'
import imgAttachment from '../../../assets/images/attachment.png'
import Color from '../../Helper/Color'

class AddHospitalization extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startDate: '',
      endDate: '',
      type: 'start',
      showDatePicker: false,
      selectedImages: []
    }
  }

  render() {
    return this.renderMainView()
  }

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
        let images = [...this.state.selectedImages]
        images.push(response.uri)
        this.setState({ selectedImages: images });
      }
    });
  }

  hideDatePicker = () => {
    this.setState({ showDatePicker: false })
  }

  handleConfirm = date => {
    if (this.state.type == 'start') {
      this.setState({ startDate: moment(date).format('MMM DD, YYYY') })
    } else {
      this.setState({ endDate: moment(date).format('MMM DD, YYYY') })
    }
    this.hideDatePicker();
  };

  _onPressDatePicker = (type) => {
    this.setState({ showDatePicker: true, type: type })
  }

  onPressDeleteImage = (index) => {
    let images = [...this.state.selectedImages]
    let filteredImage = images.filter((image, idx) => idx != index)
    this.setState({ selectedImages: filteredImage })
  }

  renderMainView = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={{ flex: 1 }}>
          {this.renderNameOfAllergy()}
          {this.renderDetailView()}
          {this.renderTreatedBy()}
          {this.renderReaction()}
          {this.renderReason()}
          {this.renderNotes()}
        </ScrollView>
        <DateTimePickerModal
          isVisible={this.state.showDatePicker}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
          date={new Date()}
        // maximumDate={new Date(moment().subtract(16, 'years'))}
        />
      </View>
    )
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
      <Text style={styles.headerText}>{localizedStrings.AddHospitalization.addHospitalization}</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }}>
        <Text style={styles.headerText}>{localizedStrings.AddHospitalization.save}</Text>
      </TouchableOpacity>
    )
  }

  renderNameOfAllergy = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.AddHospitalization.admissionDate}</Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }} onPress={() => this._onPressDatePicker('start')}>
          <TextInput
            placeholder={localizedStrings.AddHospitalization.startDate}
            style={[styles.textInput, { paddingRight: 22, }]}
            value={this.state.startDate}
            editable={false}
            pointerEvents='none'
          />
          <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: -15, alignSelf: 'center', marginTop: 0 }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderDetailView = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.AddHospitalization.dischargeDate}</Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }} onPress={() => this._onPressDatePicker('end')}>
          <TextInput
            placeholder={localizedStrings.AddHospitalization.endDate}
            style={[styles.textInput, { paddingRight: 22, }]}
            value={this.state.endDate}
            editable={false}
            pointerEvents='none'
          />
          <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: -15, alignSelf: 'center', marginTop: 0 }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderTreatedBy = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.AddHospitalization.providerName}</Text>
        <TextInput
          placeholder={'Dr. Franklin p. Adams'}
          style={styles.textInput}
        />
      </View>
    )
  }

  renderReaction = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>{localizedStrings.AddHospitalization.hospitalName}</Text>
        <TextInput
          placeholder={'St. Johns Medical College'}
          style={styles.textInput}
        />
      </View>
    )
  }

  renderReason = () => {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.indicationText}>Reason</Text>
        <TextInput
          placeholder={localizedStrings.AddHospitalization.respiratoryIllness}
          style={styles.textInput}
        />
      </View>
    )
  }

  renderNotes = () => {
    return (
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <Text style={styles.indicationText}>{localizedStrings.AddHospitalization.addAttchment}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <TouchableOpacity onPress={this.openImagePicker} style={{ height: 80, justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
            <Image source={imgAttachment} style={{ tintColor: 'rgb(72,166,211)', width: 30, height: 35 }} />
            <Text style={{ color: 'rgb(72,166,211)', fontSize: 12, marginTop: 5, textAlign: 'center' }}>{'Upload\nAttachment'}</Text>
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
}

export default AddHospitalization
