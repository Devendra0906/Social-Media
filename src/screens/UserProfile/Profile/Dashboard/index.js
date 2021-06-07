import React, {Component} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {NavigationContext} from '@react-navigation/native';
import {Container, Content, Icon} from 'native-base';
import localizedStrings from '../../../../Helper/LocalisedString';

import styles from './styles';
import Color from '../../../../Helper/Color';
import {fetchProfile} from '../../../../__Redux/__actions/profileActions';
import {connect} from 'react-redux';
const brifcase = require('./../../../../../assets/images/briefcase.png');
const currency = require('./../../../../../assets/images/currency.png');

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProfile();
    console.log('dash', this.props.state.profileReducer.items);
  }
  static contextType = NavigationContext;
  constructor(props) {
    super(props);

    this.state = {
      avatarSource: undefined,
    };
  }
  renderInterestsListItem = ({item, index}) => {
    return (
      <View
        key={`int${index}`}
        style={[styles.experienceListItem, {marginRight: 7}]}>
        <Text style={[styles.designationText, {marginLeft: 10, color: '#666'}]}>
          {item.name} ({item.followers})
        </Text>
      </View>
    );
  };
  render() {
    const navigation = this.context;

    return (
      <Container style={{backgroundColor: Color.WHITE}}>
        <View style={styles.sectionContainer}>
          <ScrollView>
            <View style={styles.sectionTitleView}>
              <View>
                <Text style={styles.userNameText}>
                  {localizedStrings.userProfile.yourDetails}
                </Text>
                <Text style={styles.privateText}>
                  {localizedStrings.userProfile.privateToYou}
                </Text>
              </View>
              <Icon
                type="FontAwesome"
                name="pencil"
                style={styles.editIcon}
                onPress={() => navigation.navigate('ExperienceListScreen')}
              />
            </View>
            <View style={styles.statViewContainer}>
              <View style={styles.stateView}>
                <Text style={styles.statText}>
                  {this.props.state.profileReducer.items.totalConnections}
                </Text>
                <Text style={styles.privateText}>Total Connection(s)</Text>
              </View>
              <View style={[styles.stateView, styles.stateCenterView]}>
                <Text style={styles.statText}>32</Text>
                <Text style={styles.privateText}>
                  {localizedStrings.userProfile.postViews}
                </Text>
              </View>
              <View style={styles.stateView}>
                <Text style={styles.statText}>3</Text>
                <Text style={styles.privateText}>
                  {localizedStrings.userProfile.searchAppearance}
                </Text>
              </View>
            </View>
            <View style={styles.dashboardItemContainer}>
              <View style={styles.dashboardItem}>
                <Image
                  source={brifcase}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                />
                <View style={{marginLeft: 10, flex: 1}}>
                  <Text style={[styles.statText, {fontSize: 14}]}>
                    {localizedStrings.userProfile.carrerInterests}
                  </Text>
                  <View
                    style={[
                      styles.sectionContainer,
                      {flexDirection: 'row', justifyContent: 'space-between'},
                    ]}>
                    <Text style={styles.userNameText}>
                      {localizedStrings.userProfile.interests}
                    </Text>
                    <Icon
                      type="FontAwesome"
                      name="pencil"
                      style={styles.editIcon}
                      onPress={() => this.context.navigate('Following')}
                    />
                  </View>
                  {this.props.state.profileReducer.items.interests == 0 ? (
                    <Text>0</Text>
                  ) : (
                    <FlatList
                      horizontal
                      style={{
                        marginTop: 10,
                        marginHorizontal: 15,
                        marginBottom: 10,
                      }}
                      data={this.props.state.profileReducer.items.interests}
                      renderItem={this.renderInterestsListItem}
                      keyExtractor={(item, index) => `INT${index}`}
                      ItemSeparatorComponent={this.renderSeparator}
                    />
                  )}
                  <Text style={[styles.privateText, {color: Color.WHITE}]}>
                    Let recruiters know you’re open:
                    <Text style={{fontWeight: 'bold'}}> Off</Text>
                  </Text>
                  <Text style={styles.privateText}>
                    {localizedStrings.userProfile.chooseTypeOpportunity}
                  </Text>
                </View>
              </View>
              <View style={styles.separator} />
              <View style={styles.dashboardItem}>
                <Image
                  source={currency}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                />
                <View style={{marginLeft: 10, flex: 1}}>
                  <Text style={[styles.statText, {fontSize: 14}]}>
                    {localizedStrings.userProfile.salaryInsights}
                  </Text>
                  <Text style={styles.privateText}>
                    {localizedStrings.userProfile.salaryInsightsNote}
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Container>
    );
  }
}

// export default Dashboard;
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => {
      dispatch(fetchProfile());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
