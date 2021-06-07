import React, {Component} from 'react';
import {Image, View, Text, FlatList} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {Container, Content, Icon} from 'native-base';

import styles from './styles';
import {experienceData, accomplishmentsData} from '../data';
import localizedStrings from '../../../../Helper/LocalisedString';
import Color from '../../../../Helper/Color';
import {
  fetchExperience,
  fetchAccomplishmentsPublications,
  fetchAccomplishmentsPatents,
} from '../../../../__Redux/__actions/profileActions';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native';
const imgCategory = require('./../../../../../assets/images/category/category_5.jpg');
class About extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    super(props);

    this.state = {
      avatarSource: undefined,
    };
  }
  componentDidMount() {
    this.props.getExperience();
    this.props.getPublications();
    this.props.getPatents();
    console.log(
      'publi',
      this.props.state.profileReducer.experience.workExperience,
    );
  }
  renderExperienceListItem = ({item, index}) => {
    try {
      return (
        <View key={`exp${index}`} style={styles.experienceListItem}>
          <Image
            style={styles.companyImage}
            source={{uri: item.company.profile}}
            resizeMode="contain"
          />
          <View style={styles.experienceDetailContainer}>
            <Text style={styles.designationText}>{item.title}</Text>
            <Text style={styles.experienceDetailText}>
              {item.company.industry.name}
            </Text>
            <Text style={[styles.experienceDetailText, {color: Color.GREY}]}>
              {item.startDate} - {item.endDate}
            </Text>
            {/* <Text style={[styles.experienceDetailText, { color: Color.GREY }]}>{item.location}</Text> */}
          </View>
        </View>
      );
    } catch (err) {
      return <Text style={styles.designationText} />;
    }
  };

  renderAccomplishmentsListItem = ({item, index}) => {
    return (
      <View key={`acc${index}`} style={styles.accomplishmentContainer}>
        <View style={styles.experienceListItem}>
          <Text style={styles.designationText}>{item.length}</Text>
          <Text
            style={[styles.designationText, {marginLeft: 10, color: '#666'}]}>
            {item.title}- ({item.description})
          </Text>
        </View>
      </View>
    );
  };

  renderOrgItem = ({item, index}) => {
    return (
      <View key={`acc${index}`} style={styles.accomplishmentContainer}>
        <View style={styles.experienceListItem}>
          <Text style={styles.designationText}>{item.length}</Text>
          <Text
            style={[styles.designationText, {marginLeft: 10, color: '#666'}]}>
            {item.name}- ({item.description})
          </Text>
        </View>
      </View>
    );
  };

  renderAccomplishmentsLanguages = ({item, index}) => {
    return (
      <View key={`acc${index}`} style={styles.accomplishmentContainer}>
        <View style={styles.experienceListItem}>
          {/* <Text style={styles.designationText}>{item.length}</Text> */}
          <Text
            style={[styles.designationText, {marginLeft: 10, color: '#666'}]}>
            {item.language ? item.language : item.title}- ({item.proficiency})
          </Text>
        </View>
      </View>
    );
  };
  renderInterestsListItem = ({item, index}) => {
    return (
      <View
        key={`int${index}`}
        style={[styles.experienceListItem, {marginRight: 7}]}>
        <Image
          style={{height: 30, width: 30, borderRadius: 15}}
          source={imgCategory}
          resizeMode="cover"
        />
        <Text style={[styles.designationText, {marginLeft: 10, color: '#666'}]}>
          {item.name} ({item.followers})
        </Text>
      </View>
    );
  };

  renderSkillsListItem = ({item, index}) => {
    return (
      <View
        key={`int${index}`}
        style={[styles.experienceListItem, {marginRight: 7}]}>
        <Text style={[styles.designationText, {marginLeft: 10, color: '#666'}]}>
          {item.name}
        </Text>
      </View>
    );
  };
  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  render() {
    const navigation = this.context;
    return (
      <Content style={{backgroundColor: Color.WHITE}}>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionTitleView}>
            <Text style={styles.userNameText}>
              {localizedStrings.userProfile.experience}
            </Text>
            <Icon
              type="FontAwesome"
              name="pencil"
              style={styles.editIcon}
              onPress={() => navigation.navigate('ExperienceListScreen')}
            />
          </View>
          {this.props.state.profileReducer.experience == 0 ? (
            <Text>0</Text>
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

        <View style={styles.sectionContainer}>
          <View style={styles.sectionTitleView}>
            <Text style={styles.userNameText}>
              {localizedStrings.userProfile.accomplishment}
            </Text>
            <Icon type="FontAwesome" name="pencil" style={styles.editIcon} />
          </View>
          <View>
            {/* <Icon
              type="FontAwesome"
              name="pencil"
              style={styles.editIcon}
              onPress={() => navigation.navigate('ExperienceListScreen')}
            /> */}
            <TouchableOpacity
              onPress={() => navigation.navigate('AddPublication')}>
              <Text>Publication</Text>
            </TouchableOpacity>
            {this.props.state.profileReducer.items.accomplishments.publications
              .length == 0 ? (
              <Text>0</Text>
            ) : (
              <FlatList
                scrollEnabled={false}
                style={{marginTop: 10, flexGrow: 0}}
                data={
                  this.props.state.profileReducer.items.accomplishments
                    .publications
                }
                renderItem={this.renderAccomplishmentsListItem}
                keyExtractor={(item, index) => `ACC${index}`}
                ItemSeparatorComponent={this.renderSeparator}
              />
            )}
            <TouchableOpacity onPress={() => navigation.navigate('AddPatent')}>
              <Text>Patents</Text>
            </TouchableOpacity>

            {this.props.state.profileReducer.items.accomplishments.patents
              .length == 0 ? (
              <Text>0</Text>
            ) : (
              <FlatList
                scrollEnabled={false}
                style={{marginTop: 10, flexGrow: 0}}
                data={
                  this.props.state.profileReducer.items.accomplishments.patents
                }
                renderItem={this.renderAccomplishmentsListItem}
                keyExtractor={(item, index) => `ACC${index}`}
                ItemSeparatorComponent={this.renderSeparator}
              />
            )}
            <TouchableOpacity onPress={() => navigation.navigate('AddProject')}>
              <Text>Projects</Text>
            </TouchableOpacity>
            {this.props.state.profileReducer.items.accomplishments.projects
              .length == 0 ? (
              <Text>0</Text>
            ) : (
              <FlatList
                scrollEnabled={false}
                style={{marginTop: 10, flexGrow: 0}}
                data={
                  this.props.state.profileReducer.items.accomplishments.projects
                }
                renderItem={this.renderAccomplishmentsListItem}
                keyExtractor={(item, index) => `ACC${index}`}
                ItemSeparatorComponent={this.renderSeparator}
              />
            )}
            <TouchableOpacity
              onPress={() => navigation.navigate('AddHonorsAndAwards')}>
              <Text>Awards</Text>
            </TouchableOpacity>
            {this.props.state.profileReducer.items.accomplishments
              .honorAndAwards.length == 0 ? (
              <Text>0</Text>
            ) : (
              <FlatList
                scrollEnabled={false}
                style={{marginTop: 10, flexGrow: 0}}
                data={
                  this.props.state.profileReducer.items.accomplishments
                    .honorAndAwards
                }
                renderItem={this.renderAccomplishmentsListItem}
                keyExtractor={(item, index) => `ACC${index}`}
                ItemSeparatorComponent={this.renderSeparator}
              />
            )}
            <TouchableOpacity
              onPress={() => navigation.navigate('AddLanguage')}>
              <Text>Languages</Text>
            </TouchableOpacity>
            {this.props.state.profileReducer.items.accomplishments.languages
              .length == 0 ? (
              <Text>0</Text>
            ) : (
              <FlatList
                scrollEnabled={false}
                style={{marginTop: 10, flexGrow: 0}}
                data={
                  this.props.state.profileReducer.items.accomplishments
                    .languages
                }
                renderItem={this.renderAccomplishmentsLanguages}
                keyExtractor={(item, index) => `ACC${index}`}
                ItemSeparatorComponent={this.renderSeparator}
              />
            )}
            <TouchableOpacity
              onPress={() => navigation.navigate('AddOrganisation')}>
              <Text>Organizations</Text>
            </TouchableOpacity>
            {this.props.state.profileReducer.items.accomplishments.organizations
              .length == 0 ? (
              <Text>0</Text>
            ) : (
              <FlatList
                scrollEnabled={false}
                style={{marginTop: 10, flexGrow: 0}}
                data={
                  this.props.state.profileReducer.items.accomplishments
                    .organizations
                }
                renderItem={this.renderOrgItem}
                keyExtractor={(item, index) => `ACC${index}`}
                ItemSeparatorComponent={this.renderSeparator}
              />
            )}
          </View>
        </View>

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
            style={{marginTop: 10, marginHorizontal: 15, marginBottom: 10}}
            data={this.props.state.profileReducer.items.interests}
            renderItem={this.renderInterestsListItem}
            keyExtractor={(item, index) => `INT${index}`}
            ItemSeparatorComponent={this.renderSeparator}
          />
        )}
        <View
          style={[
            styles.sectionContainer,
            {flexDirection: 'row', justifyContent: 'space-between'},
          ]}>
          {/* <Text style={styles.userNameText}>{''}</Text> */}
          <TouchableOpacity onPress={() => navigation.navigate('AddSkills')}>
            <Text style={styles.userNameText}>Skills</Text>
          </TouchableOpacity>
          <Icon
            type="FontAwesome"
            name="pencil"
            style={styles.editIcon}
            onPress={() => this.context.navigate('Following')}
          />
        </View>
        {this.props.state.profileReducer.items.skills == 0 ? (
          <Text>0</Text>
        ) : (
          <FlatList
            horizontal
            style={{marginTop: 10, marginHorizontal: 15, marginBottom: 10}}
            data={this.props.state.profileReducer.items.skills}
            renderItem={this.renderSkillsListItem}
            keyExtractor={(item, index) => `INT${index}`}
            ItemSeparatorComponent={this.renderSeparator}
          />
        )}
      </Content>
    );
  }
}

// export default About;
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getExperience: () => {
      dispatch(fetchExperience());
    },
    getPublications: () => {
      dispatch(fetchAccomplishmentsPublications());
    },
    getPatents: () => {
      dispatch(fetchAccomplishmentsPatents());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
