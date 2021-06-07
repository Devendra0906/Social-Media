import React, { Component } from 'react';
import { Image, View, TouchableOpacity, TextInput, Text, FlatList, Modal, SafeAreaView } from "react-native";
import DeviceInfo from 'react-native-device-info';
import { Header } from 'react-native-elements';
import { Container, Content, Icon } from "native-base";
import styles from "./styles";
import Color from '../../../Helper/Color';

export default class Connections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 0,
      showFilterModal: false
    };
  }

  renderConnectionListItem = ({ item, index }) => {
    return (
      <View style={{ flexDirection: 'row', marginHorizontal: 15, paddingVertical: 8 }}>
        <Image source={require('../../../../assets/images/contacts/hulk.jpg')} style={{ height: 40, width: 40, borderRadius: 20 }} />
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#000' }}
            numberOfLines={2}>
            Darshit Zalavadiya
          </Text>
          <Text style={{ fontSize: 12, color: '#666', marginTop: 4 }}
            numberOfLines={2}>
            Mobile Application Developer
          </Text>
          <Text style={{ fontSize: 12, color: '#666', marginTop: 4 }}>
            Connected 4 days ago
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image source={require('../../../../assets/images/removeUser.png')} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../../../assets/images/message.png')} style={{ height: 20, width: 20, marginLeft: 10 }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    const navigation = this.props.navigation;
    let headerStyle = { height: 64, paddingTop: 20 }
    if (DeviceInfo.hasNotch()) {
      headerStyle = { height: 85, paddingTop: 35 }
    }

    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header
          containerStyle={[{
            backgroundColor: '#fff',
            paddingTop: 0,
            elevation: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 2,
            shadowOpacity: 0.1,
            shadowColor: '#000',
            marginBottom: 5
          }, headerStyle]}
          leftComponent={(
            <TouchableOpacity
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              testID="sideMenuButton"
              onPress={() => navigation.goBack()}
            >
              <Icon type='Ionicons' name="chevron-back-outline" style={{ color: Color.BLACK }} />
            </TouchableOpacity>)}
          centerComponent={{ text: 'Connections', style: { color: '#000', fontSize: 17, fontWeight: 'bold' } }}
        />
        <View style={{ padding: 15, borderBottomColor: '#ddd', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 15, color: '#000' }}>
            33 Connections
          </Text>
          <TouchableOpacity onPress={() => this.setState({ showFilterModal: true })}>
            <Icon type='Octicons' name={'settings'} style={{ fontSize: 20 }} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7]}
          contentContainerStyle={{ paddingTop: 10, paddingBottom: 20 }}
          renderItem={this.renderConnectionListItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, marginHorizontal: 0, backgroundColor: '#ddd' }} />
          )}
        />
        {this.renderFilterModal()}
      </Container>
    );
  }

  renderFilterModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.showFilterModal}
      >
        <TouchableOpacity activeOpacity={1.0} style={styles.filterContainer} onPress={() => this.setState({ showFilterModal: false })}>
          <View>
            <View style={styles.filterContentContainer}>
              <View style={styles.shape} />
              <View style={styles.headerContainer}>
                <View style={styles.container} />
                <Text style={styles.modalTitle} >
                  Sort By
              </Text>
                <TouchableOpacity style={[styles.container, { alignItems: 'flex-end' }]}>
                  <Text style={styles.resetTitle}>
                    Reset
                </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.filterContent}>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
              <TouchableOpacity style={[styles.sortOptions, this.state.selectedFilter == 0 ? styles.selectedFilter : {}]} onPress={() => this.setState({ selectedFilter: 0 })}>
                <Text style={[styles.sortTitles, { color: this.state.selectedFilter == 0 ? Color.WHITE : Color.BLACK }]}>
                  Recently added
              </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.sortOptions, this.state.selectedFilter == 1 ? styles.selectedFilter : {}]} onPress={() => this.setState({ selectedFilter: 1 })}>
                <Text style={[styles.sortTitles, { color: this.state.selectedFilter == 1 ? Color.WHITE : Color.BLACK }]}>
                  First name
              </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.sortOptions, this.state.selectedFilter == 2 ? styles.selectedFilter : {}]} onPress={() => this.setState({ selectedFilter: 2 })}>
                <Text style={[styles.sortTitles, { color: this.state.selectedFilter == 2 ? Color.WHITE : Color.BLACK }]}>
                  Last name
              </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.showResultButton}>
              <Text style={styles.showResult}>
                Show Results
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <SafeAreaView style={{ backgroundColor: Color.WHITE }} />
      </Modal>
    )
  }
}
