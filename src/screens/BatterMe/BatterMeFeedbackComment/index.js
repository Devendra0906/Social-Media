import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {Container} from 'native-base';
import DeviceInfo from 'react-native-device-info';

import styles from './styles';
import Color from '../../../Helper/Color';

import {bindActionCreators} from 'redux';
import * as Actions from '../../../actions/bettermeaction';
import {connect} from 'react-redux';

class BatterMeFeedbackComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    };
    this.selectedCompitencies = [];
    this.feedback = [];
  }

  componentWillMount() {
    this.selectedCompitencies = this.props.route.params.selectedCompitencies;
    this.feedback = this.props.route.params.feedback;
    console.log('nyc', this.props.route.params);
  }

  addsentrequestsHandle = (temp, comment) => {
    this.props.addsentrequests(temp, comment);
  };

  objectcreator = (selectedCompitencies, feedback, comment) => {
    const temp = [];
    for (let i = 0; i < selectedCompitencies.length; i++) {
      temp.push({Competencies: selectedCompitencies[i], feedback: feedback[i]});
    }

    this.addsentrequestsHandle(temp, comment);
  };

  addfeedbackrequestHandle = (selectedCompitencies, comment) => {
    this.props.addfeedbackrequest(selectedCompitencies, comment);
  };

  render() {
    return (
      <Container style={{flex: 1, backgroundColor: Color.WHITE}} testID="feed">
        {/* <ScrollView style={styles.container}> */}
        <View style={{flex: 1}}>
          <View style={styles.tagsContainer}>
            {this.selectedCompitencies.map(value => {
              return (
                <View style={styles.tagTextContainer}>
                  <Text style={{color: Color.BLACK}}>{value}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={80}>
          <View
            style={{
              marginHorizontal: 0,
              marginTop: 15,
              marginBottom:
                DeviceInfo.hasNotch() && Platform.OS === 'ios' ? 30 : 15,
              flexDirection: 'row',
            }}>
            <TextInput
              testID="commentholder"
              style={{
                marginHorizontal: 15,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#bbb',
                paddingLeft: 10,
                flex: 1,
              }}
              placeholder="Please Comment"
              placeholderTextColor="#bbb"
              onChangeText={comment => this.setState({comment})}
              value={this.state.comment}
            />

            <TouchableOpacity
              testID="Sendbutton"
              style={{
                marginRight: 15,
                backgroundColor: Color.BLACK,
                paddingHorizontal: 10,
                paddingVertical: 7,
              }}
              onPress={() => {
                this.props.navigation.popToTop();

                this.addfeedbackrequestHandle(
                  this.selectedCompitencies,
                  this.state.comment,
                );

                this.objectcreator(
                  this.selectedCompitencies,
                  this.feedback,
                  this.state.comment,
                );
              }}>
              <Text style={{color: '#fff'}}>Send</Text>
            </TouchableOpacity>
          </View>
          {/* </ScrollView> */}
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({...Actions}, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(BatterMeFeedbackComment);
