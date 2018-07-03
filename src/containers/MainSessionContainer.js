import React, { Component } from 'react';
import { Image, Text, View, StatusBar, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TransparentButton from '../components/TransparentButton';
import * as Actions from '../actions';
import { strings } from '../../locales/i18n';

class MainSessionContainer extends Component {
  static navigationOptions = () => ({
    header: null,
    title: strings('stack.session_tab'),
  })

  componentWillMount() {
    this.image = require('../assets/bg/tmp-alt-1.jpg');
  }

  render() {
    return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" hidden={false} />
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={this.image}
            />
          </View>
          <View style={styles.panels}>
            <Text style={styles.startText}>
              {strings('session.main.start_button_def')}
            </Text>
            <TransparentButton
              width={100}
              title={strings('session.main.start_button')}
              onPress={() => this.props.actions.openNewSession()}
            />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#37474F',
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  image: { 
    flex: 1, 
    resizeMode: 'center', 
    height: undefined,
    width: undefined,
    alignSelf: 'stretch',
    borderRadius: 15,
  },
  panels: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startText: {
    color: '#d3d3d3',
    fontSize: 17,
    marginBottom: 25,
  },
});

function mapStateToProps(state) {
  return {
    something: state.language.languages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSessionContainer);
