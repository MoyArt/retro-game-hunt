import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GoalItem = (props) => {
  const {title, onDelete, id} = props;
  return (
    <TouchableOpacity onLongPress={onDelete.bind(this, id)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
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
