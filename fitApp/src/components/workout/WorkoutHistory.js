import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Link } from 'react-router-native'
import { WorkoutHistoryCard } from './WorkoutHistoryCard';
import { ExerciseCard } from './ExerciseCard';
import { Rep } from './Rep';
import { Footer } from '../common';

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
      <Link to='/'>
        <Footer
          style={styles.footer}
        />
      </Link>
    </View>
  )
}

const styles = {
  container: {
    backgroundColor: '#5A5959',
    height: '97%',

  },
  logoContainer: {
    alignItems: 'center',
    width: '100%',
    bottom: 0,
  },
  logoStyle: {
    height: 60,
    width: 60
  },
  footer: {
    width: '100%',
  },
  reps: {
    flexDirection: 'row',
  }
}

export {WorkoutHistory};
