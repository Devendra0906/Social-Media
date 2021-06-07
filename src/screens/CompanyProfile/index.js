import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList
} from 'react-native';
import { Icon } from 'native-base';
import RecruiterProfile from "../RecruiterProfile";

import styles from './styles';

let _this
class CompanyProfile extends Component {

  constructor(props) {
    super(props)
    _this = this
    this.state = {
      avatarSource: '',
      dataSource: [],
      recentJobsData: [1, 1, 1, 1, 1],
      page: 1,
      newDataCount: 5,
      isHideRecentJobs: props.route.isHideRecentJobs,
      isOpenEditProfile: false
    };

    props.navigation.setOptions({
      title: 'Profile',
      headerLeft: () => (
        <TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          style={{ marginLeft: 16 }}
          onPress={() => props.navigation.goBack()}>
          <Icon name='ios-arrow-back' />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 16 }}
          onPress={() => {
            let title = props.route.params && props.route.params.buttonTitle ? props.route.params.buttonTitle : 'Edit'
            navigation.setParams({ buttonTitle: title === 'Edit' ? 'Save' : 'Edit', isEditable: title === 'Edit' ? true : false })
            navigation.setParams({ isOpenEditProfile: true })
            _this._isSaveClicked()
          }}>
          <Text>{props.route.params && props.route.params.buttonTitle ? props.route.params.buttonTitle : 'Edit'}</Text>
        </TouchableOpacity>
      )
    });
  };

  _isSaveClicked = () => {
    this.setState({ isOpenEditProfile: !this.state.isOpenEditProfile })
  }

  _openSpecificJobDetail = () => {
    this.props.navigation.navigate('JobInformation')
  }

  _clickOnSeeMoreData = () => {
    // const { page, recentJobsData } = this.state
    // const start = page * ITEMS_PER_PAGE
    // const end = (page + 1) * ITEMS_PER_PAGE - 1

    // const newData = initialData.slice(start, end);
    // let newDataCount = newData.length
    // this.setState({ recentJobsData: [...recentJobsData, ...newData], page: page + 1, newDataCount: newDataCount });
    this.props.navigation.navigate('SearchJobList')
  }

  renderJobsListFooter = () => {
    const { newDataCount } = this.state
    if (newDataCount >= 5) {
      return (
        <TouchableOpacity style={{ marginHorizontal: 0, paddingVertical: 10, alignItems: 'center' }} onPress={this._clickOnSeeMoreData} >
          <Text style={{ fontSize: 17, color: '#0645ad', fontWeight: '700' }}>
            See More Jobs
          </Text>
        </TouchableOpacity>
      )
    } else {
      return null
    }
  }

  renderJobsListItem = ({ item, index }) => {
    return (
      <View style={styles.cellContainer}>
        <Text>Receptionalist</Text>
        <View style={styles.addressContainer}>
          <Icon
            type="Entypo"
            name="location-pin"
            style={styles.locationIcon} />
          <Text>Address</Text>
        </View>
        <Text>Full-Time</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={() => this._openSpecificJobDetail(item)}>
          <Text numberOfLines={2} style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus iaculis lacinia. Quisque et purus eu lectus ultrices dictum vitae a tortor. Pellentesque sit amet urna
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderProfileMainView = () => {
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <View>
            <Image
              source={this.state.avatarSource}
              style={styles.companyImage}
            />
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.nameText}>
              Devstree
            </Text>
            <Text style={styles.jobTitleText}>
              Information & technology - India
            </Text>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus iaculis lacinia. Quisque et purus eu lectus ultrices dictum vitae a tortor. Pellentesque sit amet urna dignissim, blandit massa sed, maximus magna. Mauris volutpat dui ac libero dictum, accumsan tincidunt ligula vehicula.
              {"\n\n"}
              Praesent non dui feugiat, commodo metus vel, maximus ligula. Vivamus facilisis pharetra risus vel bibendum. In quis placerat felis, ac egestas quam. In eu dictum sapien. Phasellus eu tempus lacus. Aenean sem magna, euismod sed pharetra eu, tincidunt fermentum nisi. In ipsum nibh, imperdiet non lorem nec, mattis laoreet tortor.
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text style={{ flex: 1, fontWeight: '600' }}>
                Website
              </Text>
              <Text style={{ flex: 1.5 }}>
                https://www.devstree.com
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text style={{ flex: 1, fontWeight: '600' }}>
                Industry
              </Text>
              <Text style={{ flex: 1.5 }}>
                Information & Technology
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text style={{ flex: 1, fontWeight: '600' }}>
                Company Size
              </Text>
              <Text style={{ flex: 1.5 }}>
                10 - 50 Employees
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text style={{ flex: 1, fontWeight: '600' }}>
                Type
              </Text>
              <Text style={{ flex: 1.5 }}>
                Privately Held
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text style={{ flex: 1, fontWeight: '600' }}>
                Founded
              </Text>
              <Text style={{ flex: 1.5 }}>
                2013
              </Text>
            </View>
          </View>
        </SafeAreaView>
        {this.state.isHideRecentJobs === false &&
          <View>
            <Text style={[styles.nameText, { marginTop: 15, fontSize: 20 }]}>
              Recent Jobs
            </Text>
            <FlatList
              data={this.state.recentJobsData}
              contentContainerStyle={{ paddingHorizontal: 5, paddingBottom: 15 }}
              renderItem={this.renderJobsListItem}
              ListFooterComponent={this.renderJobsListFooter}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        }
      </ScrollView>
    )
  }

  render() {
    if (this.state.isOpenEditProfile) {
      return <RecruiterProfile isSaveClicked={this._isSaveClicked} />
    } else {
      return this.renderProfileMainView()
    }
  }
}

export default CompanyProfile;
