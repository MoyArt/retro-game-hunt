import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, ImageBackground} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const addGoalHandler = (enteredGoal) => {
    console.log(enteredGoal);
    const objKey = Date.now() + '';
    if(enteredGoal) {
      setCourseGoals((currentGoals) => [
        ...currentGoals,
        { key: objKey, value: enteredGoal, id: objKey },
      ]);
    }
    setModalVisible(false);
  }
  const cancelButtonHandler = () => setModalVisible(false);
  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }
  return (
    <View style={styles.mainScreen}>
      <ImageBackground source={require('./assets/retroBackground.png')} style={styles.backgroundImage} >
        <Header title="Retro Game Hunt" />
        <View style={styles.screen}>
          <Button color={'#C06C84'} title="Add Wanted Game" onPress={() => setModalVisible(true)} />
          <GoalInput visible={modalVisible} onAddGoal={addGoalHandler} onCancel={cancelButtonHandler} />
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                id={itemData.item.id}
                onDelete={removeGoalHandler}
                title={itemData.item.value}
              />
            )}
          />
        </View>
        <Footer legalText="Game Hunt App™ - Developed by MoyArt - 2020" />
      </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: '#f8b195',
    flex: 1,
  },
  screen: {
    padding: 50,
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  }
})
