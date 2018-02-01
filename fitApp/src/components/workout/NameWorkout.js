import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import { Link } from 'react-router-native';

const NameWorkout = ({workoutName}) => {


function handleSubmitWorkoutName(event) {
  event.preventDefault();
  workoutName({workoutName: _workoutName.value});
};

  return(
    <View>
      <TextInput
        placeholder='Enter a Name'
        style={{borderWidth: 2}}
      />
    </View>
  )
};



export {NameWorkout};
