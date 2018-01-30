import React from 'react';
import { View, Text } from 'react-native';

const WorkoutHistory =(props) => {

function check(){
  console.log(props);
}

  return (
    <View>
      <Text onPress={check}>{props.masterList}</Text>
    </View>
  )
}

export {WorkoutHistory};
