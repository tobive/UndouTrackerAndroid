import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GeneralButton from '../components/GeneralButton';
import * as Actions from '../actions';
import { strings } from '../../locales/i18n';

class MainProgressContainer extends Component {
  static navigationOptions = () => ({
    header: null,
    title: strings('stack.progress_tab'),
    headerStyle: {
      backgroundColor: '#37474F'
    },
  })

  openHistory = () => {
    this.props.actions.openHistory();
  }

  render() {
    return (
      <View style={styles.historyButton}>
        <GeneralButton
          title={strings('progress.main.history_button')}
          onPress={this.openHistory}
          backgroundColor={'#D1D100'}
          backgroundDarker={'#8C8C00'}
          textColor={'#444444'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  historyButton: { 
    flex: 1, 
    backgroundColor: '#37474F',
    alignItems: 'center', 
    justifyContent: 'center', 
  },
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(MainProgressContainer);
