import React, {Component} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Header} from 'react-native-elements';
import {Container, Content, Text, Icon} from 'native-base';

import PostList from './../../components/PostList';
import data from './data';
import styles from './styles';
import Color from '../../Helper/Color';
import {setTestId} from '../../Helper/GlobalMethods';
import {DrawerActions} from '@react-navigation/native';
import localizedStrings from '../../Helper/LocalisedString';

class Home extends Component {
  render() {
    const navigation = this.props.navigation;
    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }
    return (
      <Container style={{backgroundColor: Color.WHITE}} {...setTestId('feed')}>
        <Header
          containerStyle={[
            {
              backgroundColor: '#fff',
              paddingTop: 0,
              elevation: 10,
              shadowOffset: {width: 0, height: 2},
              shadowRadius: 2,
              shadowOpacity: 0.1,
              shadowColor: Color.BLACK,
              marginBottom: 5,
            },
            headerStyle,
          ]}
          leftComponent={
            <TouchableOpacity
              testID="sideMenuButton"
              onPress={() => {
                navigation.navigate('SideMenu');
              }}>
              <Icon
                name="menu"
                type="SimpleLineIcons"
                style={{color: Color.BLACK, fontSize: 24, marginLeft: 16}}
              />
            </TouchableOpacity>
          }
          centerComponent={{
            text: `${localizedStrings.home.newsFeed}`,
            style: {color: Color.BLACK, fontSize: 17, fontWeight: 'bold'},
          }}
          rightComponent={
            <TouchableOpacity
              {...setTestId('homeProfile')}
              onPress={() => {
                navigation.navigate('DoctorProfile');
              }}>
              <Image
                source={require('./../../../assets/images/contacts/batman.jpg')}
                style={{height: 30, width: 30, borderRadius: 15}}
                resizeMode="cover"
              />
            </TouchableOpacity>
          }
        />
        <View style={styles.newPostMainContainer}>
          <TouchableOpacity
            style={styles.postItemContainer}
            testID="btnAddPost"
            onPress={() => navigation.navigate('UpdatePost')}>
            <Icon
              type="FontAwesome"
              name="edit"
              style={{color: '#666', fontSize: 20}}
            />
            <Text style={styles.postText}>
              {localizedStrings.home.writePost}
            </Text>
            <Icon
              type="AntDesign"
              name="videocamera"
              style={{color: '#666', fontSize: 20}}
            />
            <Icon
              type="SimpleLineIcons"
              name="camera"
              style={{color: '#666', fontSize: 20, marginLeft: 15}}
            />
          </TouchableOpacity>
          {/* <View style={styles.verticalSaperator} />
          <TouchableOpacity style={styles.postItemContainer}
            onPress={() => navigation.navigate('PostToGroup')}>
            <Icon type='Entypo' name='images' style={{ color: '#bbb', fontSize: 20 }} />
            <Text style={styles.postText}>
              Upload Media
            </Text>
          </TouchableOpacity> */}
        </View>
        <Content style={styles.content}>
          <View style={styles.listViewBlock}>
            <PostList postList={data} />
          </View>
        </Content>
      </Container>
    );
  }
}

export default Home;
