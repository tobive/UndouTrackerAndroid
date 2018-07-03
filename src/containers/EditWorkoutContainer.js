import React, { Component } from 'react';
import { View, Text, TextInput, Platform } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { STATUS_BAR_HEIGHT } from '../config';
import GeneralButton from '../components/GeneralButton';
import SaveWorkoutForm from '../components/SaveWorkoutForm';
import * as Actions from '../actions';
import { strings } from '../../locales/i18n';

class EditWorkoutContainer extends Component {
  static navigationOptions = () => ({
    // header: null,
    title: strings('stack.exercise_tab'),
    headerStyle: {
        backgroundColor: '#37474F',
    },
    headerTintColor: 'tomato',
  })

  saveData = (data) => {
    this.props.actions.saveWorkoutData(data, this.props.id);
  }

  render() {
    if (this.props.value) {
      return (
        <SaveWorkoutForm
          value={this.props.value}
          saveData={this.saveData}
          fullExList={this.props.fullExList}
          ids={this.props.ids}
        />
      );
    }
    return false;
  }
}

function mapStateToProps(state) {
  return {
    value: state.editWorkout.value,
    id: state.editWorkout.id,
    fullExList: state.listExercise.listExercises,
    ids: state.listExercise.ids,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkoutContainer);
