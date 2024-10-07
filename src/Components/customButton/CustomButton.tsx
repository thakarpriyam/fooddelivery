import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import getColors from '../../Themes/Color';
import EText from '../EText';

const colors = getColors('custom');

interface buttonProps {
  text: string;
  onBtnPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const CustomButton = ({text, onBtnPress, loading, disabled}: buttonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onBtnPress}
      style={{
        height: 55,
        backgroundColor: disabled ? colors.btndisable : colors.main,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {loading ? (
        <ActivityIndicator size={'small'} color={colors.secondbgcolor} />
      ) : (
        <EText
          style={{
            color: disabled ? colors.txtdisable : colors.secondbgcolor,
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'Lato-Regular',
          }}>
          {text}
        </EText>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
