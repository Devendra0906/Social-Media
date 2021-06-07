import React, {Component} from 'react';
import {View, TouchableOpacity, TextInput, Text} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Container, Icon, Content} from 'native-base';
import {Header} from 'react-native-elements';
import {Dropdown} from 'react-native-material-dropdown';

import styles from './styles';
import Color from '../../../Helper/Color';
import {AddLanguageData} from '../../../__Redux/__actions/profileActions';
import {connect} from 'react-redux';
import {Alert} from 'react-native';
const proficiencyOptions = [
  {value: 'Elementary proficiency'},
  {value: 'Limited working proficiency'},
  {value: 'Professional working proficiency'},
  {value: 'Full professional proficiency'},
  {value: 'Native or bilingual proficiency'},
];

class AddCource extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: '',
      proficiency: '',
    };
  }
  updateToDB() {
    const pub = {
      title: this.state.language,
      proficiency: this.state.proficiency,
    };

    // console.log(exp);
    this.props.postData(pub);
    Alert.alert('Language Added Successfully');
    this.props.navigation.goBack();
  }
  render() {
    const navigation = this.props.navigation;
    const {language, proficiency} = this.state;
    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }

    let pageTitle = 'Add Language';
    return (
      <Container style={{backgroundColor: Color.WHITE}}>
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
              testID="sideMenuButton"
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              onPress={() => navigation.goBack()}>
              <Icon
                type="Ionicons"
                name="ios-arrow-back"
                style={{color: '#000'}}
              />
            </TouchableOpacity>
          }
          centerComponent={{
            text: pageTitle,
            style: {color: '#000', fontSize: 17, fontWeight: 'bold'},
          }}
        />
        <Content>
          <View style={{marginTop: 15, marginHorizontal: 15}}>
            <TextInput
              placeholder="Language"
              placeholderTextColor="#666"
              style={styles.textInput}
              value={language}
              onChangeText={text => this.setState({language: text})}
            />
            <Dropdown
              rippleOpacity={0}
              data={proficiencyOptions}
              textColor={'#000'}
              baseColor={'#000'}
              value={proficiency}
              onChangeText={label => {
                this.setState({proficiency: label});
              }}
              renderBase={() => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderBottomColor: '#666',
                      borderBottomWidth: 0.5,
                      marginTop: 15,
                    }}>
                    <TextInput
                      placeholder="Proficiency"
                      placeholderTextColor="#666"
                      style={{
                        flex: 1,
                        marginHorizontal: 0,
                        paddingVertical: 8,
                        fontSize: 15,
                      }}
                      value={proficiency}
                      editable={false}
                      pointerEvents="none"
                    />
                    <Icon
                      name="chevron-thin-down"
                      type="Entypo"
                      style={{fontSize: 20, color: '#000'}}
                    />
                  </View>
                );
              }}
            />
            <TouchableOpacity
              style={styles.saveContainer}
              onPress={() => this.updateToDB()}>
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

// export default AddCource;
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postData: pub => {
      dispatch(AddLanguageData(pub));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCource);
