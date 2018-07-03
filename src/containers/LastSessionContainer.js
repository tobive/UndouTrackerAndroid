import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';

class LastSessionContainer extends Component {
    static navigationOptions = () => ({
        // header: null,
        headerStyle: {
            backgroundColor: '#37474F',
        },
        headerTintColor: 'tomato',
    })

    render() {
        return (
            <ScrollView>
                <Text>{JSON.stringify(this.props.sessions)}</Text>
                <Text>{JSON.stringify(this.props.dates)}</Text>
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    return {
        sessions: state.listSession.listSessions,
        dates: state.listSession.listDates,
    };
}

export default connect(mapStateToProps)(LastSessionContainer);
