import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {Container, Content} from 'native-base';
import styles from './styles';
import data from './data';
import CustomModal from '../../../../components/CustomModal';
import Color from '../../../../Helper/Color';

import {bindActionCreators} from 'redux';
import * as Actions from '../../../../actions/bettermeaction';
import {connect} from 'react-redux';

class Received extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentItem: null,
    };
  }

  componentDidMount() {
    this.props.fetchFeedbacksAndRequestAction(0, 100);
  }

  renderCompitenciesModal() {
    const {currentItem, showModal} = this.state;

    if (!currentItem) {
      return null;
    }
    let youRock = [];
    let letsWork = [];
    let fwfew = [];

    currentItem.Feedbacks.map(value => {
      if (value.feedback === 'You Rock') {
        youRock.push(value.Competencies);
      } else if (value.feedback === 'lets work') {
        letsWork.push(value.Competencies);
      } else {
        fwfew.push(value.Competencies);
      }
    });

    return (
      <CustomModal
        visible={showModal}
        onClose={() => this.setState({showModal: false})}
        headerTitle="RECEIVED COMPITENCIES">
        {youRock.length > 0 && (
          <View>
            <View style={styles.tagMainContainer}>
              <View
                style={[styles.verticalLine, {backgroundColor: '#53C7E6'}]}
              />
              <Text
                testID="sectiontitle1"
                style={[styles.sectionTitle, {color: '#53C7E6'}]}>
                You Rock
              </Text>
            </View>
            <View style={styles.tagsContainer}>
              {youRock.map(value => {
                return (
                  <View style={styles.tagTextContainer}>
                    <Text style={{color: '#000'}}>{value}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        )}
        {letsWork.length > 0 && (
          <View>
            <View style={[styles.tagMainContainer, {marginTop: 20}]}>
              <View
                style={[styles.verticalLine, {backgroundColor: '#EEDB1E'}]}
              />
              <Text
                testID="sectiontitle2"
                style={[styles.sectionTitle, {color: '#EEDB1E'}]}>
                Lets work on this
              </Text>
            </View>
            <View style={styles.tagsContainer}>
              {letsWork.map(value => {
                return (
                  <View style={styles.tagTextContainer}>
                    <Text style={{color: '#000'}}>{value}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        )}
        {fwfew.length > 0 && (
          <View>
            <View style={[styles.tagMainContainer, {marginTop: 20}]}>
              <View
                style={[styles.verticalLine, {backgroundColor: '#F3ACD1'}]}
              />
              <Text
                testID="sectiontitle3"
                style={[styles.sectionTitle, {color: '#F3ACD1'}]}>
                fwfew
              </Text>
            </View>
            <View style={styles.tagsContainer}>
              {fwfew.map(value => {
                return (
                  <View style={styles.tagTextContainer}>
                    <Text style={{color: '#000'}}>{value}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        )}
      </CustomModal>
    );
  }

  render() {
    const navigation = this.context;
    return (
      <Container testID="exploreEvents" style={{backgroundColor: Color.WHITE}}>
        <Content style={styles.content}>
          <View style={styles.eventsContainer}>
            <FlatList
              data={this.props.receivedList}
              style={styles.flatList}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={styles.listItem}>
                    <TouchableOpacity
                      testID="touchableshowmodal"
                      style={styles.buttonContainer}
                      onPress={() =>
                        this.setState({showModal: true, currentItem: item})
                      }>
                      <View style={styles.compitenciesContainer}>
                        <Text
                          testID="feedbackscount"
                          style={styles.compitenciesCount}>
                          {item.Feedbacks.length}
                        </Text>
                        <Text style={styles.compitenciesText}>
                          {' '}
                          RATED COMPITENCIES
                        </Text>
                      </View>
                      <View style={styles.commentContainer}>
                        <Text
                          testID="feedbackcomment"
                          style={styles.commentText}>
                          {item.comment}
                        </Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: 'rgb(245,245,245)',
                          padding: 10,
                        }}>
                        <Text
                          testID="receivedsendername"
                          style={styles.commentText}>
                          Received from
                          <Text
                            style={[styles.commentText, {fontWeight: '700'}]}>
                            {' '}
                            {item.sender.name}
                          </Text>
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
              keyExtractor={(item, index) => `${index}`}
            />
          </View>
        </Content>
        {this.renderCompitenciesModal()}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    ...state.betterme,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({...Actions}, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Received);
