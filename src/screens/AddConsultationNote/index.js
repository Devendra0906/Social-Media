// Global imports
import React, {Component} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  SafeAreaView,
  Modal,
} from 'react-native';
import {Header} from 'react-native-elements';
import {Icon} from 'native-base';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';
import Switch from 'react-native-switch-pro';
import ImagePicker from 'react-native-image-picker';
import moment from 'moment';

// File imports
import styles from './styles';
import {headerMarginTop} from '../../Helper/Constants';
import Color from '../../Helper/Color';

// Image imports
import imgBack from '../../../assets/images/back.png';
import imgAdd from '../../../assets/images/plus.png';
import profileImg from '../../../assets/images/batman.jpg';
import imgCalendar from '../../../assets/images/calendar.png';
import imgAttachment from '../../../assets/images/attachment.png';
import imgPill from '../../../assets/images/pill.png';
import {setNote} from '../../__Redux/__actions/notesActions';
import {connect, useDispatch} from 'react-redux';

const associateAppt = [
  {label: 'No appointments selected', value: 'No appointments selected'},
  {
    label: 'Clinic Consultation 06 August 2020, Tuesday 04:15 PM',
    value: 'Clinic Consultation 06 August 2020, Tuesday 04:15 PM',
  },
];

const medicineList = [{name: 'PCM 20 mg', img: imgPill}];

class AddConsultationNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      consultationDate: new Date(),
      showDatePicker: false,
      selectedAppt: 'No appointments selected',
      selectedImages: [],
      prescribeMedicineList: medicineList,
      isOpenPrescribeMedicineModal: false,
      DateTime_Consultation: Date(),
      Consultation_Reason: '',
      Review_notes: '',
      Visible_status: false,
      Attachment: '',
    };
  }
  updateToDB = () => {
    const note = {
      id: Math.random()
        .toString(36)
        .slice(2),
      Patientcategory: [
        {
          id: Math.random()
            .toString(36)
            .slice(2),
          drname: 'Dr. Darshit Zalavadiya',
        },
      ],
      ConsultationType: [
        {
          id: Math.random()
            .toString(36)
            .slice(2),
          type: 'Video',
        },
      ],
      Location: [
        {
          id: Math.random()
            .toString(36)
            .slice(2),
          location_name: 'Dr Kevin hospital',
        },
      ],
      Patient_firstname: 'rahul',
      Patient_lastname: 'poonavala',
      DOB: 0,
      At: 'NA',
      Email: 'rah@dsom.com',
      PhoneNo: 123928432,
      RecordNo: 31232,
      AssociatedAppointment: 980,
      DateTime_Consultation: this.state.consultationDate,
      Consultation_Reason: this.state.Consultation_Reason,
      Review_notes: this.state.Review_notes,
      Visible_status: this.state.Visible_status,
      Attachment: this.state.Attachment,
    };
    // console.log(note);
    this.props.postData(note);
    // console.log('success');
  };
  hideDatePicker = () => {
    this.setState({showDatePicker: false});
  };

  handleConfirm = date => {
    this.setState({consultationDate: date});
    this.hideDatePicker();
  };

  _onPressDatePicker = () => {
    this.setState({showDatePicker: true});
  };

  openImagePicker = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'mixed',
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let images = [...this.state.selectedImages];
        images.push(response.uri);
        this.setState({selectedImages: images});
      }
    });
  };

  onPressDeleteImage = index => {
    let images = [...this.state.selectedImages];
    let filteredImage = images.filter((image, idx) => idx != index);
    this.setState({selectedImages: filteredImage});
  };

  render() {
    return this.renderMainVIew();
  }

  keyExtractor = (item, index) => index.toString();

  renderMainVIew = () => {
    return (
      <View testID="acnMainView" style={styles.container}>
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderSaveButton()}
        {this.renderPrescribeMedicineModal()}
        <DateTimePickerModal
          isVisible={this.state.showDatePicker}
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
          date={this.state.consultationDate}
          mode="datetime"
        />
      </View>
    );
  };

  renderHeader = () => {
    return (
      <Header
        testID="acnHeader"
        containerStyle={{
          backgroundColor: Color.WHITE,
          marginTop: headerMarginTop,
          borderBottomWidth: 0,
        }}
        leftComponent={this.renderLeftHeader()}
        centerComponent={this.renderCenterHeader()}
      />
    );
  };

  renderLeftHeader = () => {
    return (
      <TouchableOpacity
        testID="acnLeftHeader"
        onPress={() => {
          this.props.navigation.goBack();
        }}>
        <Image source={imgBack} style={styles.btnMenu} />
      </TouchableOpacity>
    );
  };

  renderCenterHeader = () => {
    return (
      <Text testID="acnCenterHeader" style={styles.headerText}>
        Consultation Notes
      </Text>
    );
  };

  renderRightHeader = () => {
    return (
      <TouchableOpacity testID="acnRightHeader" style={{marginRight: 8}}>
        <Image source={imgAdd} style={styles.btnMenu} resizeMode="contain" />
      </TouchableOpacity>
    );
  };

  renderContent() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{paddingBottom: 20}}>
        {this.renderDoctorDetails()}
        {this.renderPatientDetails()}
        {this.renderConsultationDateTime()}
        {this.renderAssociateAppointment()}
        {this.renderConsultationReason()}
        {this.renderReviewNotes()}
        {this.renderVisibleSwitch()}
        {this.renderAttachments()}
        {this.renderPrescriptionList()}
        {this.renderGoalList()}
        {this.renderMonitorPlanList()}
        {this.renderNextAppointmentList()}
        {this.renderBillingList()}
        {this.renderNotifySwitch()}
        {this.renderNote()}
      </ScrollView>
    );
  }

  renderDoctorDetails = () => {
    return (
      <View
        testID="acnDoctorDetails"
        style={{
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
          backgroundColor: 'rgb(59,63,76)',
          paddingVertical: 8,
        }}>
        <Icon
          type="FontAwesome"
          name="hospital-o"
          style={{height: 35, width: 35, color: '#fff'}}
        />
        <View style={{marginHorizontal: 8, flex: 1}}>
          <Text style={{color: Color.WHITE, fontSize: 18}}>
            Dr. Darshit Zalavadiya
          </Text>
          <Text style={{color: Color.WHITE, fontSize: 14}}>
            Clinic Consultation, Darshit Clinic
          </Text>
        </View>
        <View style={{paddingTop: 5}}>
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

  renderPatientDetails = () => {
    return (
      <View
        testID="acnPatientDetails"
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 15,
          paddingVertical: 10,
          borderBottomColor: Color.LIGHT_GREY,
          borderBottomWidth: 1,
        }}>
        <Image
          source={profileImg}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
        <View style={{marginHorizontal: 8, flex: 1}}>
          <Text style={{color: Color.BLACK, fontSize: 16}}>Josefine heinz</Text>
          <Text style={{color: Color.BLACK}}>32 Years, Male, AB+ve</Text>
        </View>
        <View style={{paddingTop: 5}}>
          <TouchableOpacity>
            <Icon
              name={'chevron-thin-right'}
              type="Entypo"
              style={[{fontSize: 20, color: Color.LIGHT_GREY}]}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderConsultationDateTime() {
    const {consultationDate} = this.state;
    return (
      <View testID="ConsultationDateTime" style={styles.dropdownContainer}>
        <Text style={styles.dropdownTitle}>{'Consultation Date & Time'}</Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            borderBottomColor: Color.BLACK,
            borderBottomWidth: 0.5,
            paddingVertical: 7,
          }}
          onPress={() => this._onPressDatePicker()}>
          <TextInput
            placeholder=""
            value={moment(consultationDate).format('MMM DD, YYYY hh:mm A ')}
            onChangeText={text => this.setState({consultationDate: text})}
            style={{flex: 1, paddingRight: 22, fontSize: 15}}
            editable={true}
            pointerEvents="none"
          />
          <Image
            source={imgCalendar}
            style={{
              tintColor: Color.BLUE,
              height: 20,
              width: 20,
              alignSelf: 'center',
              marginTop: 0,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  renderAssociateAppointment() {
    return (
      <View testID="AssociateAppointment" style={styles.dropdownContainer}>
        <Text style={styles.dropdownTitle}>Associated Appointment</Text>
        {moment(this.state.consultationDate).format('DD-MM-YYYY') ==
        moment().format('DD-MM-YYYY') ? (
          <Text
            style={[
              styles.dropdownTitle,
              {marginLeft: 10, color: Color.BLACK, marginTop: 10},
            ]}>
            No associated appointments for selected date
          </Text>
        ) : (
          <View
            style={{
              marginTop: 10,
              borderBottomWidth: 1,
              borderBottomColor: Color.LIGHT_GREY,
              paddingVertical: 5,
            }}>
            <RNPickerSelect
              onValueChange={value => this.setState({selectedAppt: value})}
              value={this.state.selectedAppt}
              placeholder={{}}
              items={associateAppt}
              textInputProps={{
                color: Color.BLACK,
                fontSize: 16,
                paddingRight: 25,
              }}
              Icon={() => (
                <Icon
                  name={'chevron-thin-down'}
                  type="Entypo"
                  style={[{fontSize: 20, color: Color.LIGHT_GREY}]}
                />
              )}
            />
          </View>
        )}
      </View>
    );
  }

  renderConsultationReason() {
    const {Consultation_Reason} = this.state;
    return (
      <View testID="ConsultationReason" style={styles.dropdownContainer}>
        <Text testID="ConsultationReasonHead" style={styles.dropdownTitle}>
          {'Reason for Consultation'}
        </Text>
        <TextInput
          placeholder="Tell Reason"
          value={Consultation_Reason}
          keyboardType="email-address"
          onChangeText={text => this.setState({Consultation_Reason: text})}
          style={{
            fontSize: 15,
            marginTop: 10,
            borderBottomColor: Color.BLACK,
            borderBottomWidth: 0.5,
            height: 35,
          }}
        />
      </View>
    );
  }

  renderReviewNotes() {
    const {Review_notes} = this.state;

    return (
      <View testID="ReviewNotes" style={styles.dropdownContainer}>
        <Text testID="ReviewNotesHead" style={styles.dropdownTitle}>
          {'Review Note'}
        </Text>
        <TextInput
          placeholder="Enter Note"
          value={Review_notes}
          onChangeText={text => this.setState({Review_notes: text})}
          style={{
            fontSize: 15,
            marginTop: 10,
            borderBottomColor: Color.BLACK,
            borderBottomWidth: 0.5,
            height: 70,
          }}
          multiline
        />
      </View>
    );
  }

  renderVisibleSwitch() {
    const {Visible_status} = this.state;
    return (
      <View
        style={[
          styles.dropdownContainer,
          {flexDirection: 'row', alignItems: 'center'},
        ]}>
        <Switch
          value={Visible_status}
          keyboardType="email-address"
          onValueChange={Visible_status}
          style={{marginVertical: 10, marginRight: 10}}
        />
        <Text style={styles.dropdownTitle}>{'Visible to Patient'}</Text>
      </View>
    );
  }

  renderAttachments = () => {
    return (
      <View testID="Attachments" style={{marginTop: 20, marginHorizontal: 20}}>
        <Text testID="AttachmentsText" style={styles.dropdownTitle}>
          Add Attchments[Max size 5MB per file]
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <TouchableOpacity
            onPress={this.openImagePicker}
            style={{
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Image
              source={imgAttachment}
              style={{tintColor: 'rgb(72,166,211)', width: 30, height: 35}}
            />
            <Text
              style={{
                color: 'rgb(72,166,211)',
                fontSize: 12,
                marginTop: 5,
                textAlign: 'center',
              }}>
              {'Upload\nAttachment'}
            </Text>
          </TouchableOpacity>
          <View style={{flex: 1}}>
            <FlatList
              data={this.state.selectedImages}
              horizontal
              renderItem={this.renderImageCell}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    );
  };

  renderImageCell = ({item, index}) => {
    return (
      <View
        testID="ImageCell"
        style={{marginLeft: 15, height: 80, paddingTop: 10}}>
        <Image
          style={{height: 70, width: 70, borderRadius: 6}}
          source={{uri: item}}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            height: 25,
            width: 25,
            borderRadius: 12.5,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            top: 0,
            right: -10,
          }}
          onPress={() => this.onPressDeleteImage(index)}>
          <Icon
            name="close"
            type="AntDesign"
            style={{fontSize: 18, color: Color.WHITE}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  renderPrescriptionList() {
    return (
      <View
        testID="PrescriptionList"
        style={{marginTop: 15, marginHorizontal: 15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Icon
              name="prescription"
              type="MaterialCommunityIcons"
              style={{color: Color.BLACK, fontSize: 25}}
            />
            <Text
              testID="PrescriptionListText"
              style={{
                color: Color.BLUE,
                fontSize: 16,
                marginLeft: 5,
              }}>
              Prescription
            </Text>
          </View>
          <Icon
            name="plus"
            type="Feather"
            style={{fontSize: 25, color: Color.BLUE}}
            onPress={() => this.setState({isOpenPrescribeMedicineModal: true})}
          />
        </View>
        <FlatList
          style={{
            flexGrow: 0,
            borderBottomColor: Color.LIGHT_GREY,
            borderBottomWidth: 0.5,
          }}
          keyExtractor={this.keyExtractor}
          contentContainerStyle={{paddingVertical: 5}}
          data={[
            {
              medicinName: 'Eye Drops',
              content: '80 mg',
              dosage: '2 Drops',
              frequency: 'every 3 hours',
              time: 'Before Meal',
              method: 'in eye',
              quantity: 1,
            },
          ]}
          renderItem={({item, index}) => (
            <View
              style={{
                marginTop: 5,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 16, color: Color.BLACK}}>
                  {item.medicinName} {item.content}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: Color.BLACK,
                    fontWeight: '300',
                    marginVertical: 2,
                  }}>
                  {item.dosage} {item.frequency} {item.time} ({item.method})
                </Text>
                <Text
                  style={{fontSize: 14, color: Color.BLACK, fontWeight: '300'}}>
                  {'Prescribed Quantity:'} {item.quantity}
                </Text>
              </View>
              <Icon
                name="delete"
                type="AntDesign"
                style={{fontSize: 20, color: Color.RED}}
              />
              <Icon
                name="chevron-thin-right"
                type="Entypo"
                style={{fontSize: 20, color: Color.RED, marginLeft: 15}}
              />
            </View>
          )}
          ListHeaderComponent={() => (
            <Text style={{fontSize: 16, color: Color.BLACK, fontWeight: '600'}}>
              Medications
            </Text>
          )}
          ListEmptyComponent={() => (
            <Text>No prescriptions have been assigned yet.</Text>
          )}
        />
      </View>
    );
  }

  renderGoalList() {
    return (
      <View style={{marginTop: 15, marginHorizontal: 15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Icon
              name="target"
              type="MaterialCommunityIcons"
              style={{color: Color.BLACK, fontSize: 25}}
            />
            <Text
              style={{
                color: Color.BLUE,
                fontSize: 16,
                marginLeft: 5,
              }}>
              Goal
            </Text>
          </View>
          <Icon
            name="plus"
            type="Feather"
            style={{fontSize: 25, color: Color.BLUE}}
            onPress={() => this.props.navigation.navigate('SetGoal')}
          />
        </View>
        <FlatList
          style={{
            flexGrow: 0,
            borderBottomColor: Color.LIGHT_GREY,
            borderBottomWidth: 0.5,
          }}
          keyExtractor={this.keyExtractor}
          contentContainerStyle={{paddingVertical: 5}}
          data={[
            {
              goal: 'First Treatment',
              details: 'work on skin',
              targetDate: '18 Aug 2020',
            },
          ]}
          renderItem={({item, index}) => (
            <View style={{marginTop: 5}}>
              <Text style={{fontSize: 16, color: Color.BLACK}}>
                {item.goal}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: Color.BLACK,
                  fontWeight: '300',
                  marginVertical: 2,
                }}>
                {item.details}
              </Text>
              <Text
                style={{fontSize: 14, color: Color.BLACK, fontWeight: '300'}}>
                {'Targat date:'} {item.targetDate}
              </Text>
            </View>
          )}
          ListEmptyComponent={() => (
            <Text>No goles have been assigned yet.</Text>
          )}
        />
      </View>
    );
  }

  renderMonitorPlanList() {
    return (
      <View style={{marginTop: 15, marginHorizontal: 15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Icon
              name="graph"
              type="Octicons"
              style={{color: Color.BLACK, fontSize: 25}}
            />
            <Text
              style={{
                color: Color.BLUE,
                fontSize: 16,
                marginLeft: 5,
              }}>
              Monitor Plan
            </Text>
          </View>
          <Icon
            name="plus"
            type="Feather"
            style={{fontSize: 25, color: Color.BLUE}}
          />
        </View>
        <FlatList
          style={{
            flexGrow: 0,
            borderBottomColor: Color.LIGHT_GREY,
            borderBottomWidth: 0.5,
          }}
          contentContainerStyle={{paddingVertical: 5}}
          data={[]}
          renderItem={() => <Text>Hello</Text>}
          ListEmptyComponent={() => (
            <Text>No monitor plan have been assigned yet.</Text>
          )}
        />
      </View>
    );
  }

  renderNextAppointmentList() {
    return (
      <View style={{marginTop: 15, marginHorizontal: 15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Icon
              name="calendar-month-outline"
              type="MaterialCommunityIcons"
              style={{color: Color.BLACK, fontSize: 25}}
            />
            <Text
              style={{
                color: Color.BLUE,
                fontSize: 16,
                marginLeft: 5,
              }}>
              Next Appointment
            </Text>
          </View>
          <Icon
            name="plus"
            type="Feather"
            style={{fontSize: 25, color: Color.BLUE}}
          />
        </View>
        <FlatList
          style={{
            flexGrow: 0,
            borderBottomColor: Color.LIGHT_GREY,
            borderBottomWidth: 0.5,
          }}
          contentContainerStyle={{paddingVertical: 5}}
          data={[{date: moment().add(1, 'day'), doctor: 'Patel Darshit'}]}
          renderItem={({item, index}) => (
            <View style={{marginTop: 5}}>
              <Text style={{fontSize: 16, color: Color.BLACK}}>
                {moment(item.date).format('hh:mm A, DD MMMM YYYY, dddd')}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: Color.BLACK,
                  fontWeight: '300',
                  marginVertical: 2,
                }}>
                @ {item.doctor}
              </Text>
            </View>
          )}
          ListEmptyComponent={() => (
            <Text>No appointments have been assigned yet.</Text>
          )}
        />
      </View>
    );
  }

  renderBillingList() {
    return (
      <View style={{marginTop: 15, marginHorizontal: 15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Icon
              name="calendar-month-outline"
              type="MaterialCommunityIcons"
              style={{color: Color.BLACK, fontSize: 25}}
            />
            <Text
              style={{
                color: Color.BLUE,
                fontSize: 16,
                marginLeft: 5,
              }}>
              Billing Consultation
            </Text>
          </View>
          <Icon
            name="plus"
            type="Feather"
            style={{fontSize: 25, color: Color.BLUE}}
            onPress={() => this.props.navigation.navigate('NewPatientBill')}
          />
        </View>
        <FlatList
          style={{
            flexGrow: 0,
            borderBottomColor: Color.LIGHT_GREY,
            borderBottomWidth: 0.5,
          }}
          contentContainerStyle={{paddingVertical: 5}}
          data={[]}
          renderItem={({item, index}) => (
            <View style={{marginTop: 5}}>
              <Text style={{fontSize: 16, color: Color.BLACK}}>
                {moment(item.date).format('hh:mm A, DD MMMM YYYY, dddd')}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: Color.BLACK,
                  fontWeight: '300',
                  marginVertical: 2,
                }}>
                @ {item.doctor}
              </Text>
            </View>
          )}
          ListEmptyComponent={() => <Text>Bill not generated yet.</Text>}
        />
      </View>
    );
  }

  renderNotifySwitch() {
    return (
      <View
        style={[
          styles.dropdownContainer,
          {flexDirection: 'row', alignItems: 'center'},
        ]}>
        <Switch style={{marginVertical: 10, marginRight: 10}} />
        <Text style={styles.dropdownTitle}>
          {'Notify Patient about Availability of Consultation Note'}
        </Text>
      </View>
    );
  }

  renderNote() {
    return (
      <View style={styles.dropdownContainer}>
        <View
          style={{
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderTopWidth: 0,
            borderRightWidth: 5,
            borderBottomWidth: 10,
            borderLeftWidth: 5,
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: Color.GREY,
            borderLeftColor: 'transparent',
            marginLeft: 15,
          }}
        />
        <View
          style={{
            marginHorizontal: 0,
            paddingHorizontal: 8,
            paddingVertical: 15,
            backgroundColor: Color.GREY,
          }}>
          <Text style={{fontSize: 14, color: Color.WHITE, fontWeight: '300'}}>
            The Consultation Note including any specified Review Note,
            Monitoring Plan assignments and next Appointment details will be
            availableto the patient, along with any Prescription and Billing.
          </Text>
        </View>
      </View>
    );
  }

  renderSaveButton() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderTopColor: Color.BLUE,
          borderTopWidth: 1,
        }}>
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            marginHorizontal: 0,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => this.props.navigation.goBack()}>
          <Text style={{fontSize: 16, color: Color.BLACK}}>SAVE AS DRAFT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            marginHorizontal: 0,
            flex: 1,
            backgroundColor: Color.BLUE,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() =>
            this.updateToDB(() => {
              this.props.navigation.navigate('SideMenu');
            })
          }>
          <Text style={{fontSize: 16, color: Color.WHITE}}>SAVE</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderPrescribeMedicineModal = () => {
    const {isOpenPrescribeMedicineModal} = this.state;
    return (
      <Modal
        animationType="fade"
        transparent
        visible={isOpenPrescribeMedicineModal}
        supportedOrientations={['portrait', 'landscape']}
        onRequestClose={() => handleBack()}>
        <View style={styles.modelStyle1}>
          <View style={styles.modelStyle2}>
            <View style={styles.modalHeader}>
              <Text style={styles.titleModal}>Prescribe Medicine</Text>
              <Icon
                name="close"
                type="MaterialCommunityIcons"
                style={{fontSize: 25, color: '#fff', marginRight: 10}}
                onPress={() =>
                  this.setState({isOpenPrescribeMedicineModal: false})
                }
              />
            </View>
            <FlatList
              data={this.state.prescribeMedicineList}
              style={{height: 250}}
              keyExtractor={this.keyExtractor}
              ItemSeparatorComponent={() => {
                return (
                  <View
                    style={{
                      width: '100%',
                      height: 0.5,
                      backgroundColor: 'lightgray',
                    }}
                  />
                );
              }}
              renderItem={this.renderMedicineList}
            />
            {this.renderPrescribeMedicineBottomPart()}
          </View>
        </View>
      </Modal>
    );
  };

  renderMedicineList = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Image
          source={item.img}
          style={{height: 30, width: 30, marginRight: 12}}
          resizeMode="contain"
        />
        <Text style={{fontSize: 16}}>{item.name}</Text>
      </View>
    );
  };

  renderPrescribeMedicineBottomPart = () => {
    return (
      <TouchableOpacity
        style={styles.prescribeModalBottomPart}
        onPress={() => {
          this.setState({isOpenPrescribeMedicineModal: false});
          this.props.navigation.navigate('AddMedicationScreen');
        }}>
        <Image
          source={imgAdd}
          style={{height: 20, width: 20, marginRight: 12, tintColor: 'red'}}
        />
        <Text style={{fontSize: 16, color: 'gray'}}>Add New Medicine</Text>
      </TouchableOpacity>
    );
  };
}

// export default AddConsultationNote;
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postData: notes => {
      dispatch(setNote(notes));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddConsultationNote);
