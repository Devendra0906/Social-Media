import React, {Component} from 'react';
import {View, Dimensions, Text, TouchableOpacity} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {Container} from 'native-base';
import styles from './styles';
import Received from './Received';
import Sent from './Sent';
import Color from '../../../Helper/Color';
import localizedStrings from '../../../Helper/LocalisedString';

const LazyPlaceholder = ({route}) => (
  <View style={styles.lazyPlaceholder}>
    <Text>
      {localizedStrings.history.loading} {route.title}…
    </Text>
  </View>
);

class BatterMe extends Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: `${localizedStrings.history.received}`},
      {key: 'second', title: `${localizedStrings.history.sent}`},
    ],
  };

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
          </Text>
        )}
      />
    );
  };

  render() {
    return (
      <Container
        testID="eventsTabScreen"
        style={{backgroundColor: Color.WHITE}}>
        <TabView
          testID="eventsTab"
          lazy
          navigationState={this.state}
          renderScene={SceneMap({
            first: Received,
            second: Sent,
          })}
          renderLazyPlaceholder={this._renderLazyPlaceholder}
          onIndexChange={this._handleIndexChange}
          initialLayout={{width: Dimensions.get('window').width}}
          renderTabBar={props => this._renderTabbar(props)}
        />
      </Container>
    );
  }
}

export default BatterMe;
