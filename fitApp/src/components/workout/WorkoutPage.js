import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const WorkoutPage = () => {
  return (
    <View style={styles.containerStyles}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleTextStyle}> Workout Page </Text>
      </View>
      <TouchableOpacity style={styles.titleContainer}>
      <Text> End Workout </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = {
  containerStyles: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  titleContainer: {
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007aff',
    marginBottom: 40
  },
  titleTextStyle: {
    fontSize: 30
  }
}

export {WorkoutPage};
