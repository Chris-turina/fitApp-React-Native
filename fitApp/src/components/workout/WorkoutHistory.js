import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Link } from 'react-router-native'
import { WorkoutHistoryCard } from './WorkoutHistoryCard';
import { ExerciseCard } from './ExerciseCard';
import { Rep } from './Rep';

const WorkoutHistory =(props) => {

  return (
    <View style={styles.container}>
      <ScrollView>
        {props.masterList.map((workoutList, index) =>
          <WorkoutHistoryCard
            workouts={workoutList.map((exercise, index) =>
              <ExerciseCard
                exercises={exercise.exerciseName}
                set={exercise.sets.map((set, index) =>
                  <Rep
                    reps={set}
                    key={index}
                  />
                )}
                key={index}
              />
            )}
            key={index}

          />
        )}
      </ScrollView>
      <View style={styles.logoContainer}>
        <Link
          to='/' >
          <Image
            style={styles.logoStyle}
            source={require('./round-logo.png')}
          />
        </Link>
      </View>
    </View>
  )
}

const styles = {
  container: {

  },
  logoContainer: {
    alignItems: 'center',
    width: 375,
    bottom: 0,
  },
  logoStyle: {
    height: 60,
    width: 60
  }
}

export {WorkoutHistory};
