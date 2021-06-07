import React, { Component } from 'react';
import {
  View,
  Dimensions,
  FlatList,
  Text,
  StyleSheet
} from 'react-native';

import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import Color from '../../Helper/Color';

const { width } = Dimensions.get('window');

class ViewCalendar extends Component {

  constructor(props) {
    super(props);

    let date = new Date()
    this.state = {
      selected: moment(date.toISOString()).format('YYYY-MM-DD')
    }
    this.onDayPress = this.onDayPress.bind(this);
    this.tasks = [...this.props.data.completed_flights, ...this.props.data.overdue_flights]
    this.completedCount = this.props.data.completed_flights.length
  }

  renderListItem = ({ item, index }) => {
    return (
      <View style={styles.listItem}>
        <View>
          <Text>{item.arrival_time}</Text>
          <Text>{item.departure_time}</Text>
        </View>
        <Text>{item.arrival_airport} - {item.departure_airport}</Text>
        <View style={[styles.status, {
          backgroundColor: index < this.completedCount ? Color.BLUE : Color.RED
        }]} />
      </View>
    );
  }

  keyExtractor = (item, index) => `${index}`;

  render() {
    return (
      <View style={styles.calenderContainer}>
        <Calendar
          onDayPress={this.onDayPress}
          onDayLongPress={(day) => { console.log('selected day', day) }}
          monthFormat={'MMM yyyy'}
          onMonthChange={(month) => { console.log('month changed', month) }}
          hideArrows={false}
          onPressArrowLeft={substractMonth => substractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          markedDates={{ [this.state.selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' } }}
        />

        <FlatList
          data={this.tasks}
          renderItem={this.renderListItem}
          keyExtractor={this.keyExtractor}
          style={{ flexGrow: 0 }}
          scrollEnabled={false}
        />
      </View>
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString,
      sender: this.props.sender
    });
    this.props.navigation.navigate('TaskStatus', {
      date: moment(day.dateString).format('DD/MM/YYYY')
    })
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10
  },
  status: {
    height: 8,
    width: 8,
    borderRadius: 4
  },
  calenderContainer: {
    width: width - 40,
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Color.LIGHT_GREY,
    paddingHorizontal: 15
  }
})

export default ViewCalendar;