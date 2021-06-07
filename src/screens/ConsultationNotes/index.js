// Global imports
import React, {Component} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  Modal,
  SectionList,
} from 'react-native';
import Switch from 'react-native-switch-pro';
import {Header} from 'react-native-elements';
import {Icon} from 'native-base';

// File imports
import styles from './styles';
import {headerMarginTop} from '../../Helper/Constants';
import localizedStrings from '../../Helper/LocalisedString';

// Image imports
import imgdelt from '../../../assets/images/delete.png';
import imgBack from '../../../assets/images/back.png';
import imgAdd from '../../../assets/images/plus.png';
import profileImg from '../../../assets/images/batman.jpg';
import imgFilter from '../../../assets/images/filter.png';
import Color from '../../Helper/Color';
import {connect} from 'react-redux';
import {fetchNotes, deleteNotes} from '../../__Redux/__actions/notesActions';

const DATA = [
  {
    title: '18 Aug 2020',
    data: [
      {
        appointmentType: 'Clinic Consultation',
        place: 'Patel Darshit',
        doctor: 'Dr. Patel Darshit',
        time: '06:30 pm IST',
      },
    ],
  },
  {
    title: '12 Aug 2020',
    data: [
      {
        appointmentType: 'Clinic Consultation',
        place: 'Patel Darshit',
        doctor: 'Dr. Patel Darshit',
        time: '09:30 am IST',
      },
      {
        appointmentType: 'Video Consultation',
        place: 'Patel Darshit',
        doctor: 'Dr. Patel Darshit',
        time: '08:30 pm IST',
      },
    ],
  },
];

class ConsultationNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenMonitoringPlanningModal: false,
    };
  }
  componentDidMount() {
    this.props.getNotes();
    // console.log('NOTES', this.props.state.notesReducer.items);
    // var Data1 = [];
    // var temp = this.props.state.notesReducer.items;
    // temp.forEach(i => {
    //   let a = {};
    //   var d = new Date(i.DateTime_Consultation);
    //   a.appointmentType = i.Review_notes;
    //   a.place = i.Location[0].location_name;
    //   a.doctor = 'Dr. Patel Darshit';
    //   a.time = d.getHours() + ':' + d.getMinutes();
    //   Data1.push({
    //     title: i.DateTime_Consultation,
    //     data: a,
    //   });
    // });
    // console.log('sample', Data1);
  }

  render() {
    return this.renderMainVIew();
  }

  keyExtractor = (item, index) => index.toString();

  renderMainVIew = () => {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderPatientDetails()}
        {this.renedrFilterView()}
        {this.renderConsultationContent()}
        {this.renderSelectmonitoringPlanModal()}
      </View>
    );
  };

  renderHeader = () => {
    return (
      <Header
        testID="ConHeader"
        containerStyle={{
          backgroundColor: Color.WHITE,
          marginTop: headerMarginTop,
          borderBottomWidth: 0,
        }}
        leftComponent={this.renderLeftHeader()}
        centerComponent={this.renderCenterHeader()}
        rightComponent={this.renderRightHeader()}
      />
    );
  };

  renderLeftHeader = () => {
    return (
      <TouchableOpacity
        testID="ConbackBtn"
        onPress={() => {
          this.props.navigation.goBack();
        }}>
        <Image source={imgBack} style={styles.btnMenu} />
      </TouchableOpacity>
    );
  };

  renderCenterHeader = () => {
    return (
      <Text testID="ConCenterHeader" style={styles.headerText}>
        {localizedStrings.consultationNotes.consultationNotes}
      </Text>
    );
  };

  renderRightHeader = () => {
    return (
      <TouchableOpacity
        testID="ConRightHeader"
        style={{marginRight: 8}}
        onPress={() => this.props.navigation.navigate('AddConsultationNote')}>
        <Image source={imgAdd} style={styles.btnMenu} resizeMode="contain" />
      </TouchableOpacity>
    );
  };

  renderPatientDetails = () => {
    return (
      <View
        testID="patientDetails"
        style={{
          flexDirection: 'row',
          marginTop: 15,
          paddingHorizontal: 15,
          alignItems: 'center',
          backgroundColor: 'rgb(59,63,76)',
        }}>
        <Image
          source={profileImg}
          style={{height: 70, width: 70, borderRadius: 35}}
        />
        <View style={{marginHorizontal: 8, flex: 1}}>
          <Text style={{color: Color.WHITE}}>Josefine heinz</Text>
          <Text style={{color: Color.WHITE}}>32 Years, Female, AB+ve</Text>
        </View>
        <View style={{paddingTop: 5}}>
          <View style={{alignItems: 'flex-end'}}>
            <Switch style={{marginTop: 8}} />
            <Text style={{color: Color.WHITE, marginVertical: 5}}>
              {localizedStrings.consultationNotes.enabled}
            </Text>
          </View>
          <TouchableOpacity style={{marginBottom: 8}}>
            <Icon
              name={'edit-2'}
              type="Feather"
              style={[
                {fontSize: 20, color: Color.WHITE, alignSelf: 'flex-end'},
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renedrFilterView() {
    return (
      <View
        testID="FilterNotes"
        style={{
          marginHorizontal: 0,
          borderBottomColor: Color.LIGHT_GREY,
          borderBottomWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 5,
          paddingHorizontal: 15,
        }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text testID="ShowingText" style={{fontSize: 16}}>
            {localizedStrings.consultationNotes.showing}
          </Text>
          <Text testID="allConsultation" style={{fontSize: 14, marginLeft: 5}}>
            {localizedStrings.consultationNotes.allConsultations}
          </Text>
        </View>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() =>
            this.props.navigation.navigate('FilterConsultationNotes')
          }>
          <Image
            source={imgFilter}
            style={{height: 25, width: 25, tintColor: Color.GREY}}
          />
          <Text
            testID="filterText"
            style={{fontSize: 12, marginLeft: 5, color: Color.GREY}}>
            {localizedStrings.consultationNotes.filter}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderConsultationContent = () => {
    var Data1 = [];
    var temp = this.props.state.notesReducer.items;
    // console.log(temp[0].Location[0].location_name);
    temp.forEach(i => {
      let a = {};
      var d = new Date(i.DateTime_Consultation);
      a.appointmentType = i.Review_notes;
      a.place = i.Location[0].location_name;
      a.doctor = 'Dr. Patel Darshit';
      a.time = d.getHours() + ':' + d.getMinutes();
      a.id = i.id;
      a.name = i.Patient_firstname + ' ' + i.Patient_lastname;
      a.dob = i.DOB;
      Data1.push({
        title: i.DateTime_Consultation,
        data: [a],
      });
    });
    return DATA.length == 0
      ? this.renderEmptyConsultation()
      : this.renderConsultationList(Data1);
  };

  renderConsultationList = DATA => {
    // const DATA = this.props.Data1;
    console.log('DATA111', DATA[0]);
    return (
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index.toString()}
        stickySectionHeadersEnabled
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              testID="consultationNotesDetails"
              style={{margin: 10, flexDirection: 'row'}}
              onPress={() =>
                this.props.navigation.navigate('ConsultationNotesDetails', {
                  PatientData: item,
                })
              }>
              <Icon
                name={'hospital-o'}
                type="FontAwesome"
                style={{fontSize: 30}}
              />
              <View style={{marginHorizontal: 10, flex: 1}}>
                <Text style={{fontSize: 16, color: Color.BLACK}}>
                  {item.appointmentType}
                </Text>
                <Text
                  style={{fontSize: 14, color: Color.GREY, marginVertical: 5}}>
                  @{item.place}
                </Text>
                <Text style={{fontSize: 14, color: Color.GREY}}>
                  {item.doctor} @ {item.time}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 28,
                  width: 28,
                  borderRadius: 14,
                }}
                onPress={() => {
                  console.log('pressed', item.id);
                  this.props.deleteNote(item.id);
                  this.props.getNotes();
                }}>
                <Image
                  source={imgdelt}
                  style={[{margin: 0, height: 15, width: 15}]}
                />
              </TouchableOpacity>
              <Icon
                name={'chevron-thin-right'}
                type="Entypo"
                style={{fontSize: 20, color: Color.LIGHT_GREY}}
              />
            </TouchableOpacity>
          );
        }}
        renderSectionHeader={({section: {title}}) => (
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: Color.WHITE,
            }}>
            <Text style={{fontSize: 18, color: Color.BLUE}}>{title}</Text>
          </View>
        )}
      />
    );
  };

  renderEmptyConsultation() {
    return (
      <View style={styles.emptycontainer}>
        <Image
          source={require('../../../assets/images/stethoscope_big.png')}
          style={{height: 150, width: 150}}
        />
        <Text testID="introText" style={styles.introText}>
          {localizedStrings.consultationNotes.introText}
        </Text>
        <TouchableOpacity
          style={styles.btnAddNew}
          onPress={() => {
            this.props.navigation.navigate('AddConsultationNote');
          }}>
          <Text
            testID="logConsultation"
            style={{fontSize: 17, color: Color.WHITE, fontWeight: '600'}}>
            {localizedStrings.consultationNotes.logConsultation}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderSelectmonitoringPlanModal = () => {
    const {isOpenMonitoringPlanningModal} = this.state;
    return (
      <Modal
        animationType="fade"
        transparent
        visible={isOpenMonitoringPlanningModal}
        supportedOrientations={['portrait', 'landscape']}
        onRequestClose={() => handleBack()}>
        <View style={styles.modelStyle1}>
          <View style={styles.modelStyle2}>
            <View style={styles.modalHeader}>
              <Text style={styles.titleModal}>
                {localizedStrings.consultationNotes.selectMonitoringPlanning}
              </Text>
              <Icon
                name="close"
                type="MaterialCommunityIcons"
                style={{fontSize: 25, color: '#fff', marginRight: 10}}
                onPress={() =>
                  this.setState({isOpenMonitoringPlanningModal: false})
                }
              />
            </View>
            <View style={{height: 250, justifyContent: 'center'}}>
              <Text style={{marginHorizontal: 10, textAlign: 'center'}}>
                {localizedStrings.consultationNotes.allMonitoring}
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
}

// export default ConsultationNotes;
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getNotes: () => {
      dispatch(fetchNotes());
    },
    deleteNote: id => {
      dispatch(deleteNotes(id));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConsultationNotes);
