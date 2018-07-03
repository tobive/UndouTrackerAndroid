import React, { Component } from 'react';
import { Alert, View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
// import { STATUS_BAR_HEIGHT } from '../config';
import SaveWorkoutForm from '../components/SaveWorkoutForm';
import { strings } from '../../locales/i18n';

class AddNewWorkoutContainer extends Component {
  static navigationOptions = () => ({
      // header: null,
      title: strings('stack.exercise_tab'),
      headerStyle: {
          backgroundColor: '#37474F',
      },
      headerTintColor: 'tomato',
  })

  saveData = (data) => {
    this.props.actions.saveNewWorkoutSetData(data);
  }

  render() {
    return (
      <SaveWorkoutForm
        value={this.props.value}
        fullExList={this.props.fullExList}
        ids={this.props.ids}
        saveData={this.saveData}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.saveNewWorkout.data,
    fullExList: state.listExercise.listExercises,
    ids: state.listExercise.ids,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewWorkoutContainer);
