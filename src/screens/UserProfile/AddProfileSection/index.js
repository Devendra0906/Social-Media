import React, { Component } from "react";
import { Image, View, TouchableOpacity, FlatList, Text } from "react-native";
import DeviceInfo from 'react-native-device-info';
import { Container, Content, Icon } from "native-base";
import { Header } from "react-native-elements";

import styles from "./styles";
import data from "./data";
import Color from "../../../Helper/Color";

class AddProfileSection extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedIndex: -1
    }
  }

  onPressAddButton = (index) => {
    const { selectedIndex } = this.state;
    const { navigation } = this.props;
    if (selectedIndex === 0) {
      if (index === 0) {
        navigation.navigate('ContactInfo')
      }
    } else if (selectedIndex === 1) {
      if (index === 0) {
        navigation.navigate('AddExperience')
      } else if (index === 1) {
        navigation.navigate('AddEducation')
      } else if (index === 2) {
        navigation.navigate('AddCertifications')
      } else if (index === 3) {
        navigation.navigate('AddVolunteerExperience')
      }
    } else if (selectedIndex === 2) {
      if (index === 0) {
        navigation.navigate('AddSkills')
      }
    } else if (selectedIndex === 3) {
      if (index === 0) {
        navigation.navigate('AddPublication')
      } else if (index === 1) {
        navigation.navigate('AddPatent')
      } else if (index === 2) {
        navigation.navigate('AddCource')
      } else if (index === 3) {
        navigation.navigate('AddProject')
      } else if (index === 4) {
        navigation.navigate('AddHonorsAndAwards')
      } else if (index === 5) {
        navigation.navigate('AddTestScore')
      } else if (index === 6) {
        navigation.navigate('AddLanguage')
      } else if (index === 7) {
        navigation.navigate('AddOrganisation')
      }
    }
  }

  renderInnerListItem = ({ item, index }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: Color.WHITE, paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', flex: 1, marginRight: 8 }}>
          <Image source={item.icon} style={{ width: 25, height: 25 }} resizeMode='contain' />
          <View style={{ marginLeft: 8, flex: 1 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        </View>
        <Icon type='Ionicons' name='ios-add-circle-outline' style={{ fontSize: 30, color: Color.BLACK }}
          onPress={() => this.onPressAddButton(index)}
        />
      </View>
    )
  }

  renderListItem = ({ item, index }) => {
    return (
      <View style={{ backgroundColor: Color.WHITE, paddingVertical: 10, paddingHorizontal: 15 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
          onPress={() => {
            if (this.state.selectedIndex === index) {
              this.setState({ selectedIndex: -1 })
            } else {
              this.setState({ selectedIndex: index })
            }
          }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: Color.BLACK }}>{item.title}</Text>
          <Icon type='Entypo' name={this.state.selectedIndex === index ? 'chevron-thin-up' : 'chevron-thin-down'} style={{ fontSize: 20, color: Color.BLACK }} />
        </TouchableOpacity>
        {this.state.selectedIndex === index && <FlatList
          data={data[index].data}
          scrollEnabled={false}
          renderItem={this.renderInnerListItem}
          style={{ flexGrow: 0, marginTop: 10, marginLeft: 8 }}
          ItemSeparatorComponent={this.renderSeparator}
        />}
      </View>
    )
  }

  renderSeparator = () => {
    return (
      <View style={{ marginHorizontal: 0, height: 0.5, backgroundColor: '#bbb' }} />
    )
  }

  render() {
    const navigation = this.props.navigation;
    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }
    return (
      <Container style={{ backgroundColor: Color.WHITE }}>
        <Header
          containerStyle={[{
            backgroundColor: Color.WHITE,
            paddingTop: 0,
            elevation: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 2,
            shadowOpacity: 0.1,
            shadowColor: Color.BLACK,
            marginBottom: 5
          }, headerStyle]}
          leftComponent={(
            <TouchableOpacity
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              testID="sideMenuButton"
              onPress={() => navigation.goBack()}
            >
              <Icon name="arrow-back" style={{ color: Color.BLACK }} />
            </TouchableOpacity>)}
          centerComponent={{ text: "Add Section", style: { color: Color.BLACK, fontSize: 17, fontWeight: 'bold' } }}
        />
        <Content>
          <FlatList
            data={data}
            scrollEnabled={false}
            renderItem={this.renderListItem}
            style={{ flexGrow: 0 }}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </Content>
      </Container>
    );
  }
}

export default AddProfileSection;
