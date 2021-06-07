import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {Container} from 'native-base';
import DeviceInfo from 'react-native-device-info';
import styles from './styles';
import Color from '../../../Helper/Color';
import localizedStrings from '../../../Helper/LocalisedString';

class StarMeUpChooseType extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItem: [
        {
          name: `${localizedStrings.starMeUpDashboard.kudos}`,
          icon: require('../../../../assets/images/gem.png'),
        },
        {
          name: `${localizedStrings.starMeUpDashboard.actEthecally}`,
          icon: require('../../../../assets/images/hands.png'),
        },
        {
          name: `${localizedStrings.starMeUpDashboard.teamPlayer}`,
          icon: require('../../../../assets/images/people.png'),
        },
        {
          name: `${localizedStrings.starMeUpDashboard.constantlyInnovate}`,
          icon: require('../../../../assets/images/bulb.png'),
        },
        {
          name: `${localizedStrings.starMeUpDashboard.excellence_in_your_work}`,
          icon: require('../../../../assets/images/clock.png'),
        },
        {
          name: `${localizedStrings.starMeUpDashboard.think_big}`,
          icon: require('../../../../assets/images/rocket.png'),
        },
        {
          name: `${localizedStrings.starMeUpDashboard.have_fun}`,
          icon: require('../../../../assets/images/magic.png'),
        },
      ],
    };
  }

  renderListRow = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.listButtonContainer}
        // onPress={}
      >
        <View style={styles.listItem}>
          <Image
            style={styles.itemIcon}
            source={item.icon}
            resizeMode="contain"
          />
          <Text style={{marginLeft: 10, fontSize: 17}}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <Container testID="feed" style={{backgroundColor: Color.WHITE}}>
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

export default StarMeUpChooseType;
