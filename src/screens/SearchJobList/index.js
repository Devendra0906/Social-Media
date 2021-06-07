import _ from 'lodash';
import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput
} from 'react-native';
import MapView, { Marker } from "react-native-maps";
import { Button } from 'react-native-elements';
import {
  Container,
  Text,
  Card,
  CardItem,
  Row,
  Col,
  Icon
} from 'native-base';

import { Dropdown } from 'react-native-material-dropdown';
import CacheImage from '../../components/CacheImage';
import JOBDATA from '../../assets/Data/Job_list';
import styles from './style';
import FilterAlert from '../../components/FilterAlert';
import Color from '../../Helper/Color';

const WORK_EXPIERENCE_OPTIONS = [
  { value: 'Less than 1 year' },
  { value: '1 year' },
  { value: '2 years' },
  { value: '3 years' },
  { value: '4 years' },
  { value: '5 years +' },
];

class SearchJobsList extends Component {

  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    visibleFilter: false
  }

  constructor(props) {
    super(props)
    props.navigation.setOptions({
      title: 'Search',
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 16 }}
          onPress={() => {
            debugger
            let title = props.route.params && props.route.params.buttonTitle ? props.route.params.buttonTitle : 'Map'
            props.navigation.setParams({ buttonTitle: title === 'Map' ? 'List' : 'Map' })
          }}>
          <Text>{props.route.params && props.route.params.buttonTitle ? props.route.params.buttonTitle : 'Map'}</Text>
        </TouchableOpacity>
      )
    })
  }

  componentDidMount() {
    let minX, maxX, minY, maxY;

    // init first point
    ((point) => {
      minX = point.location.coordinates[0];
      maxX = point.location.coordinates[0];
      minY = point.location.coordinates[1];
      maxY = point.location.coordinates[1];
    })(JOBDATA[0]);

    // calculate rect
    JOBDATA.map((point) => {
      minX = Math.min(minX, point.location.coordinates[0]);
      maxX = Math.max(maxX, point.location.coordinates[0]);
      minY = Math.min(minY, point.location.coordinates[1]);
      maxY = Math.max(maxY, point.location.coordinates[1]);
    });

    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;
    const deltaX = (maxX - minX) * 1.2;
    const deltaY = (maxY - minY) * 1.2;

    this.setState({
      region: {
        latitude: midX,
        longitude: midY,
        latitudeDelta: deltaX,
        longitudeDelta: deltaY
      }
    })
  }


  businessCard = business => {
    const businessDetails = business.item;
    return (
      <Card
        key={`card_${businessDetails.id}_${business.index}`}
        style={{ paddingBottom: 10, borderRadius: 10 }}>
        {_.get(businessDetails, 'business.s3_img') ? (
          <CacheImage
            key={`businessImage_'${businessDetails.id}`}
            source={{ uri: _.get(businessDetails, 'business.s3_img') || '' }}
            resizeMode={'cover'}
            style={{
              width: '100%',
              height: 100,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
        ) : (
            <CacheImage
              key={`businessImage_'${businessDetails.id}`}
              source={{ uri: 'https://onejob-images.s3.eu-west-3.amazonaws.com/icons/company_def.png' }}
              resizeMode={'cover'}
              style={{
                width: '100%',
                height: 100,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
          )}
        <CardItem style={styles.businessCardContiner}>
          <Text style={styles.businessNameText}>
            {_.get(businessDetails, 'company') ||
              _.get(businessDetails, 'business.name') ||
              ''}
          </Text>
          <Row style={{ alignItems: 'center', marginVertical: 5 }}>
            <Image
              source={require('../../assets/images/map_pin_fill.png')}
              style={{ height: 20, width: 20, tintColor: '#000' }}
              resizeMode={'contain'}
            />
            <Text note style={styles.businessAddress}>{`${_.get(
              businessDetails,
              'business.address',
            ) || ''}`}</Text>
          </Row>
          <Text style={styles.distanceText}>{'1.5 km from your marker'}</Text>
        </CardItem>
        {this.renderJobDetails(businessDetails)}
      </Card>
    );
  };

  renderJobDetails(businessDetails) {
    return (
      <View
        key={`card_${businessDetails.businessId}_${businessDetails.id}`}
        style={styles.businessDetailContainer}>
        <CardItem>
          <Col style={{ paddingBottom: 10 }}>
            <Row style={styles.jobRoleContainer}>
              <Text style={styles.jobRoleText}>{`${_.get(
                businessDetails,
                'jobTitle.jobTitle',
              ) ||
                _.get(businessDetails, 'jobRole.value') ||
                ''}`}</Text>
            </Row>
            <Text
              numberOfLines={2}
              style={
                styles.descriptionText
              }>{`${businessDetails.description}`}</Text>
          </Col>
        </CardItem>

        <Button
          title={`JOB DETAILS`}
          onPress={() => {
            this.props.navigation.navigate('JobInformation');
          }}
          // small
          containerStyle={styles.buttonContainerStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitleStyle}
        />
      </View>
    );
  }

  renderList() {
    return (
      <View>
        <View style={styles.filterViewContainer}>
          <TouchableOpacity
            style={styles.filterButtonContainer}
            activeOpacity={0.7}
            onPress={() => {
              this.setState({ visibleFilter: !this.state.visibleFilter })
            }}>
            <Icon
              name={'filter'}
              type="AntDesign"
              style={styles.filterIconStyle}
            />
            <Text style={styles.filterText}>Filters</Text>
          </TouchableOpacity>

          <Dropdown
            containerStyle={[
              styles.filterButtonContainer,
              { marginHorizontal: 10 },
            ]}
            rippleOpacity={0}
            dropdownOffset={{ top: 0, left: 0 }}
            data={WORK_EXPIERENCE_OPTIONS}
            value={'Experience'}
            dropdownPosition={-5}
            onChangeText={(value, idx) => { }}
            renderBase={({ props, title, value, renderAccessory }) => {
              return (
                <View>
                  <TextInput
                    pointerEvents="none"
                    style={styles.filterText}
                    editable={false}
                    value={title}
                  />
                </View>
              );
            }}
          />
          <Dropdown
            containerStyle={[styles.filterButtonContainer]}
            rippleOpacity={0}
            dropdownPosition={-5}
            dropdownOffset={{ top: 0, left: 0 }}
            data={WORK_EXPIERENCE_OPTIONS}
            value={'Nationality'}
            onChangeText={(value, idx) => { }}
            renderBase={({ props, title, value, renderAccessory }) => {
              return (
                <View>
                  <TextInput
                    pointerEvents="none"
                    style={styles.filterText}
                    editable={false}
                    value={title}
                  />
                </View>
              );
            }}
          />
        </View>

        <FlatList
          removeClippedSubviews={false}
          data={JOBDATA}
          style={{ paddingHorizontal: 15 }}
          renderItem={business => this.businessCard(business)}
        />
      </View>
    )
  }

  renderMap() {
    return (
      <MapView
        style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}
        liteMode
        region={this.state.region}
      >
        {JOBDATA.map(data => {
          return (<Marker
            key={data.id}
            coordinate={{ latitude: data.location.coordinates[0], longitude: data.location.coordinates[1] }}
            title={data.business.name}
          />)
        })}
      </MapView>
    )
  }

  render() {
    const { navigation, route } = this.props;
    return (
      <Container style={{ backgroundColor: Color.WHITE }}>
        {route.params && route.params.buttonTitle === 'List' ?
          this.renderMap()
          :
          this.renderList()
        }
        <FilterAlert visible={this.state.visibleFilter}
          onPressBack={() => {
            this.setState({ visibleFilter: false })
          }}
          onPressReset={() => {
            this.setState({ visibleFilter: false })
          }} />
      </Container>
    );
  }
}

export default SearchJobsList;
