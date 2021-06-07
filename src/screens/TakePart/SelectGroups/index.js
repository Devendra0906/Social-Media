import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {Container, Header, Icon, Button, Left, Right, Body} from 'native-base';
import {connect} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {didUpdateSelectedGroups} from './../../../actions';
import styles from './styles';
import Color from '../../../Helper/Color';
import localizedStrings from '../../../Helper/LocalisedString';

const listItem = [
  {
    name: 'IT Department',
  },
  {
    name: 'Desiging',
  },
  {
    name: 'Marketing',
  },
  {
    name: 'Sales',
  },
  {
    name: 'Developers',
  },
  {
    name: 'Admin',
  },
  {
    name: 'Management',
  },
  {
    name: 'Mobile',
  },
  {
    name: 'Web',
  },
  {
    name: 'Networking',
  },
];

class SelectGroups extends Component {
  constructor(props) {
    super(props);

    props.navigation.setOptions({
      title: `${localizedStrings.selectGroups.chooseCardType}`,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{marginLeft: 16}}
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>
          <Ionicons name="ios-arrow-back" color={'#000'} size={25} />
        </TouchableOpacity>
      ),
      headerRight: () => {
        if (!!this.selectedType) {
          return (
            <Button
              transparent
              style={{marginRight: 16}}
              onPress={() =>
                props.navigation.navigate('SendStar', {
                  selectedType: this.selectedType,
                  selecedGroups: this.props.groups,
                })
              }>
              <Text style={{fontSize: 15}}>
                {localizedStrings.selectGroups.next}
              </Text>
            </Button>
          );
        } else {
          return null;
        }
      },
    });
  }

  componentWillMount() {
    this.selectedType = this.props.route.params.selectedType;
  }

  renderListRow = ({item, index}) => {
    // const contain = this.props.groups.includes(item.name);
    const contain = true;
    return (
      <TouchableOpacity
        style={styles.listButtonContainer}
        onPress={() => {
          this.props.updateSelectedGroups(item.name);
        }}>
        <View style={styles.listItem}>
          <Text style={{marginLeft: 10, fontSize: 17}}>{item.name}</Text>
          {contain && (
            <Icon name="md-checkmark" type="Ionicons" style={{color: '#000'}} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const navigation = this.props.navigation;

    return (
      <Container testID="feed" style={{backgroundColor: Color.WHITE}}>
        <FlatList
          style={{flex: 1, paddingTop: 20}}
          data={listItem}
          renderItem={this.renderListRow}
          keyExtractor={(item, index) => `${index}`}
          extraData={this.props.groups}
        />
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    updateSelectedGroups: group => dispatch(didUpdateSelectedGroups(group)),
  };
}

const mapStateToProps = state => {
  return {
    groups: state.takePartReducer.groups,
  };
};

export default connect(
  mapStateToProps,
  bindAction,
)(SelectGroups);
