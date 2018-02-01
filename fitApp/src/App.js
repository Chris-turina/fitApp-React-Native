import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { Button, Header } from './components/common'
import { WorkoutSelect,
         WorkoutPage,
         Home,
         WorkoutHistory,
         NameWorkout } from './components/workout/';
import { defaultState } from './defaultState';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        masterWorkoutList: [],
        masterWorkout: [],
        workoutName:'',
        exerciseName:'',
        sets:[],
        setNumber: 1,
        reps: 0,
      };

  }

componentWillMount(){
  let newmasterWorkoutList = this.state.masterWorkoutList;
  // console.log(newmasterWorkoutList);
  newmasterWorkoutList = defaultState.masterWorkoutList;
  // console.log(newmasterWorkoutList);
  this.setState({masterWorkoutList: newmasterWorkoutList})
}


  createNewWorkout(){
    let newWorkoutArr = this.state.masterWorkout;
  }

  createNewExercise(newExercise) {
    // console.log(newExercise);
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
    let newMasterWorkoutList = this.state.masterWorkoutList;
    let newMasterWorkout = this.state.masterWorkout;
    let newSetArr = this.state.sets.slice();
    let newExerciseName = this.state.exerciseName;
    let newReps = this.state.reps;
    let newSetNumber = this.state.setNumber;
    newSetArr.push(newReps);
    newMasterWorkout.push({exerciseName: newExerciseName, sets: newSetArr})
    newMasterWorkoutList.push(newMasterWorkout);
    this.setState({reps: newReps,
                   setNumber: newSetNumber,
                   masterWorkoutList: newMasterWorkoutList,
                   masterWorkout: newMasterWorkout,
                   sets: newSetArr,
                   exerciseName: newExerciseName
                 })
   newMasterWorkout = [];
   newExerciseName = '';
   newSetArr = [];
   newReps = 0;
   newSetNumber = 1;
   this.setState({reps: newReps,
                  setNumber: newSetNumber,
                  masterWorkoutList: newMasterWorkoutList,
                  masterWorkout: newMasterWorkout,
                  sets: newSetArr,
                  exerciseName: newExerciseName})


  }

  addWorkoutName(){
  }


  render() {
    // console.log(this.state);
    return (
      <NativeRouter>
        <View style={styles.body}>
          <Header />

          <Route exact path='/'
          render={()=>
              <Home newWorkout={this.createNewWorkout.bind(this)} />}
          />

          <Route path='/WorkoutPage' render={()=>
            <WorkoutPage
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

          <Route path='/WorkoutHistory' render={()=>
            <WorkoutHistory
              masterList={this.state.masterWorkoutList}
            />}
          />

          <Route path='/NameWorkout' render={()=>
            <NameWorkout
              workoutName={this.addWorkoutName.bind(this)}/>} />

        </View>
      </NativeRouter>
    );
  }
}

const styles = {
  body: {
    backgroundColor: '#800606',
    height: '100%',
    borderColor: 'white',
  },
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
