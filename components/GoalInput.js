import React, { useState } from 'react';
import {View, TextInput, Button, Modal, StyleSheet} from 'react-native';

const GoalInput = (props) => {
  const {visible, onCancel} = props;
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  }
  const addButtonHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style ={styles.inputContainer}>
        <TextInput
          placeholder="Enter Game Title"
          style={styles.textInputStyles}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainerStyles}>
          <View style={styles.buttonStyle}><Button color={'#355C7D'} title="Add" onPress={addButtonHandler} /></View>
          <View style={styles.buttonStyle}><Button color={'#F67280'} title="Cancel" onPress={onCancel} /></View>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbc4ad',
  },
  textInputStyles: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
  buttonContainerStyles: {
    width: '60%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    width: '40%',
  }
})

export default GoalInput;
