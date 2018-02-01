import React from 'react';
import { View, Text } from 'react-native';

const ExerciseCard = (props) => {
  return(
    <View style={styles.containerStyles}>
      <Text style={styles.text}>{props.exercises}</Text>
      <View style={styles.rep}>
        {props.set}
      </View>
    </View>
  )
}

const styles = {
  containerStyles: {
    borderBottomWidth: 1,
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center' 
  },
  rep: {
    flexDirection: 'row',
  }
}

export {ExerciseCard};
