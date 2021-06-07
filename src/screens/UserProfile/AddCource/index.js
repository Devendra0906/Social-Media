import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Container, Icon, Content } from "native-base";
import { Header } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';

import styles from "./styles";
import Color from '../../../Helper/Color';

const cources = [
  { value: 'React Native' },
  { value: 'PHP' },
  { value: 'React JS' },
  { value: 'Node JS' },
  { value: 'Python' },
  { value: 'Ruby' },
  { value: 'Swift' },
  { value: 'Java' },
  { value: 'Go' },
  { value: 'Kotlin' },
  { value: 'Machine Learnig' },
  { value: 'Objective C' }
]

class AddCource extends Component {

  constructor(props) {
    super(props)

    this.state = {
      courceName: '',
      number: '',
      associate: ''
    }
  }

  render() {
    const navigation = this.props.navigation;
    const {
      courceName,
      number,
      associate
    } = this.state;
    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }

    let pageTitle = 'Add Course'
    return (
      <Container style={{ backgroundColor: Color.WHITE }}>
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
              testID="sideMenuButton"
              onPress={() => navigation.goBack()}
            >
              <Icon type='Ionicons' name="ios-arrow-back" style={{ color: "#000" }} />
            </TouchableOpacity>)}
          centerComponent={{ text: pageTitle, style: { color: '#000', fontSize: 17, fontWeight: 'bold' } }}
        />
        <Content>
          <View style={{ marginTop: 15, marginHorizontal: 15 }}>
            <TextInput
              placeholder='Course Name'
              placeholderTextColor='#666'
              style={styles.textInput}
              value={courceName}
              onChangeText={(text) => this.setState({ courceName: text })}
            />
            <TextInput
              placeholder='Number'
              placeholderTextColor='#666'
              style={[styles.textInput, { marginTop: 15 }]}
              value={number}
              onChangeText={(text) => this.setState({ number: text })}
            />

            <Dropdown
              rippleOpacity={0}
              data={cources}
              textColor={'#000'}
              baseColor={'#000'}
              value={associate}
              onChangeText={label => {
                this.setState({ associate: label });
              }}
              renderBase={() => {
                return (
                  <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#666',
                    borderBottomWidth: 0.5, marginTop: 15
                  }}>
                    <TextInput
                      placeholder='Asspciate With'
                      placeholderTextColor='#666'
                      style={{
                        flex: 1, marginHorizontal: 0,
                        paddingVertical: 8,
                        fontSize: 15
                      }}
                      value={associate}
                      editable={false}
                      pointerEvents='none'
                    />
                    <Icon name='chevron-thin-down' type='Entypo' style={{ fontSize: 20, color: '#000' }} />
                  </View>
                );
              }}
            />
            <TouchableOpacity style={styles.saveContainer}
              onPress={() => navigation.goBack()}>
              <Text style={styles.saveText}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

export default AddCource;