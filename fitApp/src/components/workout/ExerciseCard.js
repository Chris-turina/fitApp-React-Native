import React from 'react';
import { View, Text } from 'react-native';

const ExerciseCard = (props) => {
  return(
    <View style={styles.containerStyles}>
      <Text>{props.exercises}</Text>
      {props.set}
    </View>
  )
}

const styles = {
  containerStyles: {
    borderBottomWidth: 1
  }
}

export {ExerciseCard};
