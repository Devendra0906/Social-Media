import React, {Component, useEffect} from 'react';
import {View, Dimensions, Text, TouchableOpacity} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {Header} from 'react-native-elements';
import {Container, Icon} from 'native-base';
import styles from './styles';
import Explore from './Explore';
import Color from '../../Helper/Color';
import localizedStrings from '../../Helper/LocalisedString';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as Actions from '../../actions/eventsaction';

const LazyPlaceholder = ({route}) => (
  <View style={styles.lazyPlaceholder}>
    <Text>Loading {route.title}…</Text>
  </View>
);

class Events extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    index: 0,
    routes: [
      {key: 'today', title: `${localizedStrings.events.today}`},
      {key: 'week', title: `${localizedStrings.events.thisWeek}`},
      {key: 'month', title: `${localizedStrings.events.thisMonth}`},
      {key: 'previous', title: `${localizedStrings.events.previous}`},
    ],
  };

  componentDidMount() {
    this.props.getThisMonthEventAction(0, 5, 123);

    this.props.getTodayEventAction(0, 5, 123);

    this.props.getThisWeekEventAction(0, 5, 123);

    this.props.getPrevEventAction(0, 5, 123);
  }

  _handleIndexChange = index => this.setState({index});

  _renderLazyPlaceholder = ({route}) => <LazyPlaceholder route={route} />;

  _renderTabbar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{backgroundColor: 'black'}}
        style={styles.tabBarIndicator}
        renderLabel={({route, focused}) => (
          <Text style={{color: focused ? 'black' : 'rgb(150, 150, 150)'}}>
            {route.title}
            {/* {console.log("HELLO SHUB",route.title)} */}
          </Text>
        )}
      />
    );
  };

  render() {
    const navigation = this.props.navigation;
    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }
    return (
      <Container
        style={{backgroundColor: Color.WHITE}}
        testID="eventsTabScreen">
        <Header
          containerStyle={[
            {
              backgroundColor: '#fff',
              paddingTop: 0,
              elevation: 10,
              shadowOffset: {width: 0, height: 2},
              shadowRadius: 2,
              shadowOpacity: 0.1,
              shadowColor: '#000',
              marginBottom: 5,
            },
            headerStyle,
          ]}
          leftComponent={
            <TouchableOpacity
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              onPress={() => navigation.goBack()}>
              <Icon name="ios-arrow-back" style={{color: '#000'}} />
            </TouchableOpacity>
          }
          centerComponent={{
            text: `${localizedStrings.events.events}`,
            style: {color: '#000', fontSize: 17, fontWeight: 'bold'},
          }}
          rightComponent={
            <TouchableOpacity
              testID="addEventButton"
              onPress={() => {
                navigation.navigate('CreateEvent');
              }}>
              <Icon name="md-add" style={{color: '#000'}} />
            </TouchableOpacity>
          }
        />
        {console.log('gggg', this.state)}
        <TabView
          testID="eventsTab"
          lazy
          navigationState={this.state}
          renderScene={({route, jumpTo}) => {
            switch (route.key) {
              case 'today':
                return (
                  <Explore type="today" data={this.props.events.todayEvents} />
                );
              case 'week':
                return (
                  <Explore
                    type="week"
                    data={this.props.events.thisWeekEvents}
                  />
                );
              case 'month':
                return (
                  <Explore
                    type="month"
                    data={this.props.events.thisMonthEvents}
                  />
                );
              case 'previous':
                return (
                  <Explore
                    type="previous"
                    data={this.props.events.prevEvents}
                  />
                );
            }
          }}
          renderLazyPlaceholder={this._renderLazyPlaceholder}
          onIndexChange={this._handleIndexChange}
          initialLayout={{width: Dimensions.get('window').width}}
          renderTabBar={props => this._renderTabbar(props)}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    ...state.events,
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
)(Events);
