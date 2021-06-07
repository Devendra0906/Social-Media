import _ from 'lodash';
import React, { Component } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import {
  Button,
  Badge
} from "react-native-elements";
import { Container, Content, Icon, Text } from "native-base";
import styles from './styles';

const jobsList = require('./../../assets/Data/Job_list.json');

class RecruiterJobList extends Component {

  constructor(props) {
    super(props)

    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 16 }}
          onPress={this.addJob}>
          <Icon name='add' />
        </TouchableOpacity>
      )
    });

  }

  componentDidMount() {
    // this.props.navigation.setParams({ addJob: this.addJob });
    // this.props.navigation.setOptions({
    //   headerRight: () => (
    //     <TouchableOpacity style={{ marginRight: 10 }}
    //       onPress={route.params.addJob}>
    //       <Icon name='add' />
    //     </TouchableOpacity>
    //   )
    // });
  }

  addJob = () => {
    this.props.navigation.navigate('PostJob')
  }

  render() {
    if (jobsList.length === 0) {
      return (
        <Container style={{ backgroundColor: "#fff" }}>
          <Content>
            <TouchableWithoutFeedback
              onPress={() => {
                this.props.navigation.navigate("PostJob")
              }}>
              <Image
                source={require("../../assets/images/addjob.png")}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "cover",
                  alignSelf: "center",
                  marginTop: "25%"
                }}
              />
            </TouchableWithoutFeedback>
            <Text style={styles.textStyle}>
              Thousands of people are looking for a job right now! Ready to post your job offer and find the perfect candidate?
            </Text>
          </Content>
        </Container>
      );
    }

    return (
      <View style={{ backgroundColor: "#f9f9f9" }}>
        <FlatList
          keyExtractor={(item, index) => `${index}`}
          data={jobsList}
          contentContainerStyle={{ paddingTop: 20 }}
          renderItem={job => {
            return (
              <View style={styles.jobListItemContainer} key={job.index.toString()}>
                <TouchableOpacity
                  style={styles.jobEditIcon}
                  onPress={this.addJob}>
                  <Icon
                    name="edit"
                    type="MaterialIcons"
                    style={{ color: "#999", fontSize: 20 }}
                  />
                </TouchableOpacity>
                <Text style={styles.jobTitleText}>
                  {`${_.get(job, "item.jobTitle.jobTitle") ||
                    _.get(job, "item.jobRole.value") ||
                    ""}`}
                </Text>
                <View style={styles.locationContainer}>
                  <Icon
                    type="Entypo"
                    name="location-pin"
                    style={styles.locationIcon} />
                  {job.item.business.city !== null && (
                    <Text style={styles.locationText}>
                      {job.item.business.city.value}
                    </Text>
                  )}
                </View>
                <Text style={styles.companyName}>
                  {job.item.company === null
                    ? job.item.business.name
                    : job.item.company}
                </Text>

                <Text style={styles.desctiptionText} numberOfLines={2}>
                  {job.item.description}
                </Text>

                <Text style={[
                  styles.jobStatusText,
                  { color: job.item.enabled ? "#000" : "#999" }
                ]}>
                  {job.item.enabled ? "Available" : "Not Available"}
                </Text>
                <View>
                  <Button
                    titleStyle={styles.viewButtonTitle}
                    title={"View candidates"}
                    small
                    onPress={() => {
                      this.props.navigation.navigate("CandidateList");
                    }}
                    containerStyle={{ marginTop: 10 }}
                    buttonStyle={{ backgroundColor: "#000" }}
                  />
                  {/* {filterNewApplications.length != 0 && (
                    <Badge
                      badgeStyle={styles.badge}
                      textStyle={styles.badgeText}
                      value={filterNewApplications.length}
                      status="error"
                      containerStyle={[styles.badgeContainer]}
                    />
                  )} */}
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default RecruiterJobList;