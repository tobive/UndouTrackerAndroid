import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SaveExerciseForm from '../components/SaveExerciseForm';
import * as Actions from '../actions';
import { strings } from '../../locales/i18n';

class EditExerciseContainer extends Component {
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

  saveData = (value) => {
    this.props.actions.saveExerciseData(value, this.props.id);
  }

  render() {
      return (
        <SaveExerciseForm 
          data={this.props.value} 
          addAnotherCounter={this.addAnotherCounter} 
          saveData={this.saveData}
        />
      );
  }
}

function mapStateToProps(state) {
  return {
    value: state.editExercise.value,
    id: state.editExercise.id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExerciseContainer);
