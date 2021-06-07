import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import {Container} from 'native-base';
import {connect} from 'react-redux';

import {
  didUpdateCardDescription,
  didUpdateCardOption1,
  didUpdateCardOption2,
  didUpdateCardReason,
} from './../../../actions';
import styles from './styles';
import Color from '../../../Helper/Color';
import localizedStrings from '../../../Helper/LocalisedString';

class CreateCardReason extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container testID="feed" style={{backgroundColor: Color.WHITE}}>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder={localizedStrings.createCardReason.createardReason}
            placeholderTextColor="#bbb"
            value={this.props.reason}
            onChangeText={text => this.props.updateCardReason(text)}
          />
          <View style={{flexDirection: 'row', marginVertical: 15}}>
            <TextInput
              style={[{flex: 1}, styles.textInput]}
              placeholder={localizedStrings.createCardReason.ansYes}
              placeholderTextColor="#bbb"
              value={this.props.option1}
              onChangeText={text => this.props.updateCardOption1(text)}
            />
            <TextInput
              style={[{marginLeft: 15, flex: 1}, styles.textInput]}
              placeholder={localizedStrings.createCardReason.ansNo}
              placeholderTextColor="#bbb"
              value={this.props.option2}
              onChangeText={text => this.props.updateCardOption2(text)}
            />
          </View>

          <TextInput
            style={[{height: 80}, styles.textInput]}
            placeholder={localizedStrings.createCardReason.giveMoreDetails}
            placeholderTextColor="#bbb"
            multiline={true}
            value={this.props.description}
            onChangeText={text => this.props.updateCardDescription(text)}
          />
        </View>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    updateCardDescription: description =>
      dispatch(didUpdateCardDescription(description)),
    updateCardOption1: option1 => dispatch(didUpdateCardOption1(option1)),
    updateCardOption2: option2 => dispatch(didUpdateCardOption2(option2)),
    updateCardReason: reason => dispatch(didUpdateCardReason(reason)),
  };
}

const mapStateToProps = state => {
  return {
    reason: state.takePartReducer.reason,
    option1: state.takePartReducer.option1,
    option2: state.takePartReducer.option2,
    description: state.takePartReducer.description,
  };
};

export default connect(
  mapStateToProps,
  bindAction,
)(CreateCardReason);
