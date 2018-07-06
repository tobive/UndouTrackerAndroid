import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import CheckBox from 'react-native-checkbox-heaven'; 

class ExerciseCheckboxForm extends Component {
    constructor(props) {
        super(props);
        const ctrs = this.props.exCounters;
        const obj = {};
        for (let i = 0; i < ctrs.length; i++) {
            obj[ctrs[i]] = 0;
        }
        this.state = { ...obj };
    }

    onClick = (val) => {
        this.props.checkForm(this.state, this.props.idBox);
    };

    getCounterValue = (ctr, val) => {
        const obj = {};
        obj[ctr] = val;
        this.setState({ ...obj });
    };
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.exerciseHeader}>
                    <View style={styles.exerciseName}>
                        <Text style={styles.nameText}>{this.props.exerciseName}</Text>
                    </View>
                    <View style={styles.checkbox}>
                        <CheckBox 
                            onChange={this.onClick.bind(this)}
                            iconName='faCircleFill'
                            uncheckedColor='white'
                            checkedColor='tomato'
                            checked={this.props.checked}
                            iconSize={38}
                        />
                    </View>
                </View>                
                <View style={styles.exerciseDetail}>
                    {this.props.exCounters.map((ctr, idx) => {
                        return (
                            <View style={styles.counter} key={`vi-${idx}`}>
                                <View
                                    style={styles.counterLabel}
                                >
                                    <Text style={styles.counterLabelText}>{ctr}</Text>
                                </View>
                                <View 
                                    style={this.props.checked 
                                        ? styles.textBoxGreyed : styles.textBox}
                                >
                                    <TextInput
                                        style={this.props.checked 
                                            ? styles.counterInputGreyed
                                            : styles.counterInput}
                                        onChangeText={val => this.getCounterValue(ctr, val)}
                                        editable={!this.props.checked}
                                        value={this.state[ctr] + ''}
                                    />
                                </View>
                            </View>
                        );
                    })}
                </View>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 280,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        paddingBottom: 5,
        
    },
    exerciseHeader: {
        maxWidth: 280,
        backgroundColor: '#D1D15F',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    exerciseName: {
        flex: 2,
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 20,        
    },
    checkbox: {
        flex: 1,
        marginLeft: 30,
        marginRight: 10,
        justifyContent: 'center',
    },
    exerciseDetail: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
    },    
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#262626',
    },
    counter: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
    },
    counterLabel: {
        paddingTop: 5,
        width: 80,
    },
    counterLabelText: {
        fontSize: 18,
        color: '#262626',
    },
    counterInput: {
        width: 60,
        height: 50,
        fontSize: 20,
        color: 'black',
    },
    counterInputGreyed: {
        width: 60,
        height: 50,
        fontSize: 20,
        color: '#62676a',
    },
    textBox: {
        backgroundColor: 'white',
        borderRadius: 4,
        borderWidth: 0.5,
        width: 60,
        height: 40,
        marginLeft: 20,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBoxGreyed: {
        backgroundColor: '#ebebe4',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#a9a9a9',
        width: 60,
        height: 40,
        marginLeft: 20,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ExerciseCheckboxForm;
