// AppText.js
import React from 'react';
import {Text, StyleSheet} from 'react-native';

const EText = ({children, style, ...props}: any) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default EText;
