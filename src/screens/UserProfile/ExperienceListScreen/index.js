import React, {Component} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  FlatList,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Container, Content, Icon} from 'native-base';
import {Header} from 'react-native-elements';

import styles from './styles';
import {experienceData, accomplishmentsData} from './../Profile/data';
import Color from '../../../Helper/Color';
import {
  fetchExperience,
  fetchProfile,
} from '../../../__Redux/__actions/profileActions';
import {connect} from 'react-redux';

class ExperienceListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarSource: undefined,
    };

    props.navigation.setOptions({
      title: 'Experience',
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 16}}
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
          onPress={() => props.navigation.goBack()}>
          <Icon name="ios-arrow-back" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{marginRight: 16}}
          onPress={() => props.navigation.navigate('AddExperience')}>
          <Icon name="md-add" style={{color: Color.BLACK, marginRight: 13}} />
        </TouchableOpacity>
      ),
    });
  }
  componentDidMount() {
    this.props.getExperience();

    console.log('work', this.props.state.profileReducer);
  }

  renderExperienceListItem = ({item, index}) => {
    return (
      <View key={`exp${index}`} style={{marginBottom: 10}}>
        <View style={styles.experienceListItem}>
          <Image
            style={styles.companyImage}
            source={{uri: item.company.profile}}
            resizeMode="contain"
          />
          <View style={styles.experienceDetailContainer}>
            <Text style={styles.designationText}>{item.title}</Text>
            <Text style={styles.experienceDetailText}>{item.company.name}</Text>
            <Text style={[styles.experienceDetailText, {color: Color.GREY}]}>
              {item.startDate} -{' '}
              {item.endDate == '' ? 'till date' : item.endDate}
            </Text>
            <Text style={[styles.experienceDetailText, {color: Color.GREY}]}>
              {item.company.name}
            </Text>
          </View>
          <Icon
            type="FontAwesome"
            name="pencil"
            style={styles.editIcon}
            onPress={() =>
              this.props.navigation.navigate('AddExperience', {
                experienceData: item,
              })
            }
          />
        </View>
        <Text style={styles.experienceDetailText}>{item.description}</Text>
      </View>
    );
  };

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  render() {
    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }
    return (
      <Container style={{backgroundColor: '#fff'}}>
        <Content style={{backgroundColor: '#efefef'}}>
          <View style={styles.sectionContainer}>
            {this.props.state.profileReducer.experience.workExperience.length ==
            0 ? (
              <Text>Loading</Text>
            ) : (
              <FlatList
                scrollEnabled={false}
                style={{marginTop: 10, flexGrow: 0}}
                data={this.props.state.profileReducer.experience.workExperience}
                renderItem={this.renderExperienceListItem}
                keyExtractor={(item, index) => `EXP${index}`}
                ItemSeparatorComponent={this.renderSeparator}
              />
            )}
          </View>
        </Content>
      </Container>
    );
  }
}

// export default ExperienceListScreen;
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getExperience: () => {
      dispatch(fetchProfile());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExperienceListScreen);
