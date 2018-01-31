import React from 'react';
import { View, Text } from 'react-native';

const WorkoutHistoryCard = (props) => {
  return(
    <View style={styles.containerStyles}>
      {props.exercisez}
    </View>
  )
}

const styles = {
  containerStyles: {
    borderBottomWidth: 5
  }
}

export {WorkoutHistoryCard};
