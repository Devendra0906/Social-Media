import React, { Component } from "react";
import { Image, View, Text, FlatList } from "react-native";
import { NavigationContext } from '@react-navigation/native';
import { Container, Content, Icon } from "native-base";

import styles from "./styles";
import { experienceData, accomplishmentsData } from '../data'
import Color from "../../../Helper/Color";

class About extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props)

    this.state = {
      avatarSource: undefined
    };
  }

  renderExperienceListItem = ({ item, index }) => {
    return (
      <View key={`exp${index}`} style={styles.experienceListItem}>
        <Image style={styles.companyImage} source={item.image} resizeMode='contain' />
        <View style={styles.experienceDetailContainer}>
          <Text style={styles.designationText}>{item.designation}</Text>
          <Text style={styles.experienceDetailText}>{item.companyName}</Text>
          <Text style={[styles.experienceDetailText, { color: '#666' }]}>{item.start} - {item.end}</Text>
          {/* <Text style={[styles.experienceDetailText, { color: '#666' }]}>{item.location}</Text> */}
        </View>
      </View>
    )
  }

  renderAccomplishmentsListItem = ({ item, index }) => {
    return (
      <View key={`acc${index}`} style={styles.experienceListItem}>
        <Text style={styles.designationText}>{item.count}</Text>
        <Text style={[styles.designationText, { marginLeft: 10, color: '#666' }]}>{item.title}</Text>
      </View>
    )
  }

  renderInterestsListItem = ({ item, index }) => {
    return (
      <View key={`int${index}`} style={[styles.experienceListItem, { marginRight: 7 }]}>
        <Image style={{ height: 30, width: 30, borderRadius: 15 }} source={require('./../../../../assets/images/category/category_5.jpg')} resizeMode='cover' />
      </View>
    )
  }

  renderSeparator = () => {
    return (
      <View style={styles.separator} />
    )
  }

  render() {
    return (
      <Container style={{ backgroundColor: Color.WHITE }}>
        <Content>
          <View style={styles.sectionContainer}>
            <Text style={styles.userNameText}>
              Experience
              </Text>
            <FlatList
              scrollEnabled={false}
              style={{ marginTop: 10, flexGrow: 0 }}
              data={experienceData}
              renderItem={this.renderExperienceListItem}
              keyExtractor={(item, index) => `EXP${index}`}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.userNameText}>
              Accomplishments
              </Text>

            <FlatList
              scrollEnabled={false}
              style={{ marginTop: 10, flexGrow: 0 }}
              data={accomplishmentsData}
              renderItem={this.renderAccomplishmentsListItem}
              keyExtractor={(item, index) => `ACC${index}`}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>

          <View style={styles.sectionContainer}>
            <View style={styles.sectionTitleView}>
              <Text style={styles.userNameText}>
                Interests
              </Text>
            </View>
            <FlatList
              horizontal
              style={{ marginTop: 10 }}
              data={accomplishmentsData}
              renderItem={this.renderInterestsListItem}
              keyExtractor={(item, index) => `INT${index}`}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default About;
