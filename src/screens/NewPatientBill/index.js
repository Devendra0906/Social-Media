// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text, Switch,
  TextInput, ScrollView, KeyboardAvoidingView, Platform,
  SafeAreaView
} from 'react-native'
import { Header } from 'react-native-elements'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import ImagePicker from 'react-native-image-picker'
import moment from 'moment'
import SimplePicker from 'react-native-simple-picker'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'

// Image imports
import imgBack from '../../../assets/images/back.png'
import imgCalendar from '../../../assets/images/calendar.png'
import imgDownArrow from '../../../assets/images/downArrow.png'
import imgAdd from '../../../assets/images/plus.png'
import Color from '../../Helper/Color'
import { Icon } from 'native-base'

const options = ['Billable Item 1', 'Billable Item 2']

export class NewPatientBill extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showDatePicker: false,
      selectBillDate: new Date(),
      selectedOption: 'Billable Item 1',
      billableAmount: '',
      totalAmount: 0,
      selectedTabName: 'Paid',
      isOnEmailSwitch: false,
      isOnSMSSwitch: false,
    }
  }


  render() {
    return this.renderMainView()
  }

  _onPressApprovalStatus = (name) => {
    this.setState({ selectedTabName: name })
  }

  hideDatePicker = () => {
    this.setState({ showDatePicker: false })
  }

  handleConfirm = date => {
    this.setState({ selectBillDate: moment(date).format('MMM DD, YYYY') })
    this.hideDatePicker()
  }

  _onPressDatePicker = (type) => {
    this.setState({ showDatePicker: true, type: type })
  }

  renderMainView = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <View style={{ flex: 1, justifyContent: 'space-between', }}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
              {this.renderSelectBillDate()}
              {this.renderBillableItem()}
              {this.renderTotalAmount()}
              {this.renderPaymentStatus()}
              {this.renderSendBillMethod()}
            </ScrollView>
          </KeyboardAvoidingView>
          {this.renderGenerateBill()}
        </View>
        <DateTimePickerModal
          isVisible={this.state.showDatePicker}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
          date={this.state.selectBillDate}
        // maximumDate={new Date(moment().subtract(16, 'years'))}
        />
        <SimplePicker
          ref={'picker'}
          options={options}
          onSubmit={(option) => {
            this.setState({ selectedOption: option })
          }}
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
      <Text style={styles.headerText}>New Patient Bill</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <TouchableOpacity style={{ marginRight: 8 }}
        onPress={() => this.props.navigation.goBack()}>
        <Text style={styles.headerText}>Save</Text>
      </TouchableOpacity>
    )
  }

  renderSelectBillDate = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Reading Taken On</Text>
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this._onPressDatePicker('selectBillDate')}>
          <TextInput
            placeholder=''
            value={this.state.selectBillDate}
            style={[styles.textInput, { flex: 1, paddingRight: 22 }]}
            editable={false}
            pointerEvents='none'
          />
          <Image source={imgCalendar} style={{ tintColor: 'red', height: 20, width: 20, marginLeft: -15, alignSelf: 'center', marginTop: 0 }} />
        </TouchableOpacity>
      </View>
    )
  }

  renderBillableItem = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Select Billable Item</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <TouchableOpacity style={{ flexDirection: 'row', flex: 1.3 }} onPress={() => this.refs.picker.show()}>
            <TextInput
              value={this.state.selectedOption}
              style={[styles.textInput, { paddingRight: 22, flex: 1 }]}
              editable={false}
              pointerEvents='none'
            />
            <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginLeft: -15, alignSelf: 'center', marginTop: 8 }} />
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 12, fontSize: 16 }}>INR</Text>
          <TextInput
            placeholder={''}
            style={[styles.textInput, { flex: 0.5 }]}
            value={this.state.billableAmount}
            onChangeText={(text) => this.setState({ billableAmount: text })}
          />
          <TouchableOpacity>
            <Icon name="pluscircleo" type='AntDesign' style={styles.imgAdd} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderTotalAmount = () => {
    return (
      <Text style={styles.totalAmountText}>Total Amount: INR {this.state.totalAmount}</Text>
    )
  }

  renderPaymentStatus = () => {
    const { selectedTabName } = this.state
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Select Payment Status</Text>
        <View style={styles.subContainer}>
          <View style={styles.headerbtnContainer}>
            <TouchableOpacity style={[
              styles.activateBtn,
              {
                backgroundColor: selectedTabName == 'Paid' ? Color.WHITE : Color.BLUE,
              }]} onPress={() => this._onPressApprovalStatus('Paid')}>
              <Text style={{ fontSize: 14, color: selectedTabName == 'Paid' ? Color.BLACK : Color.WHITE }}>Paid</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[
              styles.activateBtn,
              {
                backgroundColor: selectedTabName == 'Unpaid' ? Color.WHITE : Color.BLUE,
              }]} onPress={() => this._onPressApprovalStatus('Unpaid')}>
              <Text style={{ fontSize: 14, color: selectedTabName == 'Unpaid' ? Color.BLACK : Color.WHITE }}>Unpaid</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  renderSendBillMethod = () => {
    return (
      <View style={{ marginTop: 12, paddingHorizontal: 20, }}>
        <Text style={{
          color: 'gray',
          fontSize: 18,
        }}>Select Payment Status</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.switchContainer}>
            <Switch
              value={this.state.isOnEmailSwitch}
              onValueChange={() => this.setState({ isOnEmailSwitch: !this.state.isOnEmailSwitch })}
            />
            <Text style={{ marginHorizontal: 10, fontSize: 16 }}>Email</Text>
          </View>
          <View style={[styles.switchContainer, { marginLeft: 10 }]}>
            <Switch
              value={this.state.isOnEmailSwitch}
              onValueChange={() => this.setState({ isOnEmailSwitch: !this.state.isOnEmailSwitch })}
            />
            <Text style={{ marginHorizontal: 10, fontSize: 16 }}>SMS</Text>
          </View>
        </View>
      </View>
    )
  }

  renderGenerateBill = () => {
    return (
      <SafeAreaView>
        <TouchableOpacity style={styles.genrateBillContainer}
          onPress={() => this.props.navigation.goBack()}>
          <Text style={{ fontSize: 16, color: 'white' }}>GENRATE BILL</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

export default NewPatientBill
