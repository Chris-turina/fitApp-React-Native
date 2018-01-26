import React from 'react';
import { View, Text } from 'react-native';

const SelectCard = ({workoutName}) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>
        {workoutName}
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 100,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#4A90E2',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 35,
  }
};

export {SelectCard};
