import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  Modal,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import ImagePicker from 'react-native-image-picker';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Content,
  Button,
  Icon,
  Thumbnail,
  Title,
  List,
  ListItem,
  Grid,
  Col,
  Row,
} from 'native-base';
import data from './data';
import styles from './styles';
import {
  didChangePostDescription,
  didResetPost,
  didSelectPostImage,
} from '../../actions';
import Color from '../../Helper/Color';
import localizedStrings from '../../Helper/LocalisedString';

const profileImg = require('../../../assets/images/contacts/sanket.png');

class UpdatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      avatarSource: undefined,
      selectedOption: 1,
      selectedOptionText: 'Anyone',
      optionModalVisible: false,
    };
  }

  onPressRow = (secId, rowId) => {
    console.log('SECTION: ' + secId + 'ROW: ' + rowId);
    if (rowId == 0) {
      this.openImagePicker();
    } else if (rowId == 4) {
      this.props.navigation.navigate('TagMembers');
    }
  };

  openImagePicker() {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'mixed',
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
        // const source = { uri: response.uri };

        // You can also display the image using data:
        const source = {uri: 'data:image/jpeg;base64,' + response.data};
        this.props.updatePostImage(source);
      }
    });
  }

  rednerImage() {
    if (this.props.postImage !== undefined) {
      return (
        <View>
          <Icon
            name="close"
            type="AntDesign"
            style={{
              position: 'absolute',
              top: 0,
              right: 10,
              zIndex: 999,
              paddind: 5,
              backgroundColor: 'rgba(255,255,255, 0.3)',
            }}
            onPress={() => {
              this.props.updatePostImage(undefined);
            }}
          />
          <Image
            style={{height: 200, marginHorizontal: 10}}
            source={this.props.postImage}
          />
        </View>
      );
    } else {
      return null;
    }
  }

  renderVisibleOption = (title, subTitle, leftIcon, selected, idx) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 8}}
        onPress={() => {
          if (idx == 3) {
            this.setState({optionModalVisible: false});
            this.props.navigation.navigate('PostToGroup', {
              onClose: () => {
                this.setState({optionModalVisible: true});
              },
              onSelect: (title) => {
                this.setState({
                  optionModalVisible: false,
                  selectedOption: idx,
                  selectedOptionText: title,
                });
              },
            });
          } else {
            this.setState({selectedOption: idx, selectedOptionText: title});
          }
        }}>
        {leftIcon}
        <View style={{marginLeft: 10, flex: 1}}>
          <Text style={{color: Color.BLACK, fontSize: 15, fontWeight: '600'}}>
            {title}
          </Text>
          <Text style={{color: Color.GREY, fontSize: 12}}>{subTitle}</Text>
        </View>
        {selected ? (
          <Icon
            type="MaterialIcons"
            name={'radio-button-checked'}
            style={{fontSize: 22, color: Color.BLACK}}
          />
        ) : (
          <Icon
            type="MaterialIcons"
            name={'radio-button-unchecked'}
            style={{fontSize: 22, color: Color.BLACK}}
          />
        )}
      </TouchableOpacity>
    );
  };

  renderVisibilityModal = () => {
    return (
      <Modal
        transparent
        visible={this.state.optionModalVisible}
        animationType="slide">
        <TouchableOpacity
          activeOpacity={1.0}
          style={styles.filterContainer}
          onPress={() => this.setState({optionModalVisible: false})}>
          <View style={styles.filterContentContainer}>
            <View style={styles.shape} />
            <View style={{marginHorizontal: 20, marginVertical: 15}}>
              <Text
                style={{color: Color.BLACK, fontSize: 16, fontWeight: '600'}}>
                Who can see this post?
              </Text>
              <Text style={{color: Color.GREY, fontSize: 13, marginTop: 5}}>
                Your post will be visible on feed, on your profile and in search
                results
              </Text>
              <View style={{marginTop: 10}}>
                {this.renderVisibleOption(
                  'Anyone',
                  'Anyone on or off Chain.Care',
                  <Icon
                    type="Entypo"
                    name={'globe'}
                    style={styles.globeIcon}
                  />,
                  this.state.selectedOption == 1,
                  1,
                )}
                {this.renderVisibleOption(
                  'Connections only',
                  'Connections on Chain.Care',
                  <Icon
                    type="FontAwesome5"
                    name={'user-friends'}
                    style={styles.globeIcon}
                  />,
                  this.state.selectedOption == 2,
                  2,
                )}
                {this.renderVisibleOption(
                  'Group members',
                  "Select a group you're in",
                  <Icon
                    type="MaterialCommunityIcons"
                    name={'account-group'}
                    style={styles.globeIcon}
                  />,
                  this.state.selectedOption == 3,
                  3,
                )}
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <SafeAreaView style={{backgroundColor: Color.WHITE}} />
      </Modal>
    );
  };

  render() {
    const navigation = this.props.navigation;

    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }
    return (
      <Container testID="updatePost" style={{backgroundColor: Color.WHITE}}>
        <Header style={headerStyle}>
          <Left>
            <Button
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              transparent
              onPress={() => {
                this.props.resetPost();
                navigation.goBack();
              }}>
              <Icon
                active
                type="Ionicons"
                name="ios-arrow-back"
                style={{color: '#000'}}
              />
            </Button>
          </Left>
          <Body style={{flex: 1.3}}>
            <Title style={{color: '#000'}}>
              {localizedStrings.updateStatus.updateStatus}
            </Title>
          </Body>
          <Right>
            <Button
              transparent
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              onPress={() => {
                this.props.resetPost();
                navigation.popToTop();
              }}
              testID="btnPost">
              <Text style={styles.headerBtnText}>
                {localizedStrings.updateStatus.post}
              </Text>
            </Button>
          </Right>
        </Header>
        <ScrollView style={{flex: 1}}>
          <Content style={styles.content}>
            <TouchableOpacity style={styles.nameContainerLink}>
              <Thumbnail square source={profileImg} />
              <View style={styles.userInfoContainer}>
                <Text style={styles.userNameText}>Sanket Sahu</Text>
                <TouchableOpacity
                  style={styles.nameContainer}
                  onPress={() => this.setState({optionModalVisible: true})}>
                  <Icon type="Entypo" name={'globe'} style={styles.globeIcon} />
                  <Text style={styles.profileVisibilityText}>
                    {this.state.selectedOptionText}
                  </Text>
                  <Icon
                    name={'caret-down-outline'}
                    style={styles.dropDownIcon}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <View style={styles.textareaView}>
              <TextInput
                onChangeText={(text) => this.props.changePostDesctoption(text)}
                value={this.props.postDescription}
                placeholder={localizedStrings.updateStatus.whatsOnYourMind}
                style={styles.textarea}
                editable
                multiline
                underlineColorAndroid="transparent"
                numberOfLines={10}
              />
            </View>
            {this.rednerImage()}
            <View style={styles.optionsView}>
              <FlatList
                data={data}
                renderItem={({item, index}) => (
                  <ListItem
                    button
                    iconLeft
                    noBorder
                    style={{paddingTop: 8, paddingBottom: 4}}
                    onPress={() => {
                      this.onPressRow(secId, rowId);
                    }}>
                    <Row>
                      <Col style={{width: 40}}>
                        <Image
                          style={{
                            width: 30,
                            height: 30,
                            tintColor: item.iconColor,
                          }}
                          source={item.icon}
                          resizeMode="contain"
                        />
                      </Col>
                      <Col>
                        <Text style={styles.optionText}>{item.text}</Text>
                      </Col>
                    </Row>
                  </ListItem>
                )}
              />
            </View>
          </Content>
        </ScrollView>
        {this.renderVisibilityModal()}
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    changePostDesctoption: (desc) => dispatch(didChangePostDescription(desc)),
    resetPost: () => dispatch(didResetPost()),
    updatePostImage: (image) => dispatch(didSelectPostImage(image)),
  };
}

const mapStateToProps = (state) => {
  return {
    users: state.postReducer.users,
    postImage: state.postReducer.postImage,
    postDescription: state.postReducer.postDescription,
    location: state.postReducer.location,
  };
};

export default connect(mapStateToProps, bindAction)(UpdatePost);
