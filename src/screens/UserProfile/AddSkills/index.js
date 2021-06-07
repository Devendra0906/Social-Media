import React, {Component} from 'react';
import {View, TouchableOpacity, TextInput, Text, FlatList} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Container, Icon, Content} from 'native-base';
import {Header} from 'react-native-elements';

import styles from './styles';
import data from './data';
import Color from '../../../Helper/Color';
import {AddPublicationData} from '../../../__Redux/__actions/profileActions';
import {connect} from 'react-redux';
import {Alert} from 'react-native';
class AddSkills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillText: '',
      selectedSkills: [],
      filteredSkills: [],
    };
  }
  updateToDB() {
    const pub = {
      title: this.state.title,
      publication: this.state.publication,
      date: this.state.startDate,
      authors: this.state.authors,
      url: this.state.publicationURL,
      description: this.state.desription,
    };

    // console.log(exp);
    this.props.postData(pub);
    Alert.alert('Publication Added Successfully');
    this.props.navigation.goBack();
  }
  renderSkillListItem = ({item}) => {
    const {selectedSkills} = this.state;
    const contain = selectedSkills.includes(item.name);
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => {
          debugger;
          let selected = [...selectedSkills];
          let i = selected.indexOf(item.name);
          if (i !== -1) {
            let newList = selected.splice(i, 1);
          } else {
            selected.push(item.name);
          }
          this.setState({
            selectedSkills: selected,
            filteredSkills: [],
            skillText: '',
          });
        }}>
        <Text>{item.name}</Text>
        {contain && (
          <Icon
            name="check"
            type="AntDesign"
            style={{fontSize: 20, color: '#000'}}
          />
        )}
      </TouchableOpacity>
    );
  };

  render() {
    const navigation = this.props.navigation;
    const {skillText, selectedSkills, filteredSkills} = this.state;
    let headerStyle = {height: 64, paddingTop: 20};
    if (DeviceInfo.hasNotch()) {
      headerStyle = {height: 85, paddingTop: 35};
    }

    let pageTitle = 'Add Skills';
    return (
      <Container style={{flex: 1, backgroundColor: Color.WHITE}}>
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
              testID="sideMenuButton"
              hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              onPress={() => navigation.goBack()}>
              <Icon
                type="Ionicons"
                name="ios-arrow-back"
                style={{color: '#000'}}
              />
            </TouchableOpacity>
          }
          centerComponent={{
            text: pageTitle,
            style: {color: '#000', fontSize: 17, fontWeight: 'bold'},
          }}
        />
        <View style={styles.contentContainer}>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Skill (ex. Data Analysia)"
              placeholderTextColor="#666"
              style={styles.textInput}
              value={skillText}
              onChangeText={text => {
                if (text.length > 0) {
                  const filtered = data.filter(value => {
                    return value.name.includes(text);
                  });
                  this.setState({filteredSkills: filtered, skillText: text});
                } else {
                  this.setState({filteredSkills: [], skillText: text});
                }
              }}
            />
          </View>
          <Text style={styles.remainingSkillsCount}>
            You can add {50 - selectedSkills.length} more skills
          </Text>
        </View>
        <View style={styles.skillsContainer}>
          <View style={styles.tagsContainer}>
            {selectedSkills.map((value, index) => {
              console.log(index);
              return (
                <View style={styles.tagTextContainer} key={index}>
                  <Text style={{color: '#000'}}>{value}</Text>
                  <Icon
                    name="close"
                    type="AntDesign"
                    style={styles.closeContainer}
                    onPress={() => {
                      let selected = [...selectedSkills];
                      let newList = selected.splice(index, 1);
                      this.setState({selectedSkills: selected});
                    }}
                  />
                </View>
              );
            })}
          </View>
          <TouchableOpacity
            style={styles.saveContainer}
            onPress={() => navigation.goBack()}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
          {filteredSkills.length > 0 && (
            <FlatList
              data={filteredSkills}
              style={styles.skillsList}
              renderItem={this.renderSkillListItem}
              ItemSeparatorComponent={() => {
                return <View style={styles.separator} />;
              }}
              extraData={selectedSkills}
            />
          )}
        </View>
      </Container>
    );
  }
}

// export default AddSkills;
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postData: pub => {
      dispatch(AddPublicationData(pub));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddSkills);
