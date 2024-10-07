import {View, Text, Image} from 'react-native';
import React from 'react';

interface imageProps {
  imageUrl?: any;
  isImageErr?: boolean;
}

const InputImage = ({imageUrl, isImageErr}: imageProps) => {
  return (
    <View
      style={{
        height: 200,
        width: '100%',
        borderColor: isImageErr ? '#FF0000' : '#e0e0df',
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {imageUrl ? (
        <Image
          style={{height: '100%', width: '100%'}}
          source={{uri: imageUrl}}
          resizeMode="cover"
        />
      ) : (
        <View>
          <View style={{height: 25, width: 25, alignSelf: 'center'}}>
            <Image
              tintColor={isImageErr ? '#FF0000' : '#c3c3c3'}
              style={{height: '100%', width: '100%'}}
              source={require('../../assets/Images/upload.png')}
            />
          </View>
          <Text
            style={{
              fontSize: 15,
              color: isImageErr ? '#FF0000' : '#c3c3c3',
              fontFamily: 'Lato-Regular',
            }}>
            Take your selfie
          </Text>
        </View>
      )}
    </View>
  );
};

export default InputImage;
