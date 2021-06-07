import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import FontAwasome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CachedImage from 'react-native-fast-image';
import CalendarStrip from 'react-native-calendar-strip';

import Footer from '../../components/FooterButtons';
import styles from './styles';
import Color from '../../Helper/Color';
import moment from 'moment';
import PatientListItem from '../../components/PatientListItem';
import localizedStrings from '../../Helper/LocalisedString';
import {setTestId} from '../../Helper/GlobalMethods';
import {DrawerActions} from '@react-navigation/native';
import {fetchProfile} from '../../__Redux/__actions/profileActions';
import {connect} from 'react-redux';
const chineseDates = {
  months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
    '_',
  ),
  monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
  weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
  weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY/MM/DD',
    LL: 'YYYY年M月D日',
    LLL: 'YYYY年M月D日Ah点mm分',
    LLLL: 'YYYY年M月D日ddddAh点mm分',
    l: 'YYYY/M/D',
    ll: 'YYYY年M月D日',
    lll: 'YYYY年M月D日 HH:mm',
    llll: 'YYYY年M月D日dddd HH:mm',
  },
  meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
  meridiemHour: function(hour, meridiem) {
    if (hour === 12) {
      hour = 0;
    }
    if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
      return hour;
    } else if (meridiem === '下午' || meridiem === '晚上') {
      return hour + 12;
    } else {
      // '中午'
      return hour >= 11 ? hour : hour + 12;
    }
  },
  meridiem: function(hour, minute, isLower) {
    var hm = hour * 100 + minute;
    if (hm < 600) {
      return '凌晨';
    } else if (hm < 900) {
      return '早上';
    } else if (hm < 1130) {
      return '上午';
    } else if (hm < 1230) {
      return '中午';
    } else if (hm < 1800) {
      return '下午';
    } else {
      return '晚上';
    }
  },
  calendar: {
    sameDay: '[今天]LT',
    nextDay: '[明天]LT',
    nextWeek: '[下]ddddLT',
    lastDay: '[昨天]LT',
    lastWeek: '[上]ddddLT',
    sameElse: 'L',
  },
  dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
  ordinal: function(number, period) {
    switch (period) {
      case 'd':
      case 'D':
      case 'DDD':
        return number + '日';
      case 'M':
        return number + '月';
      case 'w':
      case 'W':
        return number + '周';
      default:
        return number;
    }
  },
  relativeTime: {
    future: '%s内',
    past: '%s前',
    s: '几秒',
    ss: '%d 秒',
    m: '1 分钟',
    mm: '%d 分钟',
    h: '1 小时',
    hh: '%d 小时',
    d: '1 天',
    dd: '%d 天',
    M: '1 个月',
    MM: '%d 个月',
    y: '1 年',
    yy: '%d 年',
  },
  week: {
    // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
    dow: 1, // Monday is the first day of the week.
    doy: 4, // The week that contains Jan 4th is the first week of the year.
  },
};

const emiratesLogo = require('../../../assets/images/logo.png');
const male = require('../../../assets/images/male_user.png');
const female = require('../../../assets/images/female_user.png');

const patientList = [
  {
    firstname: 'Darshit',
    lastname: 'Zalavadiya',
    gender: 'Male',
    smoke: 'No',
    BPDignosed: 'No',
    diabetes: 'No',
    dob: '1993-10-06',
    status: 'red',
    phone: '1231231231',
    image: require('../../../assets/images/contacts/batman.jpg'),
  },
  {
    firstname: 'Fouad',
    lastname: 'Omri',
    gender: 'Male',
    smoke: 'Yes',
    BPDignosed: 'No',
    diabetes: 'Not Answered',
    dob: '1982-05-01',
    status: 'green',
    phone: '1231231231',
    image: require('../../../assets/images/contacts/hulk.jpg'),
  },
  {
    firstname: 'Safa',
    lastname: 'Omri',
    gender: 'Female',
    smoke: 'No',
    BPDignosed: 'No',
    diabetes: 'No',
    dob: '1986-01-08',
    status: 'red',
    phone: '1231231231',
    image: require('../../../assets/images/contacts/megha.png'),
  },
  {
    firstname: 'Chetan',
    lastname: 'Godhani',
    gender: 'Male',
    smoke: 'Not Answered',
    BPDignosed: 'Not Answered',
    diabetes: 'No',
    dob: '1995-06-06',
    status: 'green',
    phone: '1231231231',
    image: require('../../../assets/images/contacts/thanos.jpg'),
  },
  {
    firstname: 'Jatin',
    lastname: 'Vaghela',
    gender: 'Male',
    smoke: 'No',
    BPDignosed: 'Yes',
    diabetes: 'Yes',
    dob: '1989-05-06',
    status: 'green',
    phone: '1231231231',
    image: require('../../../assets/images/contacts/spiderman.jpeg'),
  },
];

class StartScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      name: 'Safa',
      weather: '24',
      activities: [],
      selectedDate: moment(new Date()).format('YYYY-MM-DD'),
      selectedIndex: 0,
      patientDetilVisible: false,
      selectedUser: patientList[0],
    };
  }

  onPressProfileImage = () => {
    this.props.navigation.navigate('HomeTabNavigator');
  };

  onPressFooterButtons = () => {
    this.props.navigation.navigate('AIBot');
  };

  onCloseModal = () => {
    this.setState({patientDetilVisible: false});
  };

  keyExtractor = (item, index) => `${index}`;
  componentDidMount() {
    this.props.getProfile();
    // console.log('publi', this.props.state.profileReducer.items);
  }
  renderTabButtons = () => {
    return (
      <View testID="statusMainContainer" style={styles.statusMainContainer}>
        <View style={styles.statusContainer}>
          <TouchableOpacity
            testID=""
            style={styles.statusTextContainer}
            onPress={() => this.setState({selectedIndex: 0})}>
            <Text testID="statusCnt" style={styles.statusCount}>
              {5}
            </Text>
            <Text testID="pendingText" style={styles.statusTitle}>
              {localizedStrings.startScreen.Pending}
            </Text>
          </TouchableOpacity>
          {this.state.selectedIndex === 0 && (
            <View style={[styles.separator, {backgroundColor: Color.RED}]} />
          )}
        </View>
        <View style={[styles.statusContainer, {marginHorizontal: 15}]}>
          <TouchableOpacity
            style={styles.statusTextContainer}
            onPress={() => this.setState({selectedIndex: 1})}>
            <Text style={styles.statusCount}>{5}</Text>
            <Text testID="toDoText" style={styles.statusTitle}>
              {localizedStrings.startScreen.ToDo}
            </Text>
          </TouchableOpacity>
          {this.state.selectedIndex === 1 && (
            <View style={[styles.separator, {backgroundColor: Color.BLUE}]} />
          )}
        </View>
        <View style={[styles.statusContainer, {marginRight: 15}]}>
          <TouchableOpacity
            style={styles.statusTextContainer}
            onPress={() => this.setState({selectedIndex: 2})}>
            <Text style={styles.statusCount}>{5}</Text>
            <Text testID="startedText" style={styles.statusTitle}>
              {localizedStrings.startScreen.Started}
            </Text>
          </TouchableOpacity>
          {this.state.selectedIndex === 2 && (
            <View style={[styles.separator, {backgroundColor: Color.GOLDEN}]} />
          )}
        </View>
        <View style={styles.statusContainer}>
          <TouchableOpacity
            style={styles.statusTextContainer}
            onPress={() => this.setState({selectedIndex: 3})}>
            <Text style={styles.statusCount}>{5}</Text>
            <Text testID="doneText" style={styles.statusTitle}>
              {localizedStrings.startScreen.Done}
            </Text>
          </TouchableOpacity>
          {this.state.selectedIndex === 3 && (
            <View
              style={[styles.separator, {backgroundColor: Color.SUCCESS_GREEN}]}
            />
          )}
        </View>
      </View>
    );
  };

  renderCalender = () => {
    return (
      <View testID="calender">
        <Text style={styles.calenderHeaderDate}>
          {moment(this.state.selectedDate).format('ddd, MMM D')}
        </Text>
        <CalendarStrip
          showMonth={false}
          useIsoWeekday={false}
          startingDate={new Date()}
          selectedDate={this.state.selectedDate}
          //locale={{ name: 'zh', config: chineseDates }}
          onDateSelected={date => {
            let d = moment(date._d).format('YYYY-MM-DD');
            if (this.state.selectedDate != d) {
              this.setState({selectedDate: d});
            }
          }}
          onWeekChanged={date => {
            if (
              moment(date._d).format('X') <
              moment(this.state.selectedDate).format('X')
            ) {
              let d = moment(this.state.selectedDate).subtract(7, 'days');
              if (this.state.selectedDate != d) {
                this.setState({selectedDate: d});
              }
            } else {
              let d = moment(this.state.selectedDate).add(7, 'days');
              if (this.state.selectedDate != d) {
                this.setState({selectedDate: d});
              }
            }
          }}
          style={styles.calender}
          highlightDateNameStyle={{color: Color.WHITE}}
          highlightDateNumberStyle={{color: Color.WHITE}}
          daySelectionAnimation={{
            type: 'background',
            duration: 300,
            highlightColor: Color.BLUE,
          }}
        />
      </View>
    );
  };

  renderPatientList = ({item, index}) => {
    let image = male;
    if (item.gender == 'Female') {
      image = female;
    }
    let color = Color.SUCCESS_GREEN;
    if (item.status == 'red') {
      color = Color.RED;
    }
    return (
      <TouchableOpacity
        testID="patientsList"
        style={styles.listItemContainer}
        onPress={() =>
          this.setState({patientDetilVisible: true, selectedUser: item})
        }>
        <Image style={styles.brandLogo} source={image} resizeMode="contain" />
        <View style={styles.taskDetailContainer}>
          <Text style={styles.taskTitle}>
            {item.firstname} {item.lastname}
          </Text>
          <Text style={styles.locationText}>{item.phone}</Text>
        </View>
        <View>
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: color,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {
      container,
      headerContainer,
      headerImage,
      greetingsContainer,
      greetingsText,
      weatherContainer,
      weatherText,
    } = styles;
    let greet = 'hello';
    const date = new Date();
    if (date.getHours() < 12) {
      greet = 'Good Morning';
    } else if (date.getHours() > 12 && date.getHours() < 4) {
      greet = 'Good Aftenoon';
    } else {
      greet = 'Good Evening';
    }
    return this.props.state.profileReducer.items.user === undefined ? (
      <Text>Loading</Text>
    ) : (
      <SafeAreaView testID="startScreen" style={container}>
        <View style={headerContainer}>
          <TouchableOpacity
            testID="SideMenuButton"
            onPress={() => this.props.navigation.navigate('SideMenu')}>
            <SimpleLineIcons name={'menu'} size={24} colo={Color.BLACK} />
          </TouchableOpacity>
          <TouchableHighlight
            style={headerImage}
            onPress={this.onPressProfileImage}
            {...setTestId('profileImage')}>
            <CachedImage
              style={headerImage}
              source={{
                uri: this.props.state.profileReducer.items.media.profileImg,
              }}
            />
          </TouchableHighlight>
        </View>
        <View style={greetingsContainer}>
          <Text style={greetingsText}>
            {greet}, {this.props.state.profileReducer.items.user.firstName}{' '}
            {this.props.state.profileReducer.items.user.lastName}
          </Text>
          <View style={weatherContainer}>
            <FontAwasome name="moon-o" size={20} color={Color.LIGHT_GREY} />
            <Text style={weatherText}>
              {this.state.weather}
              {'\u2103'}
            </Text>
          </View>
        </View>
        {this.renderCalender()}
        {this.renderTabButtons()}
        <FlatList
          style={{flex: 1, marginTop: 5}}
          data={patientList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderPatientList}
        />
        <Footer
          classType="passengerstartscreen"
          micPressed={this.onPressFooterButtons}
          keyboardPressed={this.onPressFooterButtons}
        />
        <PatientListItem
          visible={this.state.patientDetilVisible}
          patientDetails={this.state.selectedUser}
          onCloseModal={this.onCloseModal}
        />
      </SafeAreaView>
    );
  }
}
// export default StartScreen;
const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => {
      dispatch(fetchProfile());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StartScreen);
