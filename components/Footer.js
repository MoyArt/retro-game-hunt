import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = ({legalText}) => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>{legalText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    height: 60,
    width: '100%',
    backgroundColor: '#6c5b7b80',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderTopWidth: 1,
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
  },
})

export default Footer;