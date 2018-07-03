import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert, StyleSheet, View } from 'react-native';
import * as Actions from '../actions';
import GeneralButton from '../components/GeneralButton';
import { strings } from '../../locales/i18n';

class HistorySettingsContainer extends Component {
    static navigationOptions = () => ({
        // header: null,
        title: strings('stack.settings_tab'),
        headerStyle: {
            backgroundColor: '#37474F',
        },
        headerTintColor: 'tomato',
    })

    deleteSessionHistory = () => {
        Alert.alert(
        strings('settings.history.alert_warning'),
        strings('settings.history.alert_delete_info'),
        [
            { 
                text: strings('settings.history.alert_delete_cancel'), 
                onPress: () => false, 
                style: 'cancel' 
            },
            { 
                text: strings('settings.history.alert_delete_delete'), 
                onPress: () => this.props.actions.deleteSessionHistory() 
            }
        ]
        );
  }

    render() {
        return (
            <View style={styles.container}>
                <GeneralButton
                    title={strings('settings.history.button')}
                    onPress={this.deleteSessionHistory}
                    backgroundColor={'#FF0000'}
                    backgroundDarker={'#A30000'}
                    textColor={'white'}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#37474F',
    },
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(HistorySettingsContainer);
