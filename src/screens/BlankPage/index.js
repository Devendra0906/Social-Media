import React, {Component} from 'react';
import DeviceInfo from 'react-native-device-info';
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Title,
} from 'native-base';

class BlankPage extends Component {
  render() {
    const navigation = this.props.navigation;
    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }
    return (
      <Container style={{backgroundColor: '#fff'}}>
        <Header style={headerStyle}>
          <Left>
            <Button
              transparent
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              onPress={() => navigation.goBack()}>
              <Icon
                type="Ionicons"
                name="ios-arrow-back"
                style={{color: '#000'}}
              />
            </Button>
          </Left>
          <Body>
            <Title style={{color: '#000'}}>BlankPage</Title>
          </Body>
          <Right>
            <Button
              transparent
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="menu" style={{color: '#000'}} />
            </Button>
          </Right>
        </Header>
        <Content />
      </Container>
    );
  }
}

export default BlankPage;
