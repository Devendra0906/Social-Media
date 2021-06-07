// Global imports
import React, { Component } from 'react'
import {
  Image, View, TouchableOpacity, Text,
  SafeAreaView
} from 'react-native'
import { Header } from 'react-native-elements'

// File imports
import styles from './styles'
import { headerMarginTop } from '../../Helper/Constants'

// Image imports
import imgDownArrow from '../../../assets/images/downArrow.png'
import imgClose from '../../../assets/images/close.png'
import Color from '../../Helper/Color'

class Filter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedApprovalStauts: 'All',
      status: 'Active'
    }
  }

  _onPressApprovalStatus = (name) => {
    this.setState({ selectedApprovalStauts: name })
  }

  _onPressStatus = (name) => {
    this.setState({ status: name })
  }

  render() {
    return this.renderMainView()
  }

  renderMainView = () => {
    return (
      <View style={styles.container}>
        <View>
          {this.renderHeader()}
          {this.renderFiletByView()}
          {this.renderPatientJoiningDate()}
          {this.renderApprovalStatusDate()}
          {this.renderStatusDate()}
        </View>
        {this.renderApplyButton()}
      </View>
    )
  }

  renderHeader = () => {
    return (
      <Header
        containerStyle={{ backgroundColor: 'rgb(59,63,76)', marginTop: headerMarginTop, borderBottomWidth: 0 }}
        leftComponent={this.renderLeftHeader()}
        centerComponent={this.renderCenterHeader()}
        rightComponent={this.renderRightHeader()}
      />
    )
  }

  renderLeftHeader = () => {
    return (
      <TouchableOpacity onPress={() => { }}>
        <Image source={imgClose} style={styles.btnMenu} />
      </TouchableOpacity>
    )
  }

  renderCenterHeader = () => {
    return (
      <Text style={styles.headerText}>Filter</Text>
    )
  }

  renderRightHeader = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{ marginRight: 8 }}>
          <Text style={styles.headerText}>Reset</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderFiletByView = () => {
    return (
      <View style={styles.filterByContainer}>
        <Text style={styles.filterByText}>Filter By</Text>
      </View>
    )
  }

  renderPatientJoiningDate = () => {
    return (
      <View style={styles.subContainer}>
        <Text style={styles.instructionText}>Patient Joining Date</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.filterByText}>Date: </Text>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Text>June 2020</Text>
            <Image source={imgDownArrow} style={{ tintColor: 'red', height: 12, width: 12, marginHorizontal: 5 }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderApprovalStatusDate = () => {
    const { selectedApprovalStauts } = this.state
    return (
      <View style={styles.subContainer}>
        <Text style={styles.instructionText}>Approval Status</Text>
        <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
          <TouchableOpacity style={[
            styles.activateBtn,
            {
              backgroundColor: selectedApprovalStauts == 'All' ? Color.BLUE : Color.WHITE,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5
            }]} onPress={() => this._onPressApprovalStatus('All')}>
            <Text style={{ fontSize: 16, color: selectedApprovalStauts == 'All' ? Color.WHITE : Color.BLUE }}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.activateBtn, { backgroundColor: selectedApprovalStauts == 'Approved' ? Color.BLUE : Color.WHITE, }]} onPress={() => this._onPressApprovalStatus('Approved')}>
            <Text style={{ fontSize: 16, color: selectedApprovalStauts == 'Approved' ? Color.WHITE : Color.BLUE }}>Approved</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[
            styles.activateBtn,
            {
              backgroundColor: selectedApprovalStauts == 'Unapproved' ? Color.BLUE : Color.WHITE,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5
            }]} onPress={() => this._onPressApprovalStatus('Unapproved')}>
            <Text style={{ fontSize: 16, color: selectedApprovalStauts == 'Unapproved' ? Color.WHITE : Color.BLUE }}>Unapproved</Text>
          </TouchableOpacity>
        </View>
      </View >
    )
  }

  renderStatusDate = () => {
    const { status } = this.state
    return (
      <View style={styles.subContainer}>
        <Text style={styles.instructionText}>Status</Text>
        <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
          <TouchableOpacity style={[
            styles.activateBtn,
            {
              backgroundColor: status == 'Active' ? Color.BLUE : Color.WHITE,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5
            }]} onPress={() => this._onPressStatus('Active')}>
            <Text style={{ fontSize: 16, color: status == 'Active' ? Color.WHITE : Color.BLUE }}>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[
            styles.activateBtn, {
              backgroundColor: status == 'Inactive' ? Color.BLUE : Color.WHITE,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5
            }]} onPress={() => this._onPressStatus('Inactive')}>
            <Text style={{ fontSize: 16, color: status == 'Inactive' ? Color.WHITE : Color.BLUE }}>Inactive</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderApplyButton = () => {
    return (
      <SafeAreaView>
        <TouchableOpacity style={styles.applyBtn} activeOpacity={0.5}>
          <Text style={{ fontSize: 16, color: Color.WHITE }}>APPLY</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

export default Filter
