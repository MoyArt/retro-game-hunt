import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Header = ({title}) => {
  return(
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#355c7d90',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
  }
})

export default Header;
