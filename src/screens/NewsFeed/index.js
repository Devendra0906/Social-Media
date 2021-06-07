import React, {Component} from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';

import Color from '../../Helper/Color';
import Constants from '../../Helper/Constants';
import style from './style';
import moment from 'moment';

const data = require('./data.json');

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: data,
    };
  }

  renderNewsItem = ({item, index}) => {
    return (
      <View style={style.itemContainer}>
        <Image
          testid="profileimg"
          source={{uri: item.urlToImage}}
          style={style.image}
        />
        <View style={{flex: 1, marginLeft: 10}}>
          <Text testid="newstitle" style={style.newsTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text
            testid="newsdescription"
            style={style.newsDescription}
            numberOfLines={3}>
            {item.description}
          </Text>
          <Text testid="newsdate" style={style.date} numberOfLines={3}>
            {moment(item.publishedAt).format('Do MMM, YYYY')}
          </Text>
        </View>
      </View>
    );
  };

  render() {
    // console.log(this.state.news)
    console.log(this.props.postsList);
    return (
      <SafeAreaView style={style.container}>
        <FlatList
          data={this.state.postsList}
          style={{flex: 1}}
          renderItem={this.renderNewsItem}
          ItemSeparatorComponent={() => <View style={style.separator} />}
        />
      </SafeAreaView>
    );
  }
}
