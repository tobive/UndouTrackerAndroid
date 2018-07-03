import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import t from 'tcomb-form-native';
import GeneralButton from '../components/GeneralButton';
import { strings } from '../../locales/i18n';

const Form = t.form.Form;

// Set Form GLOBALLY
t.form.Form.stylesheet.textbox.normal.backgroundColor = '#e8e8e8';
t.form.Form.stylesheet.controlLabel.normal.color = '#d1d1d1';
t.form.Form.stylesheet.pickerContainer.normal.backgroundColor = '#e8e8e8';
t.form.Form.stylesheet.button.backgroundColor = '#D1D100';
t.form.Form.stylesheet.button.borderColor = '#D1D100';
t.form.Form.stylesheet.buttonText.color = '#1e1e1e';

class SaveWorkoutForm extends Component {

  // Return array of pairing ids and Name of exercises from state
  turnStateToOptions = (arrOfIds, arrOfExs) => {
    const options = [];
    for (let index in arrOfIds) {
      options[index] = {
        value: arrOfIds[index],
        text: arrOfExs[index].exerciseName
      };
    }
    return options;
  }

  saveForm = () => {
    const value = this._form.getValue();
    if (value) {
      this.props.saveData(value);
    } else {
      alert(strings('exercise.add_wo.alert_null_save'));
    }
  }

  render() {
    if ((this.props.fullExList) && (this.props.ids)) {
      const Exercise = t.enums.of(this.props.ids);

      const Workout = t.struct({
        workoutName: t.String,
        exercises: t.list(Exercise)
      });

      const selectOptions = this.turnStateToOptions(this.props.ids, this.props.fullExList);

      const options = {
        i18n: {
          required: '',
          add: strings('exercise.add_wo.add_button'),   // add button
          remove: '✘',  // remove button
          up: '↑',      // move up button
          down: '↓'     // move down button
        },
        fields: {
          workoutName: {
            label: strings('exercise.add_wo.tcomb_wo_name'),
            error: strings('exercise.add_wo.label_name_alert'),
          },
          exercises: {
            label: strings('exercise.add_wo.tcomb_exercises'),
            item: {
              label: strings('exercise.add_wo.tcomb_exercise'),
              options: selectOptions
            }
          }
        },
      };

      // Remove missing exercises to render only saved exercises 
      let value = {
        workoutName: this.props.value.workoutName,
      };
      value.exercises = this.props.value.exercises.filter(ex => {
        return this.props.ids.indexOf(ex) > -1;
      });

      return (
        <ScrollView style={styles.container}>
          <Form
            ref={c => this._form = c}
            type={Workout}
            value={value}
            options={options}
          />
          <View style={styles.saveButton}>
            <GeneralButton
              title={strings('exercise.add_wo.save_button')}
              onPress={() => this.saveForm()}
              textSize={18}
            />
          </View>
        </ScrollView>
      );
    } else {
      return false;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 20,
    backgroundColor: '#37474F'
  },
  saveButton: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 30, 
    marginBottom: 20,
  },
});

export default SaveWorkoutForm;
