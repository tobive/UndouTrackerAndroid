import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HistoryCalendar from '../components/HistoryCalendar';
import * as Actions from '../actions';
import { strings } from '../../locales/i18n';

class HistoryContainer extends Component {
    static navigationOptions = () => ({
        // header: null,
        title: strings('stack.progress_tab'),
        headerStyle: {
            backgroundColor: '#37474F',
        },
        headerTintColor: 'tomato',
    })

    render() {
        return (
            <View>
                <HistoryCalendar 
                    listSessions={this.props.listSessions}
                    listDates={this.props.listDates}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        listSessions: state.listSession.listSessions,
        listDates: state.listSession.listDates,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);
