import React, { Component } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Text,
  ImageBackground
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Color from '../../Helper/Color';

// import {
//   COLOR_SILVER,
//   COLOR_LIGHT_BLUE,
//   COLOR_WHITE,
//   COLOR_RED,
//   COLOR_DISABLE_GRAY
// } from './../Helper/Constants';

const { width } = Dimensions.get('window');

const bgImage = require('../../../assets/images/category/category_5.jpg')

class TaskLists extends Component {

  constructor(props) {
    super(props)

    this.detail = this.props.data;
  }

  keyExtractor = (item, index) => `${index}`;

  renderListItem = ({ item, index }) => {
    return (
      <View style={styles.taskitemContainer}>
        <View style={styles.checkboxViewContainer}>
          <MaterialIcon name='check' size={15} color={Color.WHITE} />
        </View>
        <Text style={{ marginHorizontal: 10, flex: 1 }}>{item.description}</Text>
      </View>
    );
  }

  render() {

    const {
      container,
      headerContainer,
      dayText,
      headerImage,
      detailViewContainer,
      separator
    } = styles;

    return (
      <View style={container}>
        <View style={headerContainer}>
          <ImageBackground style={headerImage} source={bgImage} resizeMode='cover'>
            <View style={detailViewContainer}>
              <Text style={dayText}>
                {this.detail.overview.title} {this.detail.overview.flightnumber}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <FlatList
          data={this.detail.tasks}
          renderItem={this.renderListItem}
          keyExtractor={this.keyExtractor}
          style={{ flexGrow: 0, marginHorizontal: 0 }}
          scrollEnabled={false}
          ItemSeparatorComponent={() => {
            return (<View style={separator} />);
          }}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    marginLeft: 20,
    borderColor: Color.LIGHT_GREY,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    marginVertical: 10
  },
  headerContainer: {
    marginHorizontal: 0,
    backgroundColor: Color.LIGHT_GREY,
    alignItems: 'center',
  },
  dayText: {
    fontSize: 14,
    color: Color.WHITE,
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: '600',
  },
  taskitemContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingRight: 10
  },
  checkboxViewContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.BLUE
  },
  headerImage: {
    width: '100%',
    alignItems: 'center'
  },
  detailViewContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginVertical: 20,
    alignItems: 'center',
    width: '40%'
  },
  separator: {
    backgroundColor: Color.LIGHT_GREY,
    height: 1
  }
})

export default TaskLists;
