import React, {Component} from 'react';
import {View, TouchableOpacity, Text, SectionList, Image} from 'react-native';
import {Container, Header, Item, Icon, Button, Left, Right} from 'native-base';
import DeviceInfo from 'react-native-device-info';
import styles from './styles';
import data from './data';
import Color from '../../../Helper/Color';

class FeedbackRequests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedback: [],
      compitencies: [],
      selectedSection: -1,
      selectedIndex: -1,
      selectedCompitencies: [],
    };

    this.isSendRequest = false;

    console.log('ghghg', this.state);

    props.navigation.setOptions({
      title: 'Feedback Requests',
      headerLeft: () => (
        <TouchableOpacity
          testID="GoBack"
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
          onPress={() => props.navigation.goBack()}
          style={{marginLeft: 16}}>
          <Icon name="ios-arrow-back" color={Color.BLACK} size={25} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          testID="Gotofeebackcomment"
          style={{marginRight: 16}}
          onPress={() =>
            props.navigation.navigate('BatterMeFeedbackComment', {
              selectedCompitencies: this.state.selectedCompitencies,
              feedback: this.state.feedback,
            })
          }>
          <Text style={{fontSize: 15}}>Next</Text>
        </TouchableOpacity>
      ),
    });
  }

  componentWillMount = () => {
    const params = this.props.route.params;
    const userData = params ? params.userData : undefined;
    this.isSendRequest = params.isSendRequest ? params.isSendRequest : false;
    if (!!userData) {
      const userCompitencies = userData.feedbacks;
      const otherCompitencies = data.filter(value => {
        return userCompitencies.findIndex(x => x.name === value.name) === -1;
      });

      const compitenciesData = [
        {title: 'Requested compitencies', data: userCompitencies},
        {title: 'More compitencies to give feedback', data: otherCompitencies},
      ];
      this.setState({compitencies: compitenciesData});
    } else {
      const compitenciesData = [
        {
          title: this.isSendRequest
            ? 'Your Compitencies'
            : 'Compitencies to give feedback',
          data: data,
        },
      ];
      this.setState({compitencies: compitenciesData});
    }
  };

  renderSendRequestListItem(item, index, section) {
    let contain = this.state.selectedCompitencies.includes(item.name);
    return (
      <View style={styles.listButtonContainer}>
        <Text
          testID="competenciesname"
          style={{marginLeft: 10, fontSize: 17, marginVertical: 10}}>
          {item.name}
        </Text>
        <TouchableOpacity
          testID="selectcompetencies"
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
          onPress={() => {
            let selectedCompitencies = [...this.state.selectedCompitencies];
            let index = selectedCompitencies.indexOf(item.name);
            if (index !== -1) {
              let newList = selectedCompitencies.splice(index, 1);
            } else {
              selectedCompitencies.push(item.name);
            }
            this.setState({selectedCompitencies});
          }}>
          <Icon
            testID="buttontoaddfeedback"
            name={contain ? 'minus-circle' : 'plus-circle'}
            type="FontAwesome"
            style={{color: '#000', fontSize: 20}}
          />
        </TouchableOpacity>
      </View>
    );
  }

  renderGiveFeedbackListItem(item, index, section) {
    const {selectedIndex, selectedSection} = this.state;
    if (item.icon.length > 0) {
      let backgroundColor = 'transparent';
      let type = 'FontAwesome';
      let starType = '';
      const icon = item.icon[0];
      if (icon === 'star') {
        backgroundColor = '#53C7E6';
        starType = 'You Rock';
      } else if (icon === 'graduation-cap') {
        backgroundColor = '#EEDB1E';
        starType = "Let's work on this";
      } else if (icon === 'medal') {
        backgroundColor = '#F3ACD1';
        type = 'Entypo';
        starType = 'Cool';
      }
      return (
        <View style={styles.listButtonContainer}>
          <View style={{marginVertical: 5}}>
            <Text style={{marginLeft: 10, fontSize: 17}}>{item.name}</Text>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 14,
                color: backgroundColor,
                marginTop: 2,
              }}>
              {starType}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={[
                styles.feedbackIconContainer,
                {backgroundColor: backgroundColor},
              ]}>
              <Icon name={icon} type={type} style={styles.feedbackIcon} />
            </View>
            <TouchableOpacity
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              onPress={() => {
                item.icon = [];
                this.setState({compitencies: this.state.compitencies});
              }}>
              <Icon
                name="minus-circle"
                type="FontAwesome"
                style={{color: '#000', fontSize: 20, marginLeft: 8}}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      let currentSection = -1;
      if (section.title === 'Requested compitencies') {
        currentSection = 0;
      } else {
        currentSection = 1;
      }
      return (
        <View style={styles.listButtonContainer}>
          <Text style={{marginLeft: 10, fontSize: 17, marginVertical: 10}}>
            {item.name}
          </Text>
          <Icon
            name="plus-circle"
            type="FontAwesome"
            style={{color: Color.BLACK, fontSize: 20}}
            onPress={() => {
              if (section.title === 'Requested compitencies') {
                if (
                  index === selectedIndex &&
                  currentSection === selectedSection
                ) {
                  this.setState({selectedIndex: -1, selectedSection: -1});
                } else {
                  this.setState({selectedIndex: index, selectedSection: 0});
                }
              } else {
                if (
                  index === selectedIndex &&
                  currentSection === selectedSection
                ) {
                  this.setState({selectedIndex: -1, selectedSection: -1});
                } else {
                  this.setState({selectedIndex: index, selectedSection: 1});
                }
              }
            }}
          />
          {selectedIndex === index && selectedSection === currentSection && (
            <View style={styles.feedbackIconMainContainer}>
              <TouchableOpacity
                style={[
                  styles.feedbackIconContainer,
                  {backgroundColor: '#53C7E6'},
                ]}
                onPress={() => {
                  let selectedCompitencies = [
                    ...this.state.selectedCompitencies,
                  ];
                  let feedback = [...this.state.feedback];
                  let index = selectedCompitencies.indexOf(item.name);
                  if (index !== -1) {
                    let newList = selectedCompitencies.splice(index, 1);
                  } else {
                    selectedCompitencies.push(item.name);
                  }
                  item.icon = ['star'];
                  if (item.icon[0] == 'star') {
                    feedback.push('You Rock');
                  }
                  this.setState({
                    selectedIndex: -1,
                    selectedSection: -1,
                    selectedCompitencies,
                    feedback,
                  });
                }}>
                <Icon
                  testID="iconname1"
                  name="star"
                  type="FontAwesome"
                  style={styles.feedbackIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.feedbackIconContainer,
                  {backgroundColor: '#EEDB1E', marginHorizontal: 5},
                ]}
                onPress={() => {
                  let selectedCompitencies = [
                    ...this.state.selectedCompitencies,
                  ];
                  let feedback = [...this.state.feedback];
                  let index = selectedCompitencies.indexOf(item.name);
                  if (index !== -1) {
                    let newList = selectedCompitencies.splice(index, 1);
                  } else {
                    selectedCompitencies.push(item.name);
                  }
                  item.icon = ['graduation-cap'];
                  if (item.icon[0] == 'graduation-cap') {
                    feedback.push('Lets work');
                  }
                  this.setState({
                    selectedIndex: -1,
                    selectedSection: -1,
                    selectedCompitencies,
                    feedback,
                  });
                }}>
                <Icon
                  testID="iconname2"
                  name="graduation-cap"
                  type="FontAwesome"
                  style={styles.feedbackIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.feedbackIconContainer,
                  {backgroundColor: '#F3ACD1'},
                ]}
                onPress={() => {
                  let selectedCompitencies = [
                    ...this.state.selectedCompitencies,
                  ];
                  let feedback = [...this.state.feedback];
                  let index = selectedCompitencies.indexOf(item.name);
                  if (index !== -1) {
                    let newList = selectedCompitencies.splice(index, 1);
                  } else {
                    selectedCompitencies.push(item.name);
                  }
                  item.icon = ['medal'];
                  if (item.icon[0] == 'medal') {
                    feedback.push('cool');
                  }
                  this.setState({
                    selectedIndex: -1,
                    selectedSection: -1,
                    selectedCompitencies,
                    feedback,
                  });
                }}>
                <Icon
                  testID="iconname3"
                  name="medal"
                  type="Entypo"
                  style={styles.feedbackIcon}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      );
    }
  }

  renderListRow = ({item, index, section}) => {
    if (this.isSendRequest) {
      return this.renderSendRequestListItem(item, index, section);
    } else {
      return this.renderGiveFeedbackListItem(item, index, section);
    }
  };

  renderSectionTitle = ({section: {title}}) => {
    return (
      <View style={{marginHorizontal: 15, paddingVertical: 10}}>
        <Text
          testID="sectiontitle"
          style={{fontSize: 18, fontWeight: 'bold', color: Color.LIGHT_GREY}}>
          {title}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <Container testID="feed" style={{backgroundColor: Color.WHITE}}>
        <SectionList
          style={{flex: 1, paddingTop: 20}}
          sections={this.state.compitencies}
          renderItem={this.renderListRow}
          renderSectionHeader={this.renderSectionTitle}
          keyExtractor={(item, index) => `${index}`}
          stickySectionHeadersEnabled={false}
          extraData={this.state}
        />
      </Container>
    );
  }
}

export default FeedbackRequests;
