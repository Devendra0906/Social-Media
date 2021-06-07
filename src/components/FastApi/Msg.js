import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import Color from '../../Helper/Color';
import styles from '../../screens/PatientList/styles';

import imgRadioOn from '../../../assets/images/radioOn.png';
import imgRadioOff from '../../../assets/images/radioOff.png';
import profileImg from '../../../assets/images/people.png';
import stethoscope from '../../../assets/images/stethoscope.png';

renderListCell = ({item}) => {
  const {isSelectionOn} = false;
  console.log(item);
  let img = item.isSelected ? imgRadioOn : imgRadioOff;
  return (
    <TouchableOpacity style={styles.cellContainer}>
      {isSelectionOn && (
        <TouchableOpacity onPress={() => this._radioButtonPressed()}>
          <Image source={img} style={styles.btnRadio} />
        </TouchableOpacity>
      )}
      <Image source={profileImg} style={styles.profilePic} />
      <View style={{flex: 1, marginLeft: 15, justifyContent: 'center'}}>
        <Text style={styles.patinetDetails}>{item.name}</Text>
        <Text style={styles.patinetDetails}>{item.bio}</Text>
      </View>
      {!isSelectionOn && (
        <TouchableOpacity
          disabled
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 28,
            width: 28,
            borderRadius: 14,
          }}>
          <Image
            source={stethoscope}
            style={[{margin: 0, height: 15, width: 15}]}
          />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const Msg = (props) => {
  const [result, setResult] = useState([]);
  const message = async () => {
    try {
      let res = await axios.get('http://10.0.2.2:8000/');
      let result = res.data;

      setResult(result);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    message();
  }, []);
  // console.log(result);
  var myJSON = JSON.stringify(result);
  var nme = JSON.parse(myJSON);

  console.log(nme);

  return (
    <View>
      <FlatList
        style={styles.flatListStyle}
        data={nme}
        contentContainerStyle={{paddingBottom: 25, paddingTop: 15}}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => renderListCell(item)}
        ItemSeparatorComponent={() => (
          <View style={{height: 1, backgroundColor: Color.LIGHT_GREY}} />
        )}
      />
      {/* <FlatList
          data={nme}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={(item) => item.id}
        /> */}
    </View>
  );
};
export default Msg;
