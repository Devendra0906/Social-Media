import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import {Header} from 'react-native-elements';
import {Icon} from 'native-base';

import styles from './styles';
import Color from '../../Helper/Color';
import SegmentControl from '../../components/SegmentControl';
import Footer from '../../components/FooterButtons';
import localizedStrings from '../../Helper/LocalisedString';

const male = require('../../../assets/images/male_user.png');
const female = require('../../../assets/images/female_user.png');

const responses = [
  {
    status: 'Red',
    temprature: '40',
    comments: '',
    created: new Date(),
    completed: new Date(),
  },
  {
    status: 'Red',
    temprature: '38',
    comments: '',
    created: new Date(),
    completed: new Date(),
  },
  {
    status: 'green',
    temprature: '34',
    comments: '',
    created: new Date(),
    completed: new Date(),
  },
];

class PaatientDetails extends Component {
  constructor(props) {
    super(props);
  }

  onPressFooterButtons = () => {
    this.props.navigation.navigate('HomeTab');
  };

  renderPatientList = ({item, index}) => {
    let color = Color.SUCCESS_GREEN;
    if (item.status == 'Red') {
      color = Color.RED;
    }
    return (
      <TouchableOpacity
        style={styles.listItemContainer}
        onPress={() =>
          this.props.navigation.navigate('FollowupDetails', {
            data: item,
          })
        }>
        <View style={{flex: 1, alignItems: 'flex-start'}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 10, fontWeight: '700', color: Color.BLACK}}>
              {localizedStrings.patientDetails.temperature}
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '700',
                color: Color.BLACK,
                marginTop: 5,
              }}>
              {item.temprature}
              {'\u00b0'}
            </Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 10, fontWeight: '700', color: Color.BLACK}}>
              {localizedStrings.patientDetails.cough}
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '700',
                color: Color.BLACK,
                marginTop: 5,
              }}>
              {'Yes'}
            </Text>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{fontSize: 10, fontWeight: '700', color: Color.BLACK}}>
              {localizedStrings.patientDetails.completedOn}
            </Text>
            <Text style={{fontSize: 10, fontWeight: '700', color: Color.GREY}}>
              {moment(item.completed).format('DD MMM,YY')}
            </Text>
            <Text style={{fontSize: 10, fontWeight: '700', color: Color.GREY}}>
              {moment(item.completed).format('h A')}
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              marginLeft: 10,
              height: 14,
              width: 14,
              borderRadius: 7,
              backgroundColor: color,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const details = this.props.route.params.patientDetails;
    let image = male;
    if (details.gender == 'Female') {
      image = female;
    }
    let color = Color.SUCCESS_GREEN;
    if (details.status == 'red') {
      color = Color.RED;
    }

    return (
      <SafeAreaView style={styles.mainContainer}>
        <Header
          containerStyle={{
            backgroundColor: Color.WHITE,
            paddingTop: 0,
            elevation: 10,
            shadowOffset: {width: 0, height: 2},
            shadowRadius: 2,
            shadowOpacity: 0.1,
            shadowColor: Color.BLACK,
            marginBottom: 5,
          }}
          leftComponent={
            <TouchableOpacity
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              testID="sideMenuButton"
              onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </TouchableOpacity>
          }
          centerComponent={
            <View style={{alignItems: 'center'}}>
              <Image source={image} style={{height: 40, width: 40}} />
              <Text style={{marginTop: 8, fontWeight: '700', fontSize: 16}}>
                {details.firstname} {details.lastname}
              </Text>
            </View>
          }
        />
        <ScrollView style={styles.detailContainer}>
          <Text style={{fontSize: 12, color: Color.BLACK, alignSelf: 'center'}}>
            {localizedStrings.patientDetails.birthdayDate}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Color.BLACK,
              alignSelf: 'center',
              marginTop: 5,
            }}>
            {moment(details.dob).format('DD/MM/YY')}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Color.BLACK,
              alignSelf: 'center',
              marginTop: 5,
            }}>
            {`${localizedStrings.appCommon.gender}, ${details.gender}`}
          </Text>
          <FlatList
            style={{flex: 1, marginTop: 5}}
            data={responses}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderPatientList}
            ListFooterComponent={() => (
              <TouchableOpacity style={styles.flightIdContainer}>
                <Text style={styles.seeDetailButtonText}>
                  {localizedStrings.appCommon.seeDetails} >
                </Text>
              </TouchableOpacity>
            )}
          />
          <View style={{marginHorizontal: 20}}>
            <Text style={[styles.title, {marginTop: 30}]}>
              {localizedStrings.appCommon.healthBackground}
            </Text>
            <View style={[{marginTop: 10}]}>
              <Text style={styles.inputTitle}>
                {localizedStrings.appCommon.healthSmoker}
              </Text>
              <SegmentControl
                isReadOnly={true}
                data={[
                  localizedStrings.appCommon.yes,
                  localizedStrings.appCommon.notAnswred,
                  localizedStrings.appCommon.no,
                ]}
                container={[{flex: 1}, {flex: 1.5}, {flex: 1}]}
              />
            </View>
            <View style={[{marginTop: 20}]}>
              <Text style={styles.inputTitle}>
                {localizedStrings.appCommon.healthHighBP}
              </Text>
              <SegmentControl
                isReadOnly={true}
                data={[
                  localizedStrings.appCommon.yes,
                  localizedStrings.appCommon.notAnswred,
                  localizedStrings.appCommon.no,
                ]}
                container={[{flex: 1}, {flex: 1.5}, {flex: 1}]}
              />
            </View>
            <View style={[{marginTop: 20}]}>
              <Text style={styles.inputTitle}>
                {localizedStrings.appCommon.healthDiabetes}
              </Text>
              <SegmentControl
                isReadOnly={true}
                data={[
                  localizedStrings.appCommon.yes,
                  localizedStrings.appCommon.notAnswred,
                  localizedStrings.appCommon.no,
                ]}
                container={[{flex: 1}, {flex: 1.5}, {flex: 1}]}
              />
            </View>
            <Text style={[styles.title, {marginTop: 30}]}>
              {localizedStrings.appCommon.medication}
            </Text>
            <FlatList
              style={{flex: 1, marginTop: 5}}
              data={['Carbimaloz', 'PCM']}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={styles.listItemContainer}>
                  <Text>{item}</Text>
                </View>
              )}
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: 30}}>
            <TouchableOpacity></TouchableOpacity>
          </View>
        </ScrollView>
        <Footer
          micPressed={this.onPressFooterButtons}
          keyboardPressed={this.onPressFooterButtons}
        />
      </SafeAreaView>
    );
  }
}

export default PaatientDetails;
