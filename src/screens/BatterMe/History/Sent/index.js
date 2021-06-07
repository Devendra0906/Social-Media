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
import data from './../Received/data';
import CustomModal from '../../../../components/CustomModal';
import Color from '../../../../Helper/Color';

import {bindActionCreators} from 'redux';
import * as Actions from '../../../../actions/bettermeaction';
import {connect} from 'react-redux';

class Sent extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentItem: null,
    };
  }

  componentDidMount() {
    this.props.fetchsentfeedbacks(0, 10);
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
        headerTitle="SENT COMPITENCIES">
        {youRock.length > 0 && (
          <View>
            <View style={styles.tagMainContainer}>
              <View
                style={[styles.verticalLine, {backgroundColor: '#53C7E6'}]}
              />
              <Text style={[styles.sectionTitle, {color: '#53C7E6'}]}>
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
              <Text style={[styles.sectionTitle, {color: '#EEDB1E'}]}>
                Lets work
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
              <Text style={[styles.sectionTitle, {color: '#F3ACD1'}]}>
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
              data={this.props.sentList}
              style={styles.flatList}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={styles.listItem}>
                    <TouchableOpacity
                      style={styles.buttonContainer}
                      onPress={() =>
                        this.setState({showModal: true, currentItem: item})
                      }>
                      <View style={styles.compitenciesContainer}>
                        <Text style={styles.compitenciesCount}>
                          {item.Feedbacks.length}
                        </Text>
                        <Text style={styles.compitenciesText}>
                          {' '}
                          RATED COMPITENCIES
                        </Text>
                      </View>
                      <View style={styles.commentContainer}>
                        <Text style={styles.commentText}>{item.comment}</Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: 'rgb(245,245,245)',
                          padding: 10,
                        }}>
                        <Text style={styles.commentText}>
                          Sent to
                          <Text
                            style={[styles.commentText, {fontWeight: '700'}]}>
                            {' '}
                            {item.sentTo.name}
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
)(Sent);
