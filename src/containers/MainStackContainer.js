import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import MainStack from '../stacks/MainStack';

const addListener = createReduxBoundAddListener('root');

class MainStackContainer extends Component {

    render() {
        return (
            <MainStack
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.navigationState,
                    addListener
                })}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        navigationState: state.nav,
    };
}

export default connect(mapStateToProps)(MainStackContainer);
