import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { Button, Header } from './components/common'
import { WorkoutSelect, WorkoutPage, Home, WorkoutHistory } from './components/workout/';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        masterWorkoutList: [],
        masterWorkout: [],
        exerciseName:'',
        sets:[],
        setNumber: 1,
        reps: 0,
      };
  }
  createNewWorkout(){
    let newWorkoutArr = this.state.masterWorkout;
  }

  createNewExercise(newExercise) {
    console.log(newExercise);
    let newMasterWorkout = this.state.masterWorkout.slice();
    let newCurrentExercise = this.state.exerciseName;
    newCurrentExercise = newExercise;
    this.setState({exerciseName: newCurrentExercise})
  }

  nextExercise(){
    let newMasterWorkout = this.state.masterWorkout.slice();
    let newExerciseName = this.state.exerciseName;
    let newSetArr = this.state.sets.slice();
    let newReps = this.state.reps;
    let newSetNumber = this.state.setNumber;
    newSetArr.push(newReps);
    newReps = 0;
    newSetNumber = 1;
    newMasterWorkout.push({exerciseName: newExerciseName, sets: newSetArr})
    newSetArr = [];
    this.setState({masterWorkout: newMasterWorkout,
                   sets: newSetArr,
                   reps: newReps,
                   setNumber: newSetNumber});
  }

  addSet() {
    let newSetArr = this.state.sets.slice();
    let newReps = this.state.reps;
    let newSetNumber = this.state.setNumber;
    newSetArr.push(newReps);
    this.setState({sets: newSetArr})
    newReps = 0;
    newSetNumber +=1;
    this.setState({setNumber: newSetNumber, reps: newReps})
  }

  countRepsUp(){
    let newReps = this.state.reps;
    newReps+=1;
    this.setState({reps: newReps})
  }

  countRepsDown(){
    let newReps = this.state.reps;
    newReps-=1;
    this.setState({reps: newReps})
  }

  endWorkout(){
    console.log('brandon');
    let newMasterWorkoutList = this.state.masterWorkoutList;
    let newMasterWorkout = this.state.masterWorkout;
    let newSetArr = this.state.sets.slice();
    let newExerciseName = this.state.exerciseName;
    let newReps = this.state.reps;

    newSetArr.push(newReps);
    newReps = 0;
    newSetNumber = 1;
    newMasterWorkoutList.push(newMasterWorkout);
    newMasterWorkout = [];
    newSetArr = [];
    newExerciseName = '';
    this.setState({reps: newReps,
                   setNumber: newSetNumber,
                   masterWorkoutList: newMasterWorkoutList,
                   newMasterWorkout: newMasterWorkout,
                   sets: newSetArr,
                   exerciseName: newExerciseName})
  }



  render() {
    console.log(this.state);
    return (
      <NativeRouter>
        <View>
          <Header headerText="Fit App" />
            <View style={styles.viewStyle}>

            <Link style={styles.buttonStyle} to='/'>
              <Text style={styles.textStyle}>
                Home
              </Text>
            </Link>


            <Link style={styles.buttonStyle} to='/WorkoutSelect'>
              <Text style={styles.textStyle}>
                Start Workout
              </Text>
            </Link>

            <Link style={styles.buttonStyle} to='/WorkoutHistory'>
              <Text style={styles.textStyle}>
                History
              </Text>
            </Link>

          </View>
          <Route exact path='/'
          render={()=>
              <Home newWorkout={this.createNewWorkout.bind(this)} />}
          />

          <Route path='/WorkoutPage' render={()=> <WorkoutPage
            repCountUp={this.countRepsUp.bind(this)}
            repCountDown={this.countRepsDown.bind(this)}
            addSet={this.addSet.bind(this)}
            nextExercise={this.nextExercise.bind(this)}
            state={this.state}
            endWorkout={this.endWorkout.bind(this)}

            />}
          />

          <Route path='/WorkoutSelect' render={()=>
            <WorkoutSelect newExercise={this.createNewExercise.bind(this)} />}
          />

          <Route path='/WorkoutHistory' render={()=> <WorkoutHistory />} />

        </View>
      </NativeRouter>
    );
  }
}

const styles = {
  viewStyle: {
    display: 'flex',
    flexDirection: 'row'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    width: 100,
  }
}

export default App;
