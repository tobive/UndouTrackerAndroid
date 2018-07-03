import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import t from 'tcomb-form-native';
import GeneralButton from './GeneralButton';
import { strings } from '../../locales/i18n';

const Form = t.form.Form;

class SelectWorkoutForm extends Component {
    turnStateToOptions = (arrOfIds, arrOfWos) => {
        const options = {};
        for (let i = 0; i < arrOfIds.length; i++) {
            options[arrOfIds[i]] = arrOfWos[i].workoutName;
        }
        return options;
    };

    startSession = () => {
        const value = this._form.getValue();
        if (value) {
            this.props.startSession(value.workouts);
        } else {
            alert(strings('session.new.alert_no_workout'));
        }       
    };
    
    render() {
        const selectOptions = this.turnStateToOptions(this.props.ids, this.props.fullWoList);
        const Workout = t.enums(selectOptions);
        const ListWorkouts = t.struct({
            workouts: Workout
        });
        const options = {
            fields: {
                workouts: {
                    item: {
                        options: selectOptions
                    }
                }
            },
        };
        
        const value = {
            workouts: []
        };

        return (
            <View style={styles.container}>
                <Text>{strings('session.new.text_1')}</Text>
                <Form
                    ref={c => this._form = c}
                    type={ListWorkouts}
                    value={value}
                    options={options}
                />
                <View style={styles.buttonContainer}>
                    <GeneralButton
                        title={strings('session.new.start_button')}
                        onPress={() => this.startSession()}
                        backgroundColor={'#D1D100'}
                        backgroundDarker={'#8C8C00'}
                        textColor={'#444444'}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    buttonContainer: {
        alignItems: 'center'
    }
});

export default SelectWorkoutForm;
