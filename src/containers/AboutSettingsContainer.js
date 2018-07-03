import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { strings } from '../../locales/i18n';

class AboutSettingsContainer extends Component {
    static navigationOptions = () => ({
        // header: null,
        title: strings('stack.settings_tab'),
        headerStyle: {
            backgroundColor: '#37474F',
        },
        headerTintColor: 'tomato',
    })

    render() {
        return (
            <View style={styles.container}>
                
                <Text style={styles.text}>
                    <Text style={{ fontWeight: 'bold' }}>
                        Workout Trainer{'\n'}
                    </Text>
                    version 1.0.0{'\n'}
                    by @tobive{'\n'}
                    MIT License{'\n'}
                    {'\n'}{'\n'}{'\n'}
                    Background images taken from pixabay.com{'\n'}
                    Credits to:{'\n'} 
                    ranjatm, markusspiske, xusenru
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingLeft: 15,
        backgroundColor: '#37474F',
    },
    text: {
        fontSize: 18,
        color: '#d1d1d1',
    },
});

export default AboutSettingsContainer;
