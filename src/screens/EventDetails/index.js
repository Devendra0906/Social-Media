import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text, FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DeviceInfo from 'react-native-device-info';
import {
  Container,
  Header,
  Title,
  Icon,
  Button,
  Body,
  Thumbnail,
  Item,
} from 'native-base';

import PostList from './../../components/PostList';
import styles from './styles';
import data from './../Home/data';
import Color from '../../Helper/Color';

const notificationImg = require('../../../assets/images/notification.png');
import localizedStrings from '../../Helper/LocalisedString';
import * as Actions from '../../actions/eventsaction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class EventDetails extends Component {
  constructor(props) {
    super(props);

    props.navigation.setOptions({
      title: props.route.params.event.eventName,
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 16}}
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
          onPress={() => props.navigation.goBack()}>
          <Icon name="ios-arrow-back" />
        </TouchableOpacity>
      ),
    });
  }

  handleClick = id => {
    this.props.joinEventbyId(id);
  };

  renderListHeaderComponent() {
    // console.log('RrrrR', this.props.route.params);
    return (
      <View style={styles.listHeaderContainer}>
        <View>
          <Image
            source={require('./../../../assets/images/category/category_1.jpg')}
            style={styles.groupImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.groupTitleContainer}>
          <View style={[styles.titleView]}>
            <Text style={{fontSize: 20}}>
              {this.props.route.params.event.eventName}
            </Text>
          </View>
        </View>
        <View style={styles.timeDetailText}>
          <Icon
            name="calendar-alt"
            type="FontAwesome5"
            style={styles.locationIcon}
          />
          <View style={{marginHorizontal: 10}}>
            <Text style={{fontSize: 14}}>
              {this.props.route.params.event.startDate}{' '}
              {this.props.route.params.event.endDate}
            </Text>
          </View>
        </View>
        <View style={styles.timeDetailText}>
          <Icon
            name="map-marker-alt"
            type="FontAwesome5"
            style={styles.locationIcon}
          />
          <View style={{marginHorizontal: 10}}>
            <Text style={{fontSize: 14}}>
              {this.props.route.params.event.location.address}
            </Text>
          </View>
        </View>
        <View style={styles.timeDetailText}>
          <Icon name="users" type="FontAwesome5" style={styles.locationIcon} />
          <View style={{marginHorizontal: 10}}>
            <Text style={{fontSize: 14}}>
              {this.props.route.params.event.participants.length} Pods, Going
              and Interested
            </Text>
          </View>
        </View>
        <View
          style={[
            {
              flexDirection: 'row',
              marginTop: 10,
              alignItems: 'center',
              paddingHorizontal: 15,
            },
          ]}>
          <Text style={{color: '#999', fontSize: 17}}>
            {localizedStrings.eventDetails.attending}
          </Text>
          <FlatList
            style={{flex: 1, marginLeft: 10}}
            data={this.props.route.params.event.participants}
            scrollEnabled={false}
            horizontal
            renderItem={({index}) => {
              if (index < 3) {
                return (
                  <Image
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      marginLeft: 5,
                    }}
                    source={require('./../../../assets/images/contacts/spiderman.jpeg')}
                  />
                );
              } else if (index === 3) {
                return (
                  <View
                    style={{
                      overflow: 'hidden',
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      marginLeft: 5,
                    }}>
                    <Image
                      style={{height: 30, width: 30, borderRadius: 15}}
                      source={require('./../../../assets/images/contacts/spiderman.jpeg')}
                    />
                    <View
                      style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 999,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: '#fff'}}>+12</Text>
                    </View>
                  </View>
                );
              }
            }}
          />
        </View>
        <TouchableOpacity
          style={{marginVertical: 20}}
          onPress={() => {
            this.handleClick(this.props.route.params.event.id);
          }}>
          <Text style={{color: '#2222ff', fontWeight: 'bold'}}>
            {localizedStrings.eventDetails.joinPod}
          </Text>
        </TouchableOpacity>
        <View style={styles.saperator} />
        <View style={styles.attendeeDetailContainer}>
          <View style={styles.optionButton}>
            <Text style={{fontSize: 14, fontWeight: '600'}}>
              {localizedStrings.eventDetails.going}
            </Text>
            <Text style={{fontSize: 22, color: '#2222ff', marginTop: 5}}>
              1
            </Text>
          </View>
          <View style={styles.optionButton}>
            <Text style={{fontSize: 14, fontWeight: '600'}}>
              {localizedStrings.eventDetails.mayBe}
            </Text>
            <Text style={{fontSize: 22, color: '#2222ff', marginTop: 5}}>
              1
            </Text>
          </View>
          <View style={styles.optionButton}>
            <Text style={{fontSize: 14, fontWeight: '600'}}>
              {localizedStrings.eventDetails.invited}
            </Text>
            <Text style={{fontSize: 22, color: '#2222ff', marginTop: 5}}>
              0
            </Text>
          </View>
        </View>
        <View style={styles.saperator} />
        <TouchableOpacity
          style={styles.addPostContainer}
          onPress={() => this.props.navigation.navigate('UpdatePost')}>
          <Thumbnail
            small
            source={require('./../../../assets/images/contacts/sanket.png')}
          />
          <Text style={styles.inputText}>
            {localizedStrings.eventDetails.saySomething}
          </Text>
          <View style={{alignItems: 'center'}}>
            <FontAwesome name="file-photo-o" size={20} color="#000" />
            <Text style={{fontSize: 12, fontWeight: '500', marginTop: 5}}>
              {localizedStrings.eventDetails.photo}
            </Text>
          </View>
          <View style={{marginLeft: 10}}>
            <Feather name="dots-three-horizontal" size={20} color="#000" />
          </View>
        </TouchableOpacity>
        <View style={[styles.activityHeader, {marginBottom: 20}]}>
          <Text style={{fontSize: 14, paddingVertical: 8}}>
            {localizedStrings.eventDetails.recentActivity}
          </Text>
        </View>
      </View>
    );
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <Container style={{backgroundColor: Color.WHITE}}>
        <PostList
          postList={data}
          ListHeaderComponent={this.renderListHeaderComponent()}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    ...state.events,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({...Actions}, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventDetails);
