import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import {Container, Icon} from 'native-base';
import DeviceInfo from 'react-native-device-info';
import styles from './styles';
import data from './data';
import Color from '../../../Helper/Color';
import localizedStrings from '../../../Helper/LocalisedString';

class SendFeedback extends Component {
  constructor(props) {
    super(props);

    this.isSendRequest = false;
    this.state = {
      searchText: '',
      filteredData: data,
    };
  }

  componentDidMount = () => {
    this.isSendRequest = this.props.route.params.isSendRequest
      ? this.props.route.params.isSendRequest
      : false;
  };

  renderListRow = ({item, index}) => {
    return (
      <View style={styles.listButtonContainer}>
        <TouchableOpacity
          testID="GotoGiveFeedback"
          style={styles.listItem}
          onPress={() => {
            this.props.navigation.navigate('GiveFeeback', {
              isSendRequest: this.isSendRequest,
              userData: undefined,
            });
          }}>
          <Image
            testID="itemimage"
            style={styles.itemIcon}
            source={item.image}
          />
          <View>
            <Text
              testID="itemname"
              style={{marginLeft: 10, fontSize: 17, color: '#000'}}>
              {item.name}
            </Text>
            <Text
              testID="itemposition"
              style={{
                marginLeft: 10,
                fontSize: 14,
                color: '#bbb',
                marginTop: 3,
              }}>
              {item.position}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  renderSeparator() {
    return (
      <View
        style={{marginHorizontal: 15, backgroundColor: '#bbb', height: 0.5}}
      />
    );
  }

  renderSectionTitle = () => {
    return (
      <View style={{marginHorizontal: 15, paddingVertical: 10}}>
        <Text
          testID="dropdowntext"
          style={{fontSize: 18, fontWeight: 'bold', color: '#444'}}>
          {localizedStrings.sendFeedback.suggestedColleagues}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <Container testID="feed" style={{backgroundColor: Color.WHITE}}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholderTextColor="#bbb"
            placeholder={`${localizedStrings.sendFeedback.findColleagues}`}
            value={this.state.searchText}
            onChangeText={text => {
              let filtered = data.filter(value => {
                return value.name.includes(text);
              });
              this.setState({searchText: text, filteredData: filtered});
            }}
          />
          {this.state.searchText.length > 0 && (
            <Icon
              name="closecircleo"
              type="AntDesign"
              style={{fontSize: 15, color: '#666'}}
              onPress={() =>
                this.setState({searchText: '', filteredData: data})
              }
            />
          )}
        </View>
        <FlatList
          style={{flex: 1}}
          data={this.state.filteredData}
          renderItem={this.renderListRow}
          keyExtractor={(item, index) => `${index}`}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderSectionTitle}
        />
      </Container>
    );
  }
}

export default SendFeedback;
