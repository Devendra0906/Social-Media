import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Container, Icon} from 'native-base';
import {connect} from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import styles from './styles';
import Color from '../../../Helper/Color';
import localizedStrings from '../../../Helper/LocalisedString';

class CreateTakePart extends Component {
  constructor(props) {
    super(props);

    props.navigation.setOptions({
      title: `${localizedStrings.createTakePart.createTakePart}`,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{marginLeft: 16}}
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>
          <Icon name="ios-arrow-back" color={'#000'} size={25} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{marginRight: 16}}
          onPress={() => props.navigation.navigate('TakePartDashboard')}>
          <Text style={{fontSize: 15}}>
            {localizedStrings.createTakePart.create}
          </Text>
        </TouchableOpacity>
      ),
    });
  }

  render() {
    const navigation = this.props.navigation;
    let cardType = localizedStrings.createTakePart.chooseACardType;
    // this.props.cardType.length > 0
    //   ? this.props.cardType
    //   : `${localizedStrings.createTakePart.chooseACardType}`;
    let reason = localizedStrings.createTakePart.tellUsYourWhy;
    // this.props.reason.length > 0
    //   ? this.props.reason
    //   : `${localizedStrings.createTakePart.tellUsYourWhy}`;
    let groups = localizedStrings.createTakePart.selectGroup;
    // this.props.groups.length > 0
    //   ? this.props.groups.join(', ')
    //   : `${localizedStrings.createTakePart.selectGroup}`;
    return (
      <Container testID="feed" style={{backgroundColor: Color.WHITE}}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              padding: 15,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#bbb',
            }}
            onPress={() => {
              navigation.navigate('CardType');
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
              <Icon
                name="boxes"
                type="FontAwesome5"
                style={{color: '#000', fontSize: 35}}
              />
              <View style={{marginLeft: 20, flex: 1}}>
                <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>
                  {localizedStrings.createTakePart.what}
                </Text>
                <Text style={{fontSize: 15, color: '#bbb'}}>{cardType}</Text>
              </View>
            </View>
            <Icon
              name="arrow-right"
              type="FontAwesome5"
              style={{color: '#000', fontSize: 25}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 15,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#bbb',
            }}
            onPress={() => {
              navigation.navigate('CreateCardReason');
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
              <Icon
                name="question-circle"
                type="FontAwesome5"
                style={{color: '#000', fontSize: 35}}
              />
              <View style={{marginLeft: 20, flex: 1}}>
                <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>
                  {localizedStrings.createTakePart.why}
                </Text>
                <Text style={{fontSize: 15, color: '#bbb'}}>{reason}</Text>
              </View>
            </View>
            <Icon
              name="arrow-right"
              type="FontAwesome5"
              style={{color: '#000', fontSize: 25}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{padding: 15, flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('SelectGroups', {});
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
              <Icon
                name="user"
                type="FontAwesome5"
                style={{color: '#000', fontSize: 35}}
              />
              <View style={{marginLeft: 20, flex: 1}}>
                <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>
                  {localizedStrings.createTakePart.who}
                </Text>
                <Text style={{fontSize: 15, color: '#bbb'}}>{groups}</Text>
              </View>
            </View>
            <Icon
              name="arrow-right"
              type="FontAwesome5"
              style={{color: '#000', fontSize: 25}}
            />
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {};
}

const mapStateToProps = state => {
  return {
    cardType: state.takePartReducer.cardType,
    reason: state.takePartReducer.reason,
    groups: state.takePartReducer.groups,
  };
};

export default connect(
  mapStateToProps,
  bindAction,
)(CreateTakePart);
