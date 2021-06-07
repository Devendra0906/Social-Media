import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {
  Container,
  Content,
  Header,
  Item,
  Icon,
  Button,
  Left,
  Right,
  Body,
} from 'native-base';
import DeviceInfo from 'react-native-device-info';
import {connect} from 'react-redux';

import {didUpdateCardType} from './../../../actions';
import styles from './styles';
import Color from '../../../Helper/Color';

const listItem = [
  {
    name: 'Foo Proposal',
  },
  {
    name: 'StarMeUp Proposal',
  },
  {
    name: 'BatterMe Proposal',
  },
  {
    name: 'BeThere Proposal',
  },
  {
    name: 'TakePart Proposal',
  },
];

class cardType extends Component {
  constructor(props) {
    super(props);
  }

  renderListRow = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.listButtonContainer}
        onPress={() => {
          this.props.updateCardType(item.name);
        }}>
        <View style={styles.listItem}>
          <Text style={{marginLeft: 10, fontSize: 17}}>{item.name}</Text>
          {this.props.cardType === item.name && (
            <Icon name="md-checkmark" type="Ionicons" style={{color: '#000'}} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <Container testID="feed" style={{backgroundColor: Color.WHITE}}>
        <FlatList
          style={{flex: 1, paddingTop: 20}}
          data={listItem}
          renderItem={this.renderListRow}
          keyExtractor={(item, index) => `${index}`}
        />
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    updateCardType: cardType => dispatch(didUpdateCardType(cardType)),
  };
}

const mapStateToProps = state => {
  return {
    cardType: state.takePartReducer.cardType,
  };
};

export default connect(
  mapStateToProps,
  bindAction,
)(cardType);
