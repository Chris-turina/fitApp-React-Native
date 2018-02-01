import React from 'react';
import { View, Text } from 'react-native';

const Rep = (props) => {
  return(
    <View>
      <Text style={styles.text}>{props.reps},</Text>
    </View>
  )
}

const styles = {
  text: {
    fontSize: 16,
  }
}

export {Rep};
