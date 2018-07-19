import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import TransparentButton from '../components/TransparentButton';
import { strings } from '../../locales/i18n';

const { height, width } = Dimensions.get('screen');

class MainExerciseScreen extends Component {
  static navigationOptions = () => ({
    header: null,
    title: strings('stack.exercise_tab'),
  })

  componentWillMount() {
    this.image1 = require('../assets/bg/tmp-3.jpg');
    this.image2 = require('../assets/bg/tmp-4.jpg');
  }

  openAddNewExercise = () => {
    this.props.actions.openAddNewExercise();
  }

  openAddWorkoutSet = () => {
    this.props.actions.openAddWorkoutSet();
  }

  openListExercise = () => {
    this.props.actions.openListExercise();
  }

  openListWorkout = () => {
    this.props.actions.openListWorkout();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.panelContainer1}>
          <View style={styles.imageContainer1}>
            <Image
              style={styles.image}
              source={this.image1}
            />
          </View>
          <View style={styles.groupButton1}>
            <View style={styles.button1}>
              <TransparentButton
                title={strings('exercise.main.add_new_ex_button')}
                onPress={this.openAddNewExercise}
                width={200}
              />
            </View>
            <View>
              <TransparentButton
                title={strings('exercise.main.edit_ex_button')}
                onPress={this.openListExercise}
              />
            </View>
          </View>
        </View>
        <View style={styles.panelContainer2}>
          <View style={styles.imageContainer2}>
            <Image
              style={styles.image}
              source={this.image2}
            />
          </View>
          <View style={styles.groupButton2}>
            <View style={styles.button3}>
              <TransparentButton
                title={strings('exercise.main.add_new_wo_button')}
                onPress={this.openAddWorkoutSet}
                width={250}
              />
            </View>
            <View>
              <TransparentButton
                title={strings('exercise.main.edit_wo_button')}
                onPress={this.openListWorkout}
              />
            </View>                        
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#37474F',
  },
  panelContainer1: {
    height: (height - 140) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  imageContainer1: {
    height: (height - 140) / 2,
    width: width,
    paddingTop: 10,
    paddingBottom: 10,
    // paddingLeft: 10,
    // paddingRight: 10,
    // borderWidth: 2,
    // borderColor: 'blue',          
  },
  image: {
    flex: 1, 
    resizeMode: 'center', 
    height: undefined,
    width: undefined,
    alignSelf: 'stretch',
    borderRadius: 10, 
  },
  groupButton1: {
    height: 150,
    width: 170,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: { 
    marginTop: 20, 
    marginBottom: 20, 
  },
  panelContainer2: {
    height: (height - 140) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  imageContainer2: {
    height: (height - 140) / 2,
    width: width,
    paddingTop: 10,
    paddingBottom: 10,
    // paddingLeft: 10,
    // paddingRight: 10,
    // borderWidth: 2,
    // borderColor: 'red',
  },
  groupButton2: {
    height: 150,
    width: 170,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button3: { 
    marginBottom: 20, 
  },
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(MainExerciseScreen);
