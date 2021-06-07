// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  TextInput, ScrollView, KeyboardAvoidingView, Platform, FlatList
} from 'react-native'
import { Header } from 'react-native-elements'
import { Icon } from 'native-base'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import ImagePicker from 'react-native-image-picker'
import moment from 'moment'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgCalendar from '../../../assets/images/calendar.png'
import imgAttachment from '../../../assets/images/attachment.png'
import Color from '../../Helper/Color'

class Cholesterol extends Component {
  constructor(props) {
    super(props)

    this.state = {
      readingTakenOn: new Date(),
      showDatePicker: false,
      totalCholesterol: '',
      hdl: '',
      ldl: '',
      triglycerides: '',
      vldl: '',
      notes: '',
      selectedImages: []
    }
  }


  render() {
    return this.renderMainView()
  }

  hideDatePicker = () => {
    this.setState({ showDatePicker: false })
  }

  handleConfirm = date => {
    this.setState({ readingTakenOn: moment(date).format('MMM DD, YYYY') })
    this.hideDatePicker()
  }

  _onPressDatePicker = () => {
    this.setState({ showDatePicker: true })
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

  onPressDeleteImage = (index) => {
    let images = [...this.state.selectedImages]
    let filteredImage = images.filter((image, idx) => idx != index)
    this.setState({ selectedImages: filteredImage })
  }

  renderMainView = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            {this.renderReadingTakenOn()}
            {this.renderTotalCholesterol()}
            {this.renderHDL()}
            {this.renderLDL()}
            {this.renderTriglycerides()}
            {this.renderVLDL()}
            {this.renderAttachments()}
            {this.renderNotes()}
            <DateTimePickerModal
              isVisible={this.state.showDatePicker}
              mode="date"
              onConfirm={this.handleConfirm}
              onCancel={this.hideDatePicker}
              date={this.state.readingTakenOn}
            // maximumDate={new Date(moment().subtract(16, 'years'))}
            />
          </ScrollView>
        </KeyboardAvoidingView>
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
      <Text style={styles.headerText}>Cholesterol</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }}>
        <Text style={styles.headerText}>Save</Text>
      </TouchableOpacity>
    )
  }

  renderReadingTakenOn = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Reading Taken On</Text>
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this._onPressDatePicker()}>
          <TextInput
            placeholder='Frequency of intake'
            value={this.state.readingTakenOn}
            style={[styles.textInput, { flex: 1, paddingRight: 22 }]}
            editable={false}
            pointerEvents='none'
          />
          <Image source={imgCalendar} style={{ tintColor: 'red', height: 20, width: 20, marginLeft: -15, alignSelf: 'center', marginTop: 0 }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderTotalCholesterol = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Total Cholesterol</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', flex: 0.6, }}>
            <TextInput
              placeholder=''
              value={this.state.totalCholesterol}
              onChangeText={(text) => this.setState({ totalCholesterol: text })}
              style={[styles.textInput, { paddingRight: 22, flex: 1 }]}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10, fontSize: 16 }}>mg/dL</Text>
        </View>
      </View>
    )
  }

  renderHDL = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>HDL</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', flex: 0.6, }}>
            <TextInput
              placeholder=''
              value={this.state.hdl}
              onChangeText={(text) => this.setState({ hdl: text })}
              style={[styles.textInput, { paddingRight: 22, flex: 1 }]}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10, fontSize: 16 }}>mg/dL</Text>
        </View>
      </View>
    )
  }

  renderLDL = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>LDL</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', flex: 0.6, }}>
            <TextInput
              placeholder=''
              value={this.state.hdl}
              onChangeText={(text) => this.setState({ hdl: text })}
              style={[styles.textInput, { paddingRight: 22, flex: 1 }]}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10, fontSize: 16 }}>mg/dL</Text>
        </View>
      </View>
    )
  }

  renderTriglycerides = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Triglycerides</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', flex: 0.6, }}>
            <TextInput
              placeholder=''
              value={this.state.triglycerides}
              onChangeText={(text) => this.setState({ triglycerides: text })}
              style={[styles.textInput, { paddingRight: 22, flex: 1 }]}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10, fontSize: 16 }}>mg/dL</Text>
        </View>
      </View>
    )
  }

  renderVLDL = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>VLDL</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', flex: 0.6, }}>
            <TextInput
              placeholder=''
              value={this.state.vldl}
              onChangeText={(text) => this.setState({ vldl: text })}
              style={[styles.textInput, { paddingRight: 22, flex: 1 }]}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10, fontSize: 16 }}>mg/dL</Text>
        </View>
      </View>
    )
  }

  /*renderAttachments = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Add Attchments</Text>
        <TouchableOpacity onPress={this.openImagePicker}>
          <Image source={imgAttachment} style={{ tintColor: 'rgb(72,166,211)', width: 30, height: 35, marginTop: 15, marginLeft: 15 }} />
          <Text style={[styles.indicationText, { color: 'rgb(72,166,211)', fontSize: 12, marginTop: 5 }]}>{'   Upload\nAttachment'}</Text>
        </TouchableOpacity>
      </View>
    )
  }*/

  renderAttachments = () => {
    return (
      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Add Medical Reports</Text>
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

  renderNotes = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Notes</Text>
        <TextInput
          placeholder={''}
          style={styles.textInput}
          multiline
        />
      </View>
    )
  }

}

export default Cholesterol
