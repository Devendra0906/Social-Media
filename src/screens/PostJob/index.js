import React, { Component } from 'react'
import {
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  Platform,
  DatePickerAndroid,
  DatePickerIOS,
  Modal,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Switch
} from "react-native";
import { Icon, Text } from "native-base";
import MapView, { Marker } from "react-native-maps";
import moment from "moment";
import _ from 'lodash';
import { Header } from '@react-navigation/stack';

import styles from './styles';
const LATITUDE_DELTA = 0.025;
const LONGITUDE_DELTA = 0.03;

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const IMAGE_HEIGHT = width * ASPECT_RATIO;

const WORK_EXPIERENCE_OPTIONS = [
  "No experience required",
  "1 year",
  "2 years",
  "3 years",
  "4 years",
  "5 years +"
];
const EMPLOYMENT_TYPE_OPTIONS = ["Full-time", "Part-time", "Temporary job"];
let START_TIME_OPTIONS = [
  { value: "Immediate Start" },
  { value: "Select Starting Date" }
];

class PostJob extends Component {

  state = {
    heightDescription: 100,
    datePickerVisible: false,
    pickerDate: new Date(),
    showJobTitleModal: false,
    filteredJobTitles: [],
    searchText: "",
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  };

  constructor(props) {
    super(props)

    props.navigation.setOptions({
      title: 'Job Details',
      headerLeft: () => (
        <TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          style={{ marginLeft: 16 }}
          onPress={() => props.navigation.goBack()}>
          <Icon name='ios-arrow-back' />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 16 }}
          onPress={() => props.navigation.goBack()}>
          <Text>
            Save
          </Text>
        </TouchableOpacity>
      )
    });
  }

  async showDatePicker() {
    if (Platform.OS === "android") {
      try {
        const { action, year, month, day } = await DatePickerAndroid.open({
          date: new Date(),
          minDate: new Date()
        });
        if (action !== DatePickerAndroid.dismissedAction) {
          const newDate = new Date(year, month, day);
          // this.dropdownStartTime.select(1);
        }
      } catch ({ code, message }) {
        console.warn("Cannot open date picker", message);
      }
    } else {
      this.setState({ datePickerVisible: true });
    }
  }

  renderJobTitleSearchModal() {
    return (
      <Modal visible={this.state.showJobTitleModal} transparent={true}>
        <View
          style={[
            styles.datePickerModalContainer,
            { justifyContent: "center" }
          ]}
        >
          <View style={styles.joblistModalContainer}>
            <View style={styles.modalHeaderContainer}>
              <TouchableOpacity
                hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
                onPress={() => {
                  this.setState({ showJobTitleModal: false, searchText: "" });
                }}
              >
                <Image
                  source={backIcon}
                  style={styles.backIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Job Title</Text>
              <View style={styles.backIcon} />
            </View>
            <TextInput
              style={styles.searchInput}
              placeholder={this.props.translate("Start typing for suggestions")}
              placeholderTextColor="#999"
              value={this.state.searchText}
              onChangeText={text => {
                const filteredValue = this.props.jobTitles.filter(value => {
                  return value.jobTitle
                    .toUpperCase()
                    .startsWith(text.toUpperCase());
                });
                this.setState({
                  searchText: text,
                  filteredJobTitles: filteredValue
                });
              }}
            />
            <FlatList
              data={this.state.filteredJobTitles}
              renderItem={this.renderJobListItem}
              keyExtractor={(item, index) => `${index}`}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              ListEmptyComponent={() => {
                return (
                  <Text style={styles.emptyListComponent}>
                    {this.props.translate(
                      "Sorry, there is no suggestion. Please try more general keywords."
                    )}
                  </Text>
                );
              }}
            />
          </View>
        </View>
      </Modal>
    );
  }

  renderJobListItem = ({ item, itemIndex }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ showJobTitleModal: false, searchText: "" });
        }}
      >
        <Text style={styles.jobTitleText}>{item.jobTitle}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: '#fff' }}
        keyboardVerticalOffset={Header.HEIGHT}
        behavior={'padding'}>
        <ScrollView contentContainerStyle={{ padding: 15 }}>
          <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                Available
              </Text>
            </View>
            <Switch value={true} />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.title}>
              Company Name
            </Text>
            <TextInput
              style={styles.input}
              placeholder={'Prenigma'}
              placeholderTextColor={'#bbb'}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.title}>
              Job Category
            </Text>
            <TextInput
              style={styles.input}
              placeholder={'Please Select...'}
              placeholderTextColor={'#bbb'}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.title}>
              Job Title
            </Text>
            <TextInput
              style={styles.input}
              placeholder={'Please Select...'}
              placeholderTextColor={'#bbb'}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.title}>
              Job Description
            </Text>
            <TextInput
              style={[styles.input, { minHeight: 80, maxHeight: 120 }]}
              multiline={true}
              placeholder={'Please detail about job offer, job responsibilities...'}
              placeholderTextColor={'#bbb'}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.title}>
              Start Time
            </Text>
            <TextInput
              style={styles.input}
              placeholder={'Please Select...'}
              placeholderTextColor={'#bbb'}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.title}>
              Employment Type
            </Text>
            <TextInput
              style={styles.input}
              placeholder={'Please Select...'}
              placeholderTextColor={'#bbb'}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.title}>
              Mothly Salary
            </Text>
            <View style={[styles.itemContainer, { alignItems: 'center' }]}>
              <Text>
                From
              </Text>
              <TextInput
                style={[styles.input, { flex: 1, marginLeft: 10 }]}
              />
              <Text style={{ marginLeft: 10 }}>
                To
              </Text>
              <TextInput
                style={[styles.input, { flex: 1, marginLeft: 10 }]}
              />
              <Text style={{ marginLeft: 10 }}>
                AED
              </Text>
            </View>
            <View style={{ marginTop: 30 }}>
              <MapView
                style={styles.mapViewStyle}
                scrollEnabled={false}
                liteMode
                region={this.state.region}
              >
                <Marker
                  coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                  title={"Darshit"}
                />
              </MapView>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export default PostJob;