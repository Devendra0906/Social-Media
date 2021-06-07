import React, {Component} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import CalendarStrip from 'react-native-calendar-strip';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import moment from 'moment';
import {Container} from 'native-base';

import styles from './styles';
import {connect} from 'react-redux';
import localizedStrings from '../../../Helper/LocalisedString';

class Explore extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
  }

  onSwipeLeft(gestureState) {
    this.calenderStripe.getNextWeek();
  }

  onSwipeRight(gestureState) {
    this.calenderStripe.getPreviousWeek();
  }

  renderEventListItem = ({item, index}) => {
    const navigation = this.context;

    // console.log('tioio', item);

    return (
      <TouchableOpacity
        style={{
          marginHorizontal: 15,
          marginBottom: 15,
          borderRadius: 5,
          overflow: 'hidden',
          backgroundColor: '#fff',
          borderColor: '#ddd',
          borderWidth: 1,
        }}
        onPress={() => {
          navigation.navigate('EventDetails', {event: item});
        }}>
        <View style={{padding: 8, flexDirection: 'row', marginHorizontal: 0}}>
          <Image
            source={item.thumbnail}
            style={{width: '25%', aspectRatio: 1}}
          />
          <View style={{marginLeft: 10, flex: 1}}>
            <View style={{flexDirection: 'row', marginHorizontal: 0}}>
              <View style={{marginHorizontal: 0, flex: 2}}>
                <Text style={styles.nameText}>
                  {item.user.name.fname} {item.user.name.lname}
                </Text>
                <Text
                  style={[
                    styles.nameText,
                    {fontWeight: 'normal', fontSize: 12},
                  ]}>
                  {item.description}
                </Text>
              </View>
              <Text style={[styles.date, {textAlign: 'right', flex: 1}]}>
                {item.startDate} {item.endDate}
              </Text>
            </View>
            <View
              style={{marginHorizontal: 0, marginTop: 5, flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 9, color: '#666'}}>
                  {localizedStrings.events.participents}
                </Text>
                <FlatList
                  horizontal
                  data={item.participants}
                  renderItem={({item, index}) => {
                    return (
                      <Image
                        source={require('./../../../../assets/images/contacts/hulk.jpg')}
                        style={{
                          height: 24,
                          width: 24,
                          borderRadius: 12,
                          marginRight: 5,
                          marginTop: 5,
                        }}
                      />
                    );
                  }}
                />
              </View>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 9, color: '#666'}}>Location</Text>
                <Text style={styles.date}>{item.location.address}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    // console.log('ourdata', this.props.data);
    const {type} = this.props;
    return (
      <Container testID={type} style={{backgroundColor: '#fff'}}>
        {type === 'today' && (
          <Text style={styles.title}>{moment().format('ll')}</Text>
        )}
        {type === 'week' && (
          <CalendarStrip
            minDate={new Date()}
            maxDate={new Date()}
            showMonth={false}
            style={{
              height: 70,
              paddingTop: 20,
              paddingBottom: 10,
              backgroundColor: '#fff',
            }}
            highlightDateNameStyle={{color: '#fff'}}
            highlightDateNumberStyle={{color: '#fff'}}
            daySelectionAnimation={{
              type: 'background',
              duration: 300,
              highlightColor: 'rgba(0,0,0,0.2)',
            }}
          />
        )}
        {type === 'month' && (
          <GestureRecognizer
            config={{velocityThreshold: 0.3, directionalOffsetThreshold: 80}}
            onSwipeLeft={state => this.onSwipeLeft(state)}
            onSwipeRight={state => this.onSwipeRight(state)}>
            <CalendarStrip
              ref={ref => (this.calenderStripe = ref)}
              showMonth={false}
              minDate={
                new Date(new Date().getFullYear(), new Date().getMonth(), 1)
              }
              maxDate={
                new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
              }
              style={{
                height: 70,
                paddingTop: 20,
                paddingBottom: 10,
                backgroundColor: '#fff',
              }}
              highlightDateNameStyle={{color: '#fff'}}
              highlightDateNumberStyle={{color: '#fff'}}
              iconStyle={{height: 35, width: 35}}
              daySelectionAnimation={{
                type: 'background',
                duration: 300,
                highlightColor: 'rgba(0,0,0,0.2)',
              }}
            />
          </GestureRecognizer>
        )}
        {/* {console.log('opo', this.props)} */}
        <FlatList
          data={this.props.data}
          style={{flex: 1, marginTop: 10}}
          showsHorizontalScrollIndicator={false}
          renderItem={this.renderEventListItem}
          keyExtractor={(item, index) => `${index}`}
        />
      </Container>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     data:state.events.eventsList,
//   };
// };

// export default connect(mapStateToProps)(Explore);

export default Explore;
