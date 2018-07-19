import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import ExerciseCheckboxForm from './ExerciseCheckboxForm';
import GeneralButton from './GeneralButton';
import { strings } from '../../locales/i18n';

class TheSessionForm extends Component {
    constructor(props) {
        super(props);
        let obj = {
            checked: {},
            savedData: {},
        };
        for (let i = 0; i < this.props.data.exercises.length; i++) {
            obj.checked[i] = false;
            obj.savedData[i] = {};
        }
        this.state = { ...obj };
    }

    finishSession = () => {
        this.props.finishSession(this.state);
    }

    changeListExsToProps = () => {        
        return this.props.data.exercises.map(item => {   
            const attr = Object.keys(item);
            const arrCounters = attr.filter(ctr => {
                return item[ctr] === true;
            });            
            return {
                exerciseName: item.exerciseName,
                exCounters: arrCounters,
            };
        });
    }

    checkForm = (val, idBox) => {
        if (this.state.checked[idBox] === false) {
            let checkedObj = { ...this.state.checked };
            checkedObj[idBox] = true;
            let savedObj = { ...this.state.savedData };
            savedObj[idBox] = val;
            this.setState({
                checked: checkedObj,
                savedData: savedObj,
            });
        } else {
            let checkedObj = { ...this.state.checked };
            checkedObj[idBox] = false;
            let savedObj = { ...this.state.savedData };
            savedObj[idBox] = {};
            this.setState({
                checked: checkedObj,
                savedData: savedObj,
            });
        }
    };

    render() {
        const listProps = this.changeListExsToProps();

        return (
            <ScrollView 
                style={styles.container}
                keyboardShouldPersistTaps='handled'
            >
                <View style={styles.checkboxContainer}>              
                    {listProps.map((item, idx) => {
                        return (
                            <ExerciseCheckboxForm
                                key={`ecb-${idx}`} 
                                exerciseName={item.exerciseName}
                                exCounters={item.exCounters}
                                checkForm={this.checkForm}
                                idBox={idx}
                                checked={this.state.checked[idx]}
                            />
                        );
                    })}
                    <View style={styles.buttonContainer}>
                        <GeneralButton
                            title={strings('session.the.finish_button')}
                            onPress={() => this.finishSession()}
                            backgroundColor='#FF6347'
                            backgroundDarker='#A3402E'
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: '#37474F',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    buttonContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 60,
    },
    checkboxContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
    },
});

export default TheSessionForm;
