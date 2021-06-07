import React from 'react';
import {View, Button, Text} from 'native-base';
import * as Progress from 'react-native-progress';
import FastImage from 'react-native-fast-image';
import {createImageProgress} from 'react-native-image-progress';
const CacheImage = createImageProgress(FastImage);

const _CacheImage = props => {
  return (
    <CacheImage
      {...props}
      indicator={Progress.Circle}
      imageStyle={props.style}
    />
  );
};

export default _CacheImage;
