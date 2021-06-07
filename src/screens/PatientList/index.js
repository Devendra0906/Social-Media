// Global imports
import React, {Component, useEffect, useState} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Header} from 'react-native-elements';
import {Icon} from 'native-base';
import ActionButton from 'react-native-action-button';

// File imports
import styles from './styles';
import {headerMarginTop} from '../../Helper/Constants';
import localizedStrings from '../../Helper/LocalisedString';

// Image imports
import imgdelt from '../../../assets/images/delete.png';
import imgMenu from '../../../assets/images/menu.png';
import imgPlus from '../../../assets/images/plus.png';
import imgBell from '../../../assets/images/bell.png';
import imgSearch from '../../../assets/images/search.png';
import imgInfo from '../../../assets/images/info.png';
import imgFilter from '../../../assets/images/filter.png';
import imgRadioOn from '../../../assets/images/radioOn.png';
import imgRadioOff from '../../../assets/images/radioOff.png';
import imgPeople from '../../../assets/images/people.png';
import profileImg from '../../../assets/images/people.png';
import stethoscope from '../../../assets/images/stethoscope.png';
import {DrawerActions} from '@react-navigation/native';
import Color from '../../Helper/Color';
import {connect} from 'react-redux';
import {
  fetchPatients,
  deletePatient,
} from '../../__Redux/__actions/patientActions';
class PatientList extends Component {
  /**API */

  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.props.getPatients();
  }
  // async getApiData() {
  //   // let resp = await axios.get('http://10.0.2.2:8000/');
  //   let resp = await axios.get(
  //     'http://10.0.2.2:8000/student/602d0d3d64835729773eb6b4',
  //   );
  //   this.setState({data: resp.data.data});
  // }

  /**END API */
  state = {
    isSelectionOn: false,
    selectedPatientIndex: -1,
  };

  render() {
    return this.renderMainView();
  }

  keyExtractor = (item, index) => index.toString();

  _radioButtonPressed = (item, index) => {};

  onPressPatientItem = () => {
    this.props.navigation.navigate('PatientDetailsScreen');
  };
  renderMainView = () => {
    return (
      <View testID="patientMainView" style={styles.container}>
        {this.renderHeader()}
        {/* this.renderCurrentlyTrialView() */}
        {this.renderShowingPatientView()}
        {this.props.state.patientReducer.loading == false ? (
          this.renderActivePatientList()
        ) : (
          <Text style={styles.loading}>loading...</Text>
        )}
        {this.state.isSelectionOn && this.renderBottomButton()}
      </View>
    );
  };

  renderHeader = () => {
    return (
      <Header
        testID="patientHeader"
        containerStyle={{
          backgroundColor: Color.WHITE,
          marginTop: headerMarginTop,
          borderBottomWidth: 0,
        }}
        leftComponent={this.renderLeftHeader()}
        centerComponent={this.renderCenterHeader()}
        rightComponent={this.renderRightHeader()}
      />
    );
  };

  renderLeftHeader = () => {
    return (
      <TouchableOpacity
        testID="SideMenuBtn"
        onPress={() => {
          this.props.navigation.navigate('SideMenu');
        }}>
        <Image source={imgMenu} style={styles.btnMenu} />
      </TouchableOpacity>
    );
  };

  renderCenterHeader = () => {
    return (
      <Text testID="patientCenterHeader" style={styles.headerText}>
        {localizedStrings.patientList.patient}
      </Text>
    );
  };

  renderRightHeader = () => {
    return (
      <View testID="patientRightHeader" style={{flexDirection: 'row'}}>
        {/* <TouchableOpacity>
          <Image source={imgSearch} style={styles.btnPlus} />
        </TouchableOpacity> */}
        <TouchableOpacity
          testID="AddPatientButton"
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
          onPress={() => {
            this.props.navigation.navigate('AddPatient');
          }}>
          <Image source={imgPlus} style={styles.btnPlus} />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Image source={imgBell} style={styles.btnPlus} />
        </TouchableOpacity> */}
      </View>
    );
  };

  renderCurrentlyTrialView = () => {
    return (
      <View
        testID="patientCurrentlyTrialView"
        style={styles.currentlyTrialContainer}>
        <Image source={imgInfo} style={styles.btnPlus} />
        <Text style={styles.trialPeriodText}>
          You are currently on free trial period
        </Text>
      </View>
    );
  };

  renderShowingPatientView = () => {
    return (
      <View testID="ShowingPatientView" style={styles.patientShowingContainer}>
        <View>
          <Text testID="patientDetails" style={styles.patinetDetails}>
            {localizedStrings.patientList.showing}{' '}
            <Text style={styles.activePatient}>
              {localizedStrings.patientList.activePatient}
            </Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            testID="pSelectionButton"
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() =>
              this.setState({isSelectionOn: !this.state.isSelectionOn})
            }>
            <Icon
              name="ios-checkbox-outline"
              style={{
                fontSize: 22,
                color: this.state.isSelectionOn ? 'pink' : Color.LIGHT_GREY,
              }}
            />
            <Text
              style={[
                styles.patinetDetails,
                {
                  fontSize: 14,
                  color: this.state.isSelectionOn ? 'pink' : Color.LIGHT_GREY,
                  fontWeight: '700',
                },
              ]}>
              {this.state.isSelectionOn
                ? `${localizedStrings.patientList.cancel}`
                : `${localizedStrings.patientList.select}`}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
            }}>
            <Image
              testID="patientProfileImage"
              source={imgFilter}
              style={{tintColor: 'lightgray', height: 22, width: 22}}
            />
            <Text
              style={[
                styles.patinetDetails,
                {fontSize: 14, color: 'lightgray', fontWeight: '700'},
              ]}>
              {localizedStrings.patientList.filter}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  state = {selectedPatients: []};
  onSelectionsChange = selectedPatients => {
    // selectedFruits is array of { label, value }
    this.setState({selectedPatients});
    console.log(selectedPatients);
  };

  renderActivePatientList = () => {
    const patieltsList = this.props.state.patientReducer.items;
    // console.log('pL', this.props.state.patientReducer);
    return (
      <FlatList
        style={styles.flatListStyle}
        data={patieltsList}
        contentContainerStyle={{paddingBottom: 25, paddingTop: 15}}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderListCell}
        ItemSeparatorComponent={() => (
          <View style={{height: 1, backgroundColor: Color.LIGHT_GREY}} />
        )}
      />
    );
    //  : (
    //   <Text>Loading Data....</Text>
    // );
  };

  renderListCell = ({item, index}) => {
    const {isSelectionOn} = this.state;
    let img = item.isSelected ? imgRadioOn : imgRadioOff;
    return (
      <TouchableOpacity
        style={styles.cellContainer}
        onPress={this.onPressPatientItem}>
        {isSelectionOn && (
          <TouchableOpacity onPress={() => this._radioButtonPressed()}>
            <Image source={img} style={styles.btnRadio} />
          </TouchableOpacity>
        )}
        <Image source={profileImg} style={styles.profilePic} />
        <View style={{flex: 1, marginLeft: 15, justifyContent: 'center'}}>
          <Text style={styles.patinetDetails}>
            {item.firstname} {item.lastname} ({item.gender})
          </Text>
          <Text style={styles.patinetDetails}>
            {item.birthDate} | {item.mobile}
          </Text>
        </View>
        {!isSelectionOn && (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 28,
              width: 28,
              borderRadius: 14,
            }}
            onPress={() => {
              this.props.deletePatients(item.id);
              this.props.getPatients();
            }}>
            <Image
              source={imgdelt}
              style={[{margin: 0, height: 15, width: 15}]}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  renderBottomButton = () => {
    return (
      // <TouchableOpacity style={styles.bottomBtnContainer}>
      //   <Image source={imgTeamWork} style={styles.bottomBtn} />
      // </TouchableOpacity>
      <ActionButton
        testID="patitentBottomButton"
        size={50}
        buttonColor={Color.BLUE}
        renderIcon={() => (
          <Image
            source={imgPeople}
            style={{height: 25, width: 25, tintColor: Color.WHITE}}
            resizeMode="contain"
          />
        )}>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Add Patirnt to category"
          spaceBetween={10}
          size={35}
          hideLabelShadow
          textContainerStyle={{backgroundColor: Color.BLACK}}
          textStyle={{color: Color.WHITE}}
          onPress={() => {}}>
          <Icon name="plus" type="Feather" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#1abc9c"
          title="Remove Patient from catedory"
          spaceBetween={10}
          size={35}
          hideLabelShadow
          textContainerStyle={{backgroundColor: Color.BLACK}}
          textStyle={{color: Color.WHITE}}
          onPress={() => {}}>
          <Icon name="minus" type="Feather" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    );
  };
}
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getPatients: () => {
      dispatch(fetchPatients());
    },
    deletePatients: id => {
      dispatch(deletePatient(id));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PatientList);
