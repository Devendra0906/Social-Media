import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal
} from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment';

import Color from '../../Helper/Color';
import localizedStrings from '../../Helper/LocalisedString';

const emiratesLogo = require('../../../assets/images/logo.png')
const male = require('../../../assets/images/male_user.png')
const female = require('../../../assets/images/female_user.png')

class PatientListItem extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible != this.state.isVisible) {
      this.setState({ isVisible: nextProps.visible })
    }
  }

  _onPressDetailsButton = () => {
    this.props.onCloseModal()
    const navigation = this.context;
    navigation.navigate('PaatientDetails', { patientDetails: this.props.patientDetails });
  }

  render() {
    const { patientDetails } = this.props;
    let image = male
    if (patientDetails.gender == 'Female') {
      image = female
    }
    let color = Color.SUCCESS_GREEN
    if (patientDetails.status == 'red') {
      color = Color.RED
    }

    const {
      mainContainer,
      popupContainer,
      detailMainContainer,
      flightDetailContainer,
      flightIdContainer,
      logo,
      taskDetainContainer,
      taskDetail,
      timeContainer,
      time,
      locationMainContainer,
      startLocationContainer,
      locationPlaceHolder,
      locationText,
      endLocationContainer,
      seeDetailButtonText,
      separator,
      buttonMainContainer,
      buttonContainer,
      buttonText
    } = styles;
    return (
      <Modal
        visible={this.state.isVisible}
        transparent
      >
        <View style={mainContainer}>
          <View style={popupContainer}>
            <View style={detailMainContainer}>
              <MaterialIcons name='close' color={Color.BLACK} size={30} style={{ position: 'absolute', top: 0, right: 0 }}
                onPress={this.props.onCloseModal} />
              <View style={flightDetailContainer}>
                <View style={flightIdContainer}>
                  <Image source={image} style={logo} resizeMode='contain' />
                </View>
                <View style={taskDetainContainer}>
                  <Text style={taskDetail}>
                    {patientDetails.firstname} {patientDetails.lastname}
                  </Text>
                  <View style={timeContainer}>
                    <Text style={time}>
                      {moment(patientDetails.dob).format('MMM DD, YYYY')}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={locationMainContainer}>
                <View style={startLocationContainer}>
                  <Text style={locationPlaceHolder}>
                    Location (Previous):{' '}
                  </Text>
                  <Text style={locationText}>
                    {'Dubao'}
                  </Text>
                </View>
                <View style={endLocationContainer}>
                  <Text style={locationPlaceHolder}></Text>
                  <Text style={locationText}>
                    {'Ahmedabad'}
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={flightIdContainer}
                onPress={this._onPressDetailsButton}>
                <Text style={seeDetailButtonText}>
                  {`${localizedStrings.appCommon.seeDetails} >`}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={separator} />

            <View style={buttonMainContainer}>
              <TouchableOpacity style={[buttonContainer, { marginRight: 10 }]}
                onPress={() => {

                }}>
                <Text style={buttonText}>
                  {localizedStrings.startScreen.resend}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[buttonContainer]}
                onPress={() => {

                }}>
                <Text style={buttonText}>
                  {localizedStrings.startScreen.videocall}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.SHADOW,
    justifyContent: 'center'
  },
  popupContainer: {
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: Color.WHITE
  },
  detailMainContainer: {
    padding: 10
  },
  flightDetailContainer: {
    flexDirection: 'row',
    marginHorizontal: 0,
    marginRight: 30
  },
  flightIdContainer: {
    marginTop: 10
  },
  flightId: {
    marginHorizontal: 0,
    textAlign: 'center',
    fontSize: 9,
    fontWeight: 'bold',
    color: Color.BLACK
  },
  logo: {
    width: 50,
    height: 35
  },
  taskDetainContainer: {
    marginLeft: 10,
    justifyContent: 'space-between',
    marginTop: 10
  },
  taskDetail: {
    color: Color.BLACK,
    fontSize: 15
  },
  timeContainer: {
    flexDirection: 'row'
  },
  time: {
    color: Color.GREY,
    fontSize: 12
  },
  arroeIcon: {
    width: 23,
    height: 10,
    marginHorizontal: 8
  },
  locationMainContainer: {
    marginHorizontal: 0
  },
  startLocationContainer: {
    flexDirection: 'row',
    marginHorizontal: 0,
    marginTop: 10
  },
  locationPlaceHolder: {
    fontSize: 10,
    color: Color.GREY,
    width: '50%',
    textAlign: 'center'
  },
  locationText: {
    fontSize: 11,
    color: Color.GREY,
    fontWeight: 'bold'
  },
  endLocationContainer: {
    flexDirection: 'row',
    marginHorizontal: 0,
    marginTop: 2
  },
  seeDetailButtonText: {
    fontSize: 11,
    color: Color.BLUE
  },
  separator: {
    marginHorizontal: 0,
    height: 0.5,
    backgroundColor: Color.LIGHT_GREY
  },
  buttonMainContainer: {
    paddingVertical: 10,
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: Color.BLUE,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: Color.WHITE,
    fontWeight: '700'
  }
})

export default PatientListItem;