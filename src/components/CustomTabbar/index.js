import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icon } from 'native-base';
import Color from '../../Helper/Color';

class CustomTabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  onPressTabButton = (index) => {
    const { isFor } = this.props
    if (index == this.state.index) return
    this.setState({ index }, () => {
      if (index == 0) {
        if (isFor === 'JobSeeker') {
          this.props.navigation.navigate("SearchJobList")
        } else {
          this.props.navigation.navigate("SearchCandidate")
        }
      } else if (index == 1) {
        if (isFor === 'JobSeeker') {
          this.props.navigation.navigate("MyJobs")
        } else {
          this.props.navigation.navigate("RecruiterJobList")
        }
      } else if (index == 2) {

      } else if (index == 3) {
        if (isFor === 'JobSeeker') {
          this.props.navigation.navigate("Profile")
        } else {
          this.props.navigation.navigate("CompanyProfile", { isHideRecentJobs: true })
        }
      }
    })
  }

  render() {
    const { index } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tabButton}
            onPress={() => this.onPressTabButton(0)}>
            <Icon name={"ios-search"} type={"Ionicons"} style={{ color: index == 0 ? Color.BLACK : Color.LIGHT_GREY }} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabButton}
            onPress={() => this.onPressTabButton(1)} >
            <Icon name={"ios-list"} type={"Ionicons"} style={{ color: index == 1 ? Color.BLACK : Color.LIGHT_GREY }} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabButton}
            onPress={() => this.onPressTabButton(2)} >
            <Icon name={"bubble"} type={"SimpleLineIcons"} style={{ color: index == 2 ? Color.BLACK : Color.LIGHT_GREY }} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabButton}
            onPress={() => this.onPressTabButton(3)} >
            <Icon name={"user"} type={"AntDesign"} style={{ color: index == 3 ? Color.BLACK : Color.LIGHT_GREY }} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default CustomTabbar;