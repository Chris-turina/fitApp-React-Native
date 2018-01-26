import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { Button, Header } from './components/common'
import { WorkoutSelect, WorkoutPage, Home, WorkoutHistory } from './components/workout/';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        masterWorkoutList: [
          {workoutName: 'jim'},
        ] }
      ;
  }

  handleChangeWorkoutName(nameVal) {
    let newWorkoutNameArr = this.state.masterWorkoutList.slice();
    newWorkoutNameArr.push(nameVal);
    this.setState({masterWorkoutList: newWorkoutNameArr})
    console.log(this.state);
  }


  render() {
    console.log(this.state.masterWorkoutList);
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
          <Route exact path='/' render={()=> <Home />} />
          <Route path='/WorkoutPage' render={()=> <WorkoutPage />} />
          <Route path='/WorkoutSelect' render={()=> <WorkoutSelect changeName={this.handleChangeWorkoutName.bind(this)}/>} />
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
