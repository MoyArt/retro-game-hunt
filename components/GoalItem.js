import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GoalItem = (props) => {
  return (
    <TouchableOpacity onLongPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#e8d41b8c',
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 7,
  },
});

export default GoalItem;
