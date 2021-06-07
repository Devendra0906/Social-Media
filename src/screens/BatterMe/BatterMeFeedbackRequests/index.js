import React, {Component} from 'react';
import {View, TouchableOpacity, Text, FlatList, Image} from 'react-native';
import {Container} from 'native-base';
import DeviceInfo from 'react-native-device-info';
import styles from './styles';
import data from './data';
import Color from '../../../Helper/Color';
import localizedStrings from '../../../Helper/LocalisedString';

import {bindActionCreators} from 'redux';
import * as Actions from '../../../actions/bettermeaction';
import {connect} from 'react-redux';

class FeedbackRequests extends Component {
  componentDidMount() {
    this.props.fetchfeedbackrequests(0, 100);
  }

  renderListRow = ({item, index}) => {
    return (
      <View style={styles.listButtonContainer}>
        <View style={styles.listItem}>
          <Image style={styles.itemIcon} source={item.user_icon} />
          <Text style={{marginLeft: 10, fontSize: 17}}>{item.sender.name}</Text>
        </View>
        <View testID="allcompetencies" style={styles.tagsContainer}>
          {item.competencies.map(value => {
            return (
              <View style={styles.tagTextContainer}>
                <Text style={{color: Color.BLACK}}>
                  {value}
                  {''}
                </Text>
              </View>
            );
          })}
        </View>
        <TouchableOpacity
          testID="navigatetoGiveFeedback"
          style={{
            alignSelf: 'flex-end',
            marginRight: 15,
            marginBottom: 15,
            marginTop: 10,
          }}
          onPress={() =>
            this.props.navigation.navigate('GiveFeeback', {
              userData: item,
              isSendRequest: false,
            })
          }>
          <Text style={{color: Color.BLACK, fontWeight: '500'}}>
            {localizedStrings.feedbackRequests.answerRequest}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <Container testID="feed" style={{backgroundColor: Color.WHITE}}>
        <FlatList
          style={{flex: 1, paddingTop: 20}}
          data={this.props.requestsList}
          renderItem={this.renderListRow}
          keyExtractor={(item, index) => `${index}`}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    ...state.betterme,
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
)(FeedbackRequests);
