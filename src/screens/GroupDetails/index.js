import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DeviceInfo from 'react-native-device-info';
import {
  Container,
  Input,
  Header,
  Left,
  Right,
  Title,
  Icon,
  Button,
  Body,
  Item,
  Thumbnail,
  CardItem
} from "native-base"
import styles from "./styles";
import data from '../Home/data';
import Platform from './../../theme/variables/platform';
import moment from 'moment';
import Color from '../../Helper/Color';

const notificationImg = require("../../../assets/images/notification.png");

const members = [
  require('./../../../assets/images/contacts/atul.png'),
  require('./../../../assets/images/contacts/megha.png'),
  require('./../../../assets/images/contacts/pratik.png')
]

class GroupDetails extends Component {

  constructor(props) {
    super(props)

  }

  openImagePicker() {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'photo'
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  }

  renderListRow = ({ item, index }) => {
    const navigation = this.context
    return (
      <View style={styles.listItemContainer} key={index}>
        <CardItem>
          <Left>
            <Thumbnail
              source={{ uri: item.user.userProfile }}
              size={40}
            />
            <Body>
              <Text style={styles.userNameText}>
                {item.user.userName}
              </Text>
              <View note style={{ flexDirection: "row" }}>
                <Text style={styles.timeText}>
                  {moment(item.createdAt).format('DD.MM.YYYY | HH:mm')}
                </Text>
              </View>
            </Body>
          </Left>
        </CardItem>
        <CardItem content style={{ paddingTop: 0 }}>
          {this.renderRowBody(item)}
        </CardItem>
        <CardItem style={styles.likeItemContainer}>
          <View style={styles.likeContainer}>
            <TouchableOpacity onPress={() => {
              item.isLiked = !item.isLiked
              this.setState({})
            }}>
              <Icon
                name={item.isLiked ? "heart" : "heart-o"}
                type="FontAwesome"
                style={[styles.cardFooterIcons, { color: item.isLiked ? "#f00" : "#666" }]}
              />
            </TouchableOpacity>
            <Text style={styles.cardFooterText}>Like 5 Users</Text>
          </View>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => navigation.navigate('PostComment', {
              postData: item
            })}>
            <Icon
              name="comment-o"
              type="FontAwesome"
              style={[styles.cardFooterIcons, { marginLeft: 5 }]}
            />
            <Text style={styles.cardFooterText}> 5</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="share-alt"
              type="SimpleLineIcons"
              style={[styles.cardFooterIcons, { marginLeft: 15 }]}
            />
          </TouchableOpacity>
        </CardItem>
        <View style={styles.commentItemContainer}>
          <View style={styles.inputContainer}>
            <Image source={require('./../../../assets/images/contacts/batman.jpg')} style={styles.thumbImage} />
            <TextInput
              style={styles.commentInput}
              placeholder='comment on this post'
              placeholderTextColor='#bbb'
            />
          </View>
        </View>
      </View>
    );
  }

  renderRowBody(dataRow) {
    if (dataRow.images && dataRow.images.length > 0) {
      return (
        <View style={{ flex: 1 }}>
          {dataRow.description !== "" ?
            <Text style={styles.postContentText}>
              {dataRow.description}
            </Text> : null}
          <Image style={{ width: '100%', height: 250, marginTop: 10 }} source={{ uri: dataRow.images[0].path }} />
        </View>
      )
    } else {
      return (
        <Text style={styles.postContentText}>
          {dataRow.description}
        </Text>
      );
    }
  }

  renderListHeaderComponent() {
    return (
      <View style={styles.listHeaderContainer}>
        <View>
          <Image source={require('./../../../assets/images/category/category_1.jpg')} style={styles.groupImage} resizeMode='cover' />
          <TouchableOpacity style={styles.editContainer}
            onPress={() => { this.openImagePicker() }}>
            <Icon type='EvilIcons' name="camera" style={styles.editCameraIcon} />
            <Title style={styles.editTitle}>EDIT</Title>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.groupTitleContainer}
          onPress={() => this.props.navigation.navigate('AboutGroup')}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>
              Application Flow
            </Text>
            <Feather name="chevron-right" size={22} color={'#000'} />
          </View>
          <Text style={styles.groupMemberText}>
            OPEN GROUP &#8231; 1 MEMBER
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createButtonContainer}
          onPress={() => this.props.navigation.navigate('AddMembers')}>
          <Title style={styles.createText}>ADD MEMBERS</Title>
        </TouchableOpacity>
        <FlatList
          testID="topGorupList"
          style={{ marginTop: 10, flexGrow: 0 }}
          data={members}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View style={{ marginLeft: index === 0 ? 0 : -8, alignItems: 'center' }}>
                <Thumbnail small source={item} style={{ borderColor: '#999', borderWidth: 1 }} />
              </View>
            )
          }}
        />
        <FlatList
          testID="topGorupList"
          style={{ marginTop: 15 }}
          data={["Chat", "Photos", "Events", "Files", "Albums"]}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View style={[styles.optionsListItem, { marginLeft: index === 0 ? 10 : 0 }]}>
                <Text style={{ fontWeight: '600' }}>
                  {item}
                </Text>
              </View>
            )
          }} />
        <View style={styles.saperator} />
        <View style={styles.addPostContainer}>
          <Thumbnail small source={require('./../../../assets/images/contacts/sanket.png')} />
          <Input style={styles.inputText}
            placeholder="Write Something..."
            placeholderTextColor="#bbb"
          />
          <View style={{ alignItems: 'center' }}>
            <FontAwesome name="file-photo-o" size={20} color='#000' />
            <Text style={{ fontSize: 12, fontWeight: '500', marginTop: 5 }}>
              Photo
            </Text>
          </View>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Feather name="dots-three-horizontal" size={20} color='#000' />
          </TouchableOpacity>
        </View>
        <View style={styles.activityHeader}>
          <Text style={{ fontSize: 14, paddingVertical: 8 }} >
            NEW ACTIVITY
        </Text>
          <Text style={{ fontSize: 14, paddingVertical: 8 }} >
            SORT
        </Text>
        </View>
      </View>
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
        <Header style={[headerStyle]}>
          <Button
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            transparent
            onPress={() => navigation.goBack()}>
            <Icon type='Ionicons' name="ios-arrow-back" style={{ color: "#000" }} />
          </Button>
          <Body>
            <Item style={{ backgroundColor: "transparent", borderBottomColor: '#000', borderBottomWidth: 1 }}>
              <Icon name="search" style={{ color: "#bbb", fontSize: 20 }} />
              <Input
                placeholderTextColor={"#bbb"}
                placeholder="Search"
                style={{ color: '#000', height: 35 }}
              />
            </Item>
          </Body>
          <Button testID="btnAddPost"
            transparent style={styles.headerBtn}
            onPress={() => { }}
          >
            <Icon name="shield" type="Entypo" style={{ color: "#000" }} />
          </Button>
        </Header>
        <PostList postList={data}
          ListHeaderComponent={this.renderListHeaderComponent()}
          renderItem={this.renderListRow}
          keyExtractor={(item, index) => `${index}`}
          style={{ backgroundColor: "#ddd" }}
        />
      </Container>
    );
  }
}

export default GroupDetails;