import React, { Component } from 'react';
import {
  Text, TouchableOpacity, View, Modal, Image,
  ScrollView, TextInput, FlatList
} from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';

import Country from './country';
import Flags from './resources/flags';
import styles from './styles';
// import Fonts from '../Fonts';

// import COLORS from '../../Helper/Color'

const KEYS_TO_FILTERS = ['name']

export default class CountryPicker extends Component {

  state = {
    searchTerm: ''
  }

  renderItem = ({ item, index }) => {
    // console.log(object)
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          this.props.selectCountry(item)
          this.setState({ searchTerm: '' })
        }}
        style={{ flex: 1, borderBottomColor: '#EEE', borderBottomWidth: 1, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10 }}>
        <Image source={Flags.get(item.iso2)} style={{ width: 40, height: 30 }} />
        <Text style={{ width: '100%', fontSize: 18, marginLeft: 20, marginTop: 5 }}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  render() {

    const filteredCountries = Country.getAll().filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <Modal
        animationType="slide"
        transparent
        visible={this.props.close}
        onRequestClose={() => {
          this.props.onClose();
        }}
      >
        <View style={styles.basicContainer}>
          <View
            style={{ marginTop: 50, flex: 1 }}
          >
            <View style={[{ flexDirection: 'row', marginBottom: 15, width: '100%' }]}>
              <TextInput
                autoFocus
                placeholderTextColor='#000'
                placeholder="Search Country Name"
                selectionColor='black'
                style={[styles.countryInfo, { flex: 1, marginHorizontal: 10 }]}
                onChangeText={(term) => { this.searchUpdated(term) }}
              />
            </View>
            <ScrollView keyboardShouldPersistTaps='always' style={styles.mainBox}>
              <FlatList
                style={styles.flatListStyle}
                contentContainerStyle={{ paddingBottom: 25, paddingTop: 15 }}
                keyExtractor={this.keyExtractor}
                ItemSeparatorComponent={() => {
                  return <View style={{ width: '100%', height: 0.5, backgroundColor: 'lightgray', }} />
                }}
                data={filteredCountries}
                renderItem={this.renderItem}
              />
              {filteredCountries.length == 0 &&
                <Text
                  style={{
                    width: '100%',
                    fontSize: 20,
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontWeight: '600'
                  }}>No result found</Text>}
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  }
}
