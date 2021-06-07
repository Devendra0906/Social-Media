import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {Container, Icon} from 'native-base';
import {connect} from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import {Header} from 'react-native-elements';

import styles from './styles';
import Color from '../../../Helper/Color';
import localizedStrings from '../../../Helper/LocalisedString';
import * as Actions from '../../../__Redux/__actions/takePartActions';
import {bindActionCreators} from 'redux';
class TakePartDashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.get_all_cardsaction(123, 0, 10);
    // console.log('takepart', this.props.state);
  }
  renderListRow = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.listButtonContainer}
        onPress={() => {
          this.props.navigation.navigate('TakePartComment', {
            data: item,
          });
        }}>
        <View style={styles.listItem}>
          <Text style={styles.title}>{item.card_type}</Text>
          <View style={styles.saperator} />
          <Text style={styles.reason}>{item.card_why}</Text>
          <Text style={styles.time}>{item.createdAt}</Text>
          <View style={styles.saperator} />
          <View style={styles.userContainer}>
            <Image
              style={styles.itemIcon}
              source={require('./../../../../assets/images/contacts/captain-america.jpg')}
            />
            <Text style={{marginLeft: 10, fontSize: 15}}>
              {item.user.name.fname} {item.user.name.lname}
            </Text>
          </View>
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
              backgroundColor: '#fff',
              paddingTop: 0,
              elevation: 10,
              shadowOffset: {width: 0, height: 2},
              shadowRadius: 2,
              shadowOpacity: 0.1,
              shadowColor: '#000',
              marginBottom: 5,
            },
            headerStyle,
          ]}
          leftComponent={
            <TouchableOpacity
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              testID="sideMenuButton"
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="ios-arrow-back" style={{color: '#000'}} />
            </TouchableOpacity>
          }
          centerComponent={{
            text: `${localizedStrings.takePart.takePart}`,
            style: {color: '#000', fontSize: 17, fontWeight: 'bold'},
          }}
          rightComponent={
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateTakePart')}
              testID="btnAddGroup">
              <Icon name="md-add" style={{color: '#000'}} />
            </TouchableOpacity>
          }
        />
        <FlatList
          style={styles.flatList}
          data={this.props.availableCards}
          renderItem={this.renderListRow}
          keyExtractor={(item, index) => `${index}`}
        />
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({...Actions}, dispatch),
  };
};

const mapStateToProps = state => {
  return {
    ...state,
    ...state.takePartReducer,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TakePartDashboard);
