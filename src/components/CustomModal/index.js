import React, { Component } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
// import strings from '../../utils/LocalizedStrings';

export default class CustomModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: props.visible,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible != nextProps.visible) {
      this.setState({ visible: nextProps.visible });
    }
  }

  handleCloseModal = () => {
    if (this.props.onClose) this.props.onClose();
  };

  render() {
    const {
      visible,
      children,
      headerTitle,
      showCloseButton
    } = this.props;
    return (
      <Modal animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          this.handleCloseModal()
        }}>
        <View style={styles.modalBackground}>
          <TouchableOpacity style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
            onPress={() => this.handleCloseModal()} />
          <View style={styles.contentOuter}>
            {headerTitle && <Text style={styles.headerTitle}>{headerTitle}</Text>}
            {children}
            {showCloseButton && <TouchableOpacity
              style={styles.closeButtonContainer}
              onPress={() => this.handleCloseModal()}>
              <Text style={styles.closrButtonText}>
                CLOSE
              </Text>
            </TouchableOpacity>}
          </View>
        </View>
      </Modal>
    );
  }
}

CustomModal.propTypes = {
  visible: PropTypes.bool,
  headerTitle: PropTypes.string,
  showCloseButton: PropTypes.bool
};

CustomModal.defaultProps = {
  visible: false,
  showCloseButton: true,
  headerTitle: null
};