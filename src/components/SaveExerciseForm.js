import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import t from 'tcomb-form-native';
import GeneralButton from '../components/GeneralButton';
import { strings } from '../../locales/i18n';

const transform = require('tcomb-json-schema');

const Form = t.form.Form;

// Set Form Style GLOBALLY
t.form.Form.stylesheet.textbox.normal.backgroundColor = '#e8e8e8';
t.form.Form.stylesheet.textbox.error.backgroundColor = '#e8e8e8';
t.form.Form.stylesheet.controlLabel.normal.color = '#d1d1d1';

class SaveExerciseForm extends Component {

  saveForm = () => {
    const value = this._form.getValue();
    if (value) {
      this.props.saveData(value)
    } else {
      alert(strings('exercise.add_ex.alert_null_save'));
    }
  }

  // Function: Change state (json object) into json-schema for tcomb
  turnJsonToSchema = (json) => {
    let properties = {};
    for (let key in json) {
      properties[key] = {
        type: typeof json[key]
      };
    }
    const jsonSchema = {
      type: 'object',
      properties,
      required: ['exerciseName']
    };

    return jsonSchema;
  }

  addAnotherCounter = () => {
    const val = this._form.getValue();
    if (val) {
      if (val.additionalCounter === null) return;
      const counterName = val.additionalCounter;
      const copyState = Object.assign({}, this.props.data);
      copyState.exerciseName = val.exerciseName ? val.exerciseName : '';
      copyState[counterName] = false;
      // Put additionalCounter in the bottom
      delete copyState.additionalCounter;
      copyState.additionalCounter = '';
      this.props.addAnotherCounter(copyState);
    } else {
      alert(strings('exercise.add_ex.alert_add_counter'));
    }
  }

  render() {
    const jsonSchema = this.turnJsonToSchema(this.props.data);
    jsonSchema.properties.additionalCounter = {
      type: 'string'
    };
    const Exercise = transform(jsonSchema);
    const options = {
      i18n: {
        optional: strings('exercise.add_ex.tcomb_optional'),
        required: ''
      },
      fields: {
        exerciseName: {
          multiline: true,
          label: strings('exercise.add_ex.tcomb_ex_name'),
          error: strings('exercise.add_ex.label_name_alert'),
        },
        additionalCounter: {
          label: strings('exercise.add_ex.tcomb_additional_counter'),
          help: strings('exercise.add_ex.tcomb_help_optional')
        }
      },
    };

    return (
      <ScrollView style={styles.container}>
        <Form
          ref={c => this._form = c}
          type={Exercise}
          value={this.props.data}
          options={options}
        />
        <GeneralButton
          title={strings('exercise.add_ex.add_counter_button')}
          onPress={this.addAnotherCounter}
          backgroundColor={'#D1D100'}
          backgroundDarker={'#8C8C00'}
          textColor={'#444444'}
          textSize={13}
          width={170}
          style={{ paddingLeft: 5, paddingRight: 5 }}
        />
        <View style={styles.saveButton}>
          <GeneralButton
            title={strings('exercise.add_ex.save_button')}
            onPress={this.saveForm}
            textSize={18}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 20,
    backgroundColor: '#37474F',
  },
  saveButton: {
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 30, 
    marginBottom: 30,
  },
});

export default SaveExerciseForm;
