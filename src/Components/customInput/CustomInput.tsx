import {
  View,
  TextInput,
  Image,
  Keyboard,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import EText from '../EText';

import getColors from '../../Themes/Color';

const colors = getColors('custom');

interface CustomInputProps {
  placeholder?: string;
  img?: any;
  isOtp?: boolean;
  isPassword?: boolean;
  inputConfig?: any;
  isError?: boolean;
  errorMsg?: string;
  maxL?: number;
  keyboard?: string;
  onPressOtp?: any;
}

const CustomInput = ({
  placeholder,
  img,
  isOtp,
  isPassword,
  inputConfig,
  isError,
  errorMsg,
  keyboard,
  maxL,
  onPressOtp,
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [passVisible, setPassVisble] = useState(false);

  return (
    // <View
    //   style={{
    //     borderWidth: 1,
    //     height: 55,
    //     borderRadius: 10,
    //     borderColor: isFocused ? '#9B1C45' : '#e0e0df',
    //     justifyContent: 'center',
    //     width: '100%',
    //     backgroundColor: '#efefef',
    //     paddingLeft: 45,
    //     paddingRight: 15,
    //     marginBottom: 20,
    //   }}>
    //   <View
    //     style={{
    //       height: 22,
    //       width: 22,
    //       position: 'absolute',
    //       zIndex: 1,
    //       left: 15,
    //     }}>
    //     <Image
    //       tintColor={isFocused ? '#000' : 'gray'}
    //       style={{ height: '100%', width: '100%' }}
    //       source={img}
    //     />
    //   </View>
    //   <TextInput
    //     keyboardType={keyboard}
    //     placeholderTextColor={isFocused ? 'gray' : 'gray'}
    //     style={{
    //       borderRadius: 10,
    //       fontSize: 16,
    //       width: isOtp ? '78%' : '100%',
    //       color: '#000',
    //     }}
    //     onFocus={() => setIsFocused(true)}
    //     onBlur={() => setIsFocused(false)}
    //     placeholder={placeholder}
    //     secureTextEntry={isPassword && !passVisible}
    //     {...inputConfig}
    //   />
    //   {isError && (
    //     <Text
    //       style={{
    //         fontSize: 12,
    //         color: 'red',
    //         position: 'absolute',
    //         bottom: -18,
    //         left: 10,
    //       }}>
    //       {errorMsg}
    //     </Text>
    //   )}
    //   {isOtp && (
    //     <TouchableOpacity style={{ position: 'absolute', right: 15 }}>
    //       <Text style={{ color: '#9B1C45', fontSize: 16, fontWeight: '400' }}>
    //         Send OTP
    //       </Text>
    //     </TouchableOpacity>
    //   )}
    //   {isPassword && (
    //     <TouchableOpacity
    //       onPress={() => setPassVisble(!passVisible)}
    //       style={{ position: 'absolute', right: 15, height: 25, width: 25 }}>
    //       <Image
    //         style={{ height: '100%', width: '100%' }}
    //         source={
    //           !passVisible
    //             ? require('../../../images/eye.png')
    //             : require('../../../images/hidden.png')
    //         }
    //         tintColor={'#9B1C45'}
    //       />
    //     </TouchableOpacity>
    //   )}
    // </View>
    <View
      style={{
        borderWidth: 1,
        height: 55,
        borderRadius: 10,
        borderColor: isFocused ? colors.main : colors.border,
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#FFF',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: isError ? 30 : 20,
        // marginTop: isError ? 30 : 20,
      }}>
      <View
        style={{
          position: 'absolute',
          top: -10,
          left: 15,
          backgroundColor: colors.secondbgcolor,
          paddingHorizontal: 2,
        }}>
        <EText style={{color: isFocused ? colors.main : colors.normaltext}}>
          {placeholder}
        </EText>
      </View>
      <TextInput
        keyboardType={keyboard}
        placeholderTextColor={isFocused ? colors.normaltext : colors.normaltext}
        maxLength={maxL}
        style={{
          borderRadius: 10,
          fontSize: 15,
          width: isOtp ? '78%' : '100%',
          color: colors.text,
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        // placeholder={placeholder}
        secureTextEntry={isPassword && !passVisible}
        {...inputConfig}
      />
      {isError && (
        <EText
          style={{
            fontSize: 13,
            color: colors.error,
            position: 'absolute',
            bottom: -20,
            left: 10,
          }}>
          {errorMsg}
        </EText>
      )}
      {isOtp && (
        <TouchableOpacity
          style={{position: 'absolute', right: 15}}
          onPress={onPressOtp}>
          <Text style={{color: colors.main, fontSize: 14, fontWeight: '400'}}>
            Send OTP
          </Text>
        </TouchableOpacity>
      )}
      {isPassword && (
        <TouchableOpacity
          onPress={() => setPassVisble(!passVisible)}
          style={{position: 'absolute', right: 15, height: 25, width: 25}}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={
              !passVisible
                ? require('../../assets/Images/eye.png')
                : require('../../assets/Images/hidden.png')
            }
            tintColor={'#9B1C45'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default CustomInput;
