import React from 'react';
import { View, Text } from 'react-native';

const ExerciseCard = (props) => {
  return(
    <View style={styles.containerStyles}>
      <Text>{props.exercisezes}</Text>
      {props.set}
    </View>
  )
}

const styles = {
  containerStyles: {
    borderBottomWidth: 3
  }
}

export {ExerciseCard};