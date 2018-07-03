import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectWorkoutForm from '../components/SelectWorkoutForm';
import * as Actions from '../actions';

import { strings } from '../../locales/i18n';

class NewSessionContainer extends Component {
  static navigationOptions = () => (
    {
      header: null,
      title: strings('stack.session_tab'),
    }
  );

  startSession = (workoutId) => {
    this.props.actions.startSession(workoutId);
  };

  render() {
    return (
      <View style={styles.container}>
        <SelectWorkoutForm
            fullWoList={this.props.listWorkouts}
            ids={this.props.ids}
            startSession={this.startSession}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#37474F',
    alignItems: 'center', 
    justifyContent: 'center', 
  },
});

function mapStateToProps(state) {
    return {
        listWorkouts: state.listWorkout.listWorkouts,
        ids: state.listWorkout.ids,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSessionContainer);
