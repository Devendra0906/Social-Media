import React, { Component } from 'react'
import {
  View,
  FlatList,
  Image,
  Platform,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Icon, Text } from "native-base";
import { Button } from "react-native-elements";
import moment from "moment";
import _ from 'lodash';
import { Dropdown } from "react-native-material-dropdown";
import styles from './styles'

const jobCandidates = require('../../assets/Data/Candidate_list.json');
const empty_candidate = require('../../../assets/empty_candidate.jpeg');
const user_thumb = require('../../../assets/images/user_thumb.png');

const WORK_EXPIERENCE_OPTIONS = [
  { value: "Less than 1 year" },
  { value: "1 year" },
  { value: "2 years" },
  { value: "3 years" },
  { value: "4 years" },
  { value: "5 years +" }
];

let data = [{
  value: 'Banana',
}, {
  value: 'Mango',
}, {
  value: 'Pear',
}];

const CapitalizeFirstLetter = str => {
  let arr = str.split(" ");
  const a = arr.map(s =>
    s.length ? s.charAt(0).toUpperCase() + s.slice(1) : s
  );
  return a.join(" ");
};

class CandidateList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Candidates',
      headerLeft: () => (
        <TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          style={{ marginLeft: 10 }}
          onPress={() => navigation.goBack()}>
          <Icon name='ios-arrow-back' />
        </TouchableOpacity>
      ),
    };
  };

  pressOnApplicant = () => {

  };

  chatWith = () => {

  };

  ListEmptyComponent = () => {
    return (
      <View style={styles.emptyListView}>
        <Image
          source={empty_candidate}
          style={styles.emptyImage}
          resizeMode={"contain"}
        />
        <View style={{ marginHorizontal: 20 }}>
          <Text
            style={[styles.emptyViewText, { fontWeight: "bold", fontSize: 18 }]}
          >
            {"All the candidates to your job offer will appear on this page."}
          </Text>
          <Text style={[styles.emptyViewText, { marginTop: 20, fontSize: 18 }]}>
            {"There will be plenty of them very soon:\nstay tuned!"}
          </Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.viewContiner}>
        {(jobCandidates &&
          jobCandidates.length > 0) && (
            <View style={styles.filterViewContainer}>
              <TouchableOpacity
                style={styles.filterButtonContainer}
                activeOpacity={0.7}
                onPress={() => {

                }}>
                <Icon name={'filter'} type='AntDesign' style={styles.filterIconStyle} />
                <Text style={styles.filterText}>Filters</Text>
              </TouchableOpacity>

              <Dropdown
                containerStyle={[styles.filterButtonContainer, { marginHorizontal: 10 }]}
                rippleOpacity={0}
                dropdownOffset={{ top: 0, left: 0 }}
                data={WORK_EXPIERENCE_OPTIONS}
                value={"Experience"}
                dropdownPosition={-5}
                onChangeText={(value, idx) => {

                }}
                renderBase={({ props, title, value, renderAccessory }) => {
                  return (
                    <View>
                      <TextInput
                        pointerEvents="none"
                        style={styles.filterText}
                        editable={false}
                        value={title}
                      />
                    </View>
                  );
                }}
              />
              <Dropdown
                containerStyle={[styles.filterButtonContainer]}
                rippleOpacity={0}
                dropdownPosition={-5}
                dropdownOffset={{ top: 0, left: 0 }}
                data={WORK_EXPIERENCE_OPTIONS}
                value={"Nationality"}
                onChangeText={(value, idx) => {

                }}
                renderBase={({ props, title, value, renderAccessory }) => {
                  return (
                    <View>
                      <TextInput
                        pointerEvents="none"
                        style={styles.filterText}
                        editable={false}
                        value={title}
                      />
                    </View>
                  );
                }}
              />
            </View>
          )}
        <FlatList
          extraData={this.props}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{ paddingTop: 5 }}
          data={jobCandidates}
          ListEmptyComponent={this.ListEmptyComponent}
          renderItem={({ item, index }) => {
            const applicant = item;

            let color = "#000";
            let thumb = user_thumb//THUMB_FEMALE;
            // if (applicant.applicant.genderId === 1) {
            //   thumb = THUMB_MALE;
            // }

            return (
              <View style={styles.candidateListItemContainer}>
                {/* {isPurchased && (
                  <Image source={{ uri: LOCK_ICON }} style={styles.lockIcon} />
                )} */}
                <View style={styles.candidateDetailContainer}>
                  <Image
                    style={styles.candidateProfile}
                    source={applicant.applicant.s3_img === null ? user_thumb : {
                      uri: applicant.applicant.s3_img
                    }}
                  />
                  <View style={styles.detailsContainer}>
                    <Text style={[styles.candidateName, { color }]}>
                      {CapitalizeFirstLetter(
                        `${applicant.applicant.firstName} ${applicant.applicant.lastName}`
                      )}
                    </Text>
                    {_.get(applicant, "applicant.user.lastConnected") && (
                      <Text style={styles.lastConnectedStatus}>
                        Last Connected at{" "}
                        {moment(
                          applicant.applicant.user.lastConnected
                        ).fromNow()}
                      </Text>
                    )}
                    {_.get(applicant, "applicant.city.value") && (
                      <View style={styles.locationContainer}>
                        <Icon
                          type="Entypo"
                          name="location-pin"
                          style={styles.locationIcon}
                        />

                        <Text style={styles.locationText}>
                          {applicant.applicant.city.value}
                        </Text>
                      </View>
                    )}
                    {_.get(applicant, "totalExperience") ? (
                      <Text style={styles.totalExperienceStyle}>
                        {`${
                          Number(_.get(applicant, "totalExperience")) > 1
                            ? `${_.get(
                              applicant,
                              "totalExperience"
                            )} years`
                            : "1 year"
                          } experience`}
                      </Text>
                    ) : (
                        <Text style={styles.totalExperienceStyle}>
                          {"Less than 1 year experience"}
                        </Text>
                      )}
                  </View>
                </View>
                <View style={styles.buttonsContainer}>
                  <Button
                    titleStyle={styles.profileButtonTitle}
                    title={"Profile"}
                    small
                    raised
                    onPress={() => {
                      this.props.navigation.navigate('CandidateProfile', { title: applicant.applicant.firstName, isFromRecruiter: true })
                    }}
                    containerStyle={{ flex: 0.3 }}
                    buttonStyle={styles.profileButtonStyle}
                  />
                  <Button
                    titleStyle={{ ...styles.profileButtonTitle }}
                    title={"Chat"}
                    small
                    raised
                    onPress={() => {
                      this.chatWith({ isPurchased, applicant, index });
                    }}
                    containerStyle={{ flex: 0.3 }}
                    buttonStyle={{
                      ...styles.profileButtonStyle,
                    }}
                  />
                  <Button
                    titleStyle={{
                      ...styles.profileButtonTitle,
                      fontSize: 14,
                      color: "red"
                    }}
                    title={"Reject"}
                    small
                    raised
                    onPress={() => {
                      firebase
                        .database()
                        .ref(
                          `uids/${this.props.myUid}/newApplications/${applicant.jobId}:${applicatUid}`
                        )
                        .remove();
                      this.props.rejectApplicant({
                        id: applicant.id,
                        rejected: true
                      });
                    }}
                    containerStyle={{ flex: 0.3 }}
                    buttonStyle={{
                      ...styles.profileButtonStyle,
                      borderColor: "red"
                    }}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default CandidateList;