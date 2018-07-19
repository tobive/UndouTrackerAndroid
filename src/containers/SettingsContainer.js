import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Actions from '../actions';
import { strings } from '../../locales/i18n';

class SettingsContainer extends Component {
  static navigationOptions = () => ({
    // header: null,
    title: strings('stack.settings_tab'),
    headerStyle: {
        backgroundColor: '#37474F',
    },
    headerTintColor: 'tomato',
  })

  onPressLanguage = () => {
    this.props.actions.openSettingsLanguage();
  }

  onPressHistory = () => {
    this.props.actions.openSettingsHistory();
  }

  onPressAbout = () => {
    this.props.actions.openSettingsAbout();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.panel}>
          <TouchableHighlight 
            onPress={this.onPressLanguage}
            underlayColor='#5b717a'
          >
            <View style={styles.touch}>
              <View><Text style={styles.text}>{strings('settings.language.language')}</Text></View>
              <View style={styles.arrow}><Ionicons name={'ios-arrow-forward'} size={25} color='#d1d1d1' /></View>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.panel}>
          <TouchableHighlight 
            onPress={this.onPressHistory}
            underlayColor='#5b717a'
          >
            <View style={styles.touch}>
              <View><Text style={styles.text}>{strings('settings.history.history')}</Text></View>
              <View style={styles.arrow}><Ionicons name={'ios-arrow-forward'} size={25} color='#d1d1d1' /></View>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.panel}>
          <TouchableHighlight 
            onPress={this.onPressAbout}
            underlayColor='#5b717a'
          >
            <View style={styles.touch}>
              <View><Text style={styles.text}>{strings('settings.about.about')}</Text></View>
              <View style={styles.arrow}><Ionicons name={'ios-arrow-forward'} size={25} color='#d1d1d1' /></View>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37474F',
  },
  panel: {
    flexDirection: 'column',
  },
  touch: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#d1d1d1',
    marginLeft: 15,
  },
  arrow: {
    marginRight: 10,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(SettingsContainer);
