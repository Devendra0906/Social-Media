import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import {Container, Content} from 'native-base';
import DeviceInfo from 'react-native-device-info';
import moment from 'moment';

import CommentListTakePart from './../../../components/CommentListTakePart';
import styles from './styles';
import Color from '../../../Helper/Color';
import localizedStrings from '../../../Helper/LocalisedString';
import {connect} from 'react-redux';

import {
  addComment,
  getCommentsofCard,
  likeUnlikeComment,
} from '../../../__Redux/__actions/takePartActions';
import {Alert} from 'react-native';
class TakePartDashboard extends Component {
  constructor(props) {
    super(props);
    this.data = null;
    this.state = {
      cmt: '',
    };
  }

  componentWillMount() {
    this.data = this.props.route.params.data;
  }
  componentDidMount() {
    this.props.getCardCmts(this.data.id, 123);
    // console.log('takepartcommlent1', this.data.id);
  }
  updateToDBComment = () => {
    const data = {
      parent_id: this.data.id,
      user: {
        id: '123',
        profileImg: '123string',
        name: {
          fname: '123string',
          lname: '123string',
        },
      },
      comment_text: this.state.cmt,
      comment_likes: [],
    };
    this.props.postComment(data, this.data.id);
    this.setState({
      cmt: '',
    });
  };

  renderListRow = ({item, index}) => {
    return (
      <View style={styles.listItem}>
        <View style={styles.commentContainer}>
          <Image
            style={styles.itemIcon}
            source={require('./../../../../assets/images/contacts/captain-america.jpg')}
          />
          <View style={{marginLeft: 5}}>
            <Text style={styles.comment}>Hello this is a test comment.</Text>
            <Text style={styles.dateTime}>on {moment().format('lll')}</Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const {cmt} = this.state;

    return (
      <Container testID="feed" style={{backgroundColor: Color.WHITE}}>
        <Content>
          <Text style={styles.title}>{localizedStrings.takePart.whenDo}</Text>
          <Text style={styles.time}>a month ago</Text>
          <Text style={styles.reason}>
            {localizedStrings.takePart.beingAble}
          </Text>
          <View style={styles.optionsContainer}>
            <View style={styles.option}>
              <Text style={styles.optionText}>Monday 12</Text>
              <Text style={styles.answerCount}>150</Text>
            </View>
            <View style={[{marginLeft: 10}, styles.option]}>
              <Text style={styles.optionText}>Friday 17</Text>
              <Text style={styles.answerCount}>50</Text>
            </View>
          </View>
          <Text style={styles.commentBoxText}>Comment Box</Text>
          <CommentListTakePart
            comments={this.props.state.takePartReducer.comment}
          />
        </Content>
        <KeyboardAvoidingView
          style={{marginBottom: DeviceInfo.hasNotch() ? 25 : 5}}
          behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <View style={styles.saperator} />
          <View style={styles.bottomViewContainer}>
            <TextInput
              value={cmt}
              onChangeText={text => this.setState({cmt: text})}
              placeholder="Your Comments"
              placeholderTextColor="#bbb"
              style={{flex: 1}}
            />
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 10,
                paddingVertical: 6,
                backgroundColor: '#000',
                marginLeft: 10,
              }}
              onPress={() =>
                this.updateToDBComment(() => {
                  console.log('pressed');
                })
              }>
              <Text style={{color: '#fff', fontSize: 15}}>Add</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

// export default TakePartDashboard;

const mapStateToProps = state => {
  return {
    state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCardCmts: (id, parentId) => {
      dispatch(getCommentsofCard(id, parentId));
    },
    postComment: (comment, id) => {
      dispatch(addComment(comment, id));
    },
    likeUnlikeCmt: (cardId, commentId, likeID) => {
      dispatch(likeUnlikeComment(cardId, commentId, likeID));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TakePartDashboard);
