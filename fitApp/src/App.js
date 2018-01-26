import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { Button, Header } from './components/common'
import { WorkoutSelect, WorkoutPage, Home, WorkoutHistory } from './components/workout/';




class App extends Component {


  render() {
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
          <Route exact path='/' component={Home} />
          <Route path='/WorkoutPage' component={WorkoutPage} />
          <Route path='/WorkoutSelect' component={WorkoutSelect} />
          <Route path='/WorkoutHistory' component={WorkoutHistory} />
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
