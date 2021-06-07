import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import MapView, { Marker } from "react-native-maps";
import { Icon } from 'native-base';
import { Button } from 'react-native-elements';

import styles from './styles';

class JobInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    };

    props.navigation.setOptions({
      title: props.route.params && props.route.params.title ? props.route.params.title : 'Candidates',
      headerLeft: () => (
        <TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          style={{ marginLeft: 16 }}
          onPress={() => props.navigation.goBack()}>
          <Icon name='ios-arrow-back' />
        </TouchableOpacity>
      )
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View>
            <Image style={styles.companyImage} />
            <TouchableOpacity style={[styles.floatButtons, { right: 20 }]}>
              <Icon name={'ios-heart'} style={{ fontSize: 25 }} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.floatButtons, { right: 80 }]}>
              <Icon name={'md-share'} style={{ fontSize: 25 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.nameText}>
              Sous-chef
            </Text>
            <Text style={styles.jobTitleText}>
              Chef & cook
            </Text>
            <Text style={styles.descriptionText}>
              Responsibilities will vary depending on the specific position. Head chefs and sous chefs spend a lot of time involved in managing employees and making sure the operation is running smoothly on a day-to-day basis. The head chef may focus on more creative work, such as creating menus and dishes and helping to plan menus or presentations for special events. Sous chefs will focus on the actual day-to
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text style={{ flex: 1, fontWeight: '600' }}>
                Company Name
              </Text>
              <Text style={{ flex: 1 }}>
                Devstree
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text style={{ flex: 1, fontWeight: '600' }}>
                Employment Type
              </Text>
              <Text style={{ flex: 1 }}>
                Full-time
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text style={{ flex: 1, fontWeight: '600' }}>
                Work experoence
              </Text>
              <Text style={{ flex: 1 }}>
                1 year
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text style={{ flex: 1, fontWeight: '600' }}>
                Salary
              </Text>
              <Text style={{ flex: 1 }}>
                2000-4000 USD
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text style={{ flex: 1, fontWeight: '600' }}>
                Start Date
              </Text>
              <Text style={{ flex: 1 }}>
                Immediate start
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text style={{ flex: 1, fontWeight: '600' }}>
                Location
              </Text>
              <Text style={{ flex: 1 }}>
                Ahmedabad - Gujarat - India
              </Text>
            </View>
            <View style={{ marginTop: 30 }}>
              <MapView
                style={styles.mapViewStyle}
                scrollEnabled={false}
                liteMode
                region={this.state.region}
              >
                <Marker
                  coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                  title={"Darshit"}
                />
              </MapView>
            </View>
            <Button
              titleStyle={styles.viewButtonTitle}
              title={"Apply now"}
              small
              onPress={() => {
                this.props.navigation.goBack()
              }}
              containerStyle={{ marginVertical: 20 }}
              buttonStyle={{ backgroundColor: "#000" }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default JobInformation;