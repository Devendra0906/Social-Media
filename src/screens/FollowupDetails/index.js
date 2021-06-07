import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';
import Color from '../../Helper/Color';
import moment from 'moment';
import { Icon } from 'native-base';

const questionaries = [
  {
    question: 'quesrion 1',
    response: 'response 1'
  },
  {
    question: 'quesrion 2',
    response: 'response 2'
  },
  {
    question: 'quesrion 3',
    response: 'response 3'
  },
  {
    question: 'quesrion 4',
    response: 'response 4'
  },
  {
    question: 'quesrion 5',
    response: 'response 5'
  },
]

class FollowupDetails extends Component {
  constructor(props) {
    super(props);

    props.navigation.setOptions({
      title: "Follow-up Day 1",
      headerLeft: () => (
        <TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          style={{ marginLeft: 16 }}
          onPress={() => props.navigation.goBack()}>
          <Icon name='ios-arrow-back' />
        </TouchableOpacity>
      ),
    });
  }

  renderFollowupDetail = (item) => {
    let color = Color.SUCCESS_GREEN
    if (item.status == 'Red') {
      color = Color.RED
    }
    return (
      <View style={styles.listItemContainer}>
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 10, fontWeight: '700', color: Color.BLACK }}>
              {'Temprature'}
            </Text>
            <Text style={{ fontSize: 17, fontWeight: '700', color: Color.BLACK, marginTop: 5 }}>
              {item.temprature}{'\u00b0'}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 10, fontWeight: '700', color: Color.BLACK }}>
              {'Cough'}
            </Text>
            <Text style={{ fontSize: 17, fontWeight: '700', color: Color.BLACK, marginTop: 5 }}>
              {'Yes'}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 10, fontWeight: '700', color: Color.BLACK }}>
              {'Completed On'}
            </Text>
            <Text style={{ fontSize: 10, fontWeight: '700', color: Color.GREY }}>
              {moment(item.completed).format('DD MMM,YY')}
            </Text>
            <Text style={{ fontSize: 10, fontWeight: '700', color: Color.GREY }}>
              {moment(item.completed).format('h A')}
            </Text>
          </View>
        </View>
        <View>
          <View style={{ marginLeft: 10, height: 14, width: 14, borderRadius: 7, backgroundColor: color }} />
        </View>
      </View>

    )
  }

  render() {
    const data = this.props.route.params.data
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.WHITE, }}>
        <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
          {this.renderFollowupDetail(data)}
          <View style={{ marginTop: 30, borderColor: Color.LIGHT_GREY, borderWidth: 1, borderRadius: 8, padding: 10 }}>
            {
              questionaries.map((item, index) => {
                return (
                  <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                    <Text style={{ fontSize: 12, fontWeight: '600', color: Color.BLACK }}>
                      {index + 1}.
                  </Text>
                    <View style={{ marginLeft: 3, flex: 1, }}>
                      <Text style={{ fontSize: 12, fontWeight: '600', color: Color.BLACK }}>
                        {item.question}
                      </Text>
                      <Text style={{ fontSize: 12, fontWeight: '600', color: Color.BLACK }}>
                        {item.response}
                      </Text>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default FollowupDetails;
