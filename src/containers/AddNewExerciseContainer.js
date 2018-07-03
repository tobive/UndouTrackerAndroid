import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SaveExerciseForm from '../components/SaveExerciseForm';
import * as Actions from '../actions';
import { strings } from '../../locales/i18n';

class AddNewExerciseContainer extends Component {
  static navigationOptions = () => ({
      // header: null,
      title: strings('stack.exercise_tab'),
      headerStyle: {
          backgroundColor: '#37474F',
      },
      headerTintColor: 'tomato',
  })

  addAnotherCounter = (value) => {
    this.props.actions.addAnotherCounter(value);
  }

  render() {
    return (
      <SaveExerciseForm 
        data={this.props.data} 
        saveData={this.props.actions.saveNewExerciseData}
        addAnotherCounter={this.addAnotherCounter} 
      />
    );
  }
}

function mapStateToProps(state) {
  return {
      data: state.saveNewExercise,
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewExerciseContainer);
