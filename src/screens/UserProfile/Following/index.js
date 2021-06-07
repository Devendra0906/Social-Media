import React, { Component } from "react";
import { Image, View, TouchableOpacity, TextInput, Text, Dimensions, FlatList } from "react-native";
import DeviceInfo from 'react-native-device-info';
import { Container, Content, Icon } from "native-base";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Header } from 'react-native-elements';

import styles from "./styles";
import { companies, influencer, groups } from './data';
const profileImg = require("./../../../../assets/images/contacts/batman.jpg");


const LazyPlaceholder = ({ route }) => (
  <View style={styles.lazyPlaceholder}>
    <Text>Loading {route.title}…</Text>
  </View>
);

const Interests = (props) => {
  return (
    <FlatList
      style={{ flex: 1 }}
      data={props.data}
      renderItem={({ item, index }) => {
        return (
          <View key={`exp${index}`} style={styles.experienceListItem}>
            <Image style={styles.companyImage} source={item.image} resizeMode='cover' />
            <View style={styles.experienceDetailContainer}>
              <Text style={styles.designationText}>{item.name}</Text>
              {props.showSubtitle && <Text style={styles.experienceDetailText}>{item.position}</Text>}
              <Text style={[styles.experienceDetailText, { color: '#666' }]}>{item.follower}</Text>
            </View>
          </View>
        )
      }}
    />
  )
}

class Following extends Component {

  constructor(props) {
    super(props)

    this.state = {
      avatarSource: undefined,
      index: 0,
      routes: [
        { key: 'first', title: 'Influencers' },
        { key: 'second', title: 'Companies' },
        { key: 'third', title: 'Groups' }
      ]
    };
  }

  _handleIndexChange = index => this.setState({ index });

  _renderLazyPlaceholder = ({ route }) => <LazyPlaceholder route={route} />;

  _renderTabbar = (props) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: 'black' }}
        style={styles.tabBarIndicator}
        renderLabel={({ route, focused }) => (
          <Text style={{ color: focused ? "black" : "rgb(150, 150, 150)" }}>
            {route.title}
          </Text>
        )}
      />
    );
  }

  render() {
    const navigation = this.props.navigation;
    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header
          containerStyle={[{
            backgroundColor: '#fff',
            paddingTop: 0,
            elevation: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 2,
            shadowOpacity: 0.1,
            shadowColor: '#000',
            marginBottom: 5
          }, headerStyle]}
          leftComponent={(
            <TouchableOpacity
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              onPress={() => navigation.goBack()}
            >
              <Icon type='Ionicons' name="ios-arrow-back" style={{ color: "#000" }} />
            </TouchableOpacity>)}
          centerComponent={{ text: 'Following', style: { color: '#000', fontSize: 17, fontWeight: 'bold' } }}
        />
        <TabView
          testID='eventsTab'
          lazy
          navigationState={this.state}
          renderScene={({ route, jumpTo }) => {
            switch (route.key) {
              case 'first':
                return <Interests data={influencer} showSubtitle={true} />;
              case 'second':
                return <Interests data={companies} showSubtitle={false} />;
              case 'third':
                return <Interests data={groups} showSubtitle={false} />;
            }
          }}
          renderLazyPlaceholder={this._renderLazyPlaceholder}
          onIndexChange={this._handleIndexChange}
          initialLayout={{ width: Dimensions.get('window').width }}
          renderTabBar={(props) => this._renderTabbar(props)}
        />
      </Container>
    );
  }
}

export default Following;
