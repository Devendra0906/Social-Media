import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal
} from 'react-native'
import { Button } from 'react-native-elements';
import styles from './styles';

class FilterAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentWillUpdate(newProps) {
    if (newProps.visible !== this.props.visible) {
      this.setState({ show: newProps.visible })
    }
  }

  render() {
    return (
      <Modal
        visible={this.state.show}
        transparent={true}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={styles.modalContainer}>
          {/* <ScrollView contentContainerStyle={styles.modalContainer}> */}
          <View style={styles.modalViewContainer}>
            <View style={styles.modalHeaderContainer}>
              <TouchableOpacity
                style={[styles.backButtonContainer, { left: 15 }]}
                hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
                onPress={() => {
                  this.props.onPressBack()
                }}>
                <Text style={[styles.headerTitle, { fontSize: 12 }]}>
                  Back
						  </Text>
              </TouchableOpacity>
              <Text style={styles.headerTitle}>
                Filter
						    </Text>
              <TouchableOpacity
                style={[styles.backButtonContainer, { right: 15 }]}
                hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
                onPress={() => {
                  this.props.onPressReset()
                }}>
                <Text style={[styles.headerTitle, { fontSize: 12 }]}>
                  Reset
						  </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputFieldContainer}>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.inputFieldTitle}>
                  LOCATION
                  </Text>
                <TextInput
                  placeholder='Please Select...'
                  placeholderTextColor='#999'
                  style={styles.inputField}
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.inputFieldTitle}>
                  GENDER
                  </Text>
                <TextInput
                  placeholder='Please Select...'
                  placeholderTextColor='#999'
                  style={styles.inputField}
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.inputFieldTitle}>
                  JOB ROLE
                  </Text>
                <TextInput
                  placeholder='Please Select...'
                  placeholderTextColor='#999'
                  style={styles.inputField}
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.inputFieldTitle}>
                  LANGUAGE
                  </Text>
                <TextInput
                  placeholder='Please Select...'
                  placeholderTextColor='#999'
                  style={styles.inputField}
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.inputFieldTitle}>
                  NATIONALITY
                  </Text>
                <TextInput
                  placeholder='Please Select...'
                  placeholderTextColor='#999'
                  style={styles.inputField}
                />
              </View>
            </View>
            <Button
              containerStyle={{ margin: 10 }}
              buttonStyle={{ backgroundColor: '#000' }}
              titleStyle={styles.searchButtonText}
              title={'SEARCH'}
              onPress={() => {
                this.props.onPressReset()
              }}
            />
          </View>
          {/* </ScrollView> */}
        </KeyboardAvoidingView>
      </Modal>
    )
  }
}

export default FilterAlert;