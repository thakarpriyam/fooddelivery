import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import EText from '../EText';

interface headerProps {
  isTitle?: boolean;
  titleText?: string;
  onBackPress?: () => void;
  isBackArrow?: boolean;
}

const CustomHeader = ({
  isTitle,
  titleText,
  onBackPress,
  isBackArrow,
}: headerProps) => {
  return (
    <View
      style={{
        height: 55,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isBackArrow && (
        <TouchableOpacity
          onPress={onBackPress}
          style={{
            height: 20,
            width: 20,
            position: 'absolute',
            left: 19,
            top: 15,
          }}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={require('../../assets/Images/back.png')}
          />
        </TouchableOpacity>
      )}
      {isTitle && (
        <EText
          style={{
            fontSize: 21,
            color: '#000',
            fontWeight: '500',
          }}>
          {titleText}
        </EText>
      )}
    </View>
  );
};

export default CustomHeader;
