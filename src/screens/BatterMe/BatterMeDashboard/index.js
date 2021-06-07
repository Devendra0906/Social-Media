import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {Container, Content, Item, Icon, Button} from 'native-base';
import DeviceInfo from 'react-native-device-info';
import {Header} from 'react-native-elements';

import styles from './styles';
import Color from '../../../Helper/Color';
import localizedStrings from '../../../Helper/LocalisedString';

const listItem = [
  {
    name: `${localizedStrings.betterMe.requestFeedback}`,
    icon: require('../../../../assets/images/request_feedback.png'),
    route: 'SendFeedback',
  },
  {
    name: `${localizedStrings.betterMe.sendFeedback}`,
    icon: require('../../../../assets/images/feedback.png'),
    route: 'SendFeedback',
  },
  {
    name: `${localizedStrings.betterMe.feedbackRequests}`,
    icon: require('../../../../assets/images/feedback.png'),
    route: 'BatterMeFeedbackRequests',
  },
  {
    name: `${localizedStrings.betterMe.history}`,
    icon: require('../../../../assets/images/history.png'),
    route: 'BatterMeHistory',
  },
];

class BatterMeDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItem: [],
    };
  }

  componentDidMount() {
    this.setState({
      listItem: [
        {
          name: `${localizedStrings.betterMe.requestFeedback}`,
          icon: require('../../../../assets/images/request_feedback.png'),
          route: 'SendFeedback',
        },
        {
          name: `${localizedStrings.betterMe.sendFeedback}`,
          icon: require('../../../../assets/images/feedback.png'),
          route: 'SendFeedback',
        },
        {
          name: `${localizedStrings.betterMe.feedbackRequests}`,
          icon: require('../../../../assets/images/feedback.png'),
          route: 'BatterMeFeedbackRequests',
        },
        {
          name: `${localizedStrings.betterMe.history}`,
          icon: require('../../../../assets/images/history.png'),
          route: 'BatterMeHistory',
        },
      ],
    });
  }

  renderListRow = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.listButtonContainer}
        onPress={() => {
          if (index === 0) {
            this.props.navigation.navigate(item.route, {
              isSendRequest: true,
            });
          } else {
            this.props.navigation.navigate(item.route, {
              isSendRequest: false,
            });
          }
        }}>
        <View style={styles.listItem}>
          {index === 2 && (
            <View style={styles.bedgeContainer}>
              <Text style={styles.badgeText}>8</Text>
            </View>
          )}
          <Image style={styles.itemIcon} source={item.icon} />
          <Text style={{marginLeft: 10, fontSize: 17}}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const navigation = this.props.navigation;
    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }
    return (
      <Container testID="feed" style={{backgroundColor: Color.WHITE}}>
        <Header
          containerStyle={[
            {
              backgroundColor: Color.WHITE,
              paddingTop: 0,
              elevation: 10,
              shadowOffset: {width: 0, height: 2},
              shadowRadius: 2,
              shadowOpacity: 0.1,
              shadowColor: Color.BLACK,
              marginBottom: 5,
            },
            headerStyle,
          ]}
          leftComponent={
            <TouchableOpacity
              testID="sideMenuButton"
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="ios-arrow-back" style={{color: Color.BLACK}} />
            </TouchableOpacity>
          }
          centerComponent={{
            text: `${localizedStrings.betterMe.betterMe}`,
            style: {color: Color.BLACK, fontSize: 17, fontWeight: 'bold'},
          }}
        />

        <FlatList
          style={{flex: 1, paddingTop: 20}}
          data={this.state.listItem}
          renderItem={this.renderListRow}
          keyExtractor={(item, index) => `${index}`}
        />
      </Container>
    );
  }
}

export default BatterMeDashboard;
