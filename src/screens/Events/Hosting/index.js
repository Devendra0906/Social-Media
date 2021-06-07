import React, {Component} from 'react';
import {View, Text, SectionList} from 'react-native';
import moment from 'moment';
import {Container, Content, Thumbnail} from 'native-base';
import styles from './styles';
import data from './data';

class Hosting extends Component {
  renderListItem = (item, index) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  render() {
    return (
      <Container testID="hostingEvents" style={{backgroundColor: '#fff'}}>
        <Content style={styles.content}>
          <View style={styles.eventsContainer}>
            <SectionList
              renderItem={({item, index, section}) => (
                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    marginVertical: 5,
                  }}>
                  <Thumbnail square source={item.thumbnail} />
                  <View style={styles.detailContainer}>
                    <Text style={styles.nameText}>{item.name}</Text>
                    <Text style={{fontSize: 14}}>
                      {item.date} AT {item.time}
                    </Text>
                    <Text style={{fontSize: 12}}>
                      {item.going} Going &#8231; {item.maybe} Interested
                    </Text>
                  </View>
                </View>
              )}
              renderSectionHeader={({section: {title}}) => (
                <Text style={styles.title}>{title}</Text>
              )}
              sections={data}
              keyExtractor={(item, index) => `${index}`}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default Hosting;
