import React, { Component } from 'react';
import { Alert, View, ScrollView, Text, Picker, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LanguageSetting from '../components/LanguageSetting';
import * as Actions from '../actions';
import { strings } from '../../locales/i18n';

class LanguageSettingsContainer extends Component {
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
                <LanguageSetting 
                    currLang={this.props.currLang}
                    languages={this.props.languages}
                    changeLanguage={this.props.actions.changeLanguage}
                />
            </View>            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#37474F',
    },
});

function mapStateToProps(state) {
    return {
      languages: state.language.languages,
      currLang: state.language.current
    };
  }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSettingsContainer);
