import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import TheSessionForm from '../components/TheSessionForm';
import { strings } from '../../locales/i18n';

class TheSessionContainer extends Component {

    static navigationOptions = () => ({
        // header: null,
        title: strings('stack.session_tab'),
        headerStyle: {
            backgroundColor: '#37474F',
        },
        headerTintColor: 'tomato',
    })

    // Return all the exercises needed in the Workout from list of all available exercises
    getNeededExercises = () => {
        const listNeededExs = this.props.data.exercises.map((item, index) => {
            const exIndex = this.props.exerciseIds.indexOf(item);
            return this.props.listExercises[exIndex];
        });
        return listNeededExs;
    };

    finishSession = (data) => {
        const exercises = this.getNeededExercises();
        let toBeSaved = {
            workoutName: this.props.data.workoutName,
            exData: []
        };
        for (let i = 0; i < exercises.length; i++) {
            if (data.checked[i] === true) {
                const obj = {
                    exerciseName: exercises[i].exerciseName,
                    counters: data.savedData[i],
                };
                toBeSaved.exData = [...toBeSaved.exData, obj];
            }
        }
        this.props.actions.finishSession(toBeSaved);
    };
    
    render() {
        const data = {
            workoutName: this.props.data.workoutName,
            exercises: this.getNeededExercises(),
        };
        return (
            <TheSessionForm
                data={data}
                finishSession={this.finishSession}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.theSession.data,
        listExercises: state.listExercise.listExercises,
        exerciseIds: state.listExercise.ids,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TheSessionContainer);
