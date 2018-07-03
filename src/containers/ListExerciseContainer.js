import React, { Component } from 'react';
import { Alert, Dimensions, ScrollView, StyleSheet,
  TouchableHighlight, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectionPill from '../components/SelectionPill';
import * as Actions from '../actions';
import { strings } from '../../locales/i18n';

const { height, width } = Dimensions.get('window');

class ListExerciseContainer extends Component {
  static navigationOptions = () => ({
    // header: null,
    title: strings('stack.exercise_tab'),
    headerStyle: {
        backgroundColor: '#37474F',
    },
    headerTintColor: 'tomato',
  })

  openExercise = (id) => {
    this.props.actions.openExercise(id);
  }

  deleteExercise = (id, name) => {
    Alert.alert(
      strings('exercise.list_ex.alert_warning'),
      strings('exercise.list_ex.alert_delete_info', { name }),
      [
        { 
          text: strings('exercise.list_ex.alert_delete_cancel'), 
          onPress: () => false, 
          style: 'cancel' 
        },
        { 
          text: strings('exercise.list_ex.alert_delete_delete'), 
          onPress: () => this.props.actions.deleteExercise(id) 
        }
      ]
    );
  }

  render() {
    const listExs = this.props.listExercises;
    const listIds = this.props.ids;
    if (listExs) {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.listContainer}>
          {
            listExs.map((ex, id) => {
              return (
                <View key={`li-${id}`} style={styles.exerciseContainer}>
                  <View style={styles.nameContainer}>
                    <SelectionPill 
                      key={`sel-${id}`} 
                      open={() => this.openExercise(listIds[id])} 
                      name={ex.exerciseName} 
                    />
                  </View>                  
                  <View style={styles.deleteContainer}>
                    <TouchableHighlight
                      key={`but-${id}`}
                      onPress={() => this.deleteExercise(listIds[id], ex.exerciseName)}
                    >
                      <View>
                        <Ionicons name={'ios-trash'} size={25} color={'white'} />
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              );
            })
          }
          </View>
        </ScrollView>
      );
    }
    return false;
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#37474F', 
    maxWidth: width 
  },
  listContainer: { 
    flex: 1, 
    maxWidth: width, 
  },
  exerciseContainer: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 15,
    maxWidth: width
  },
  nameContainer: {
    marginLeft: 10,
    // marginRight: 10,
    maxWidth: width - 70,
  },
  deleteContainer: { 
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: 'red',
    marginRight: 10,
    marginLeft: 10,
  },
});

function mapStateToProps(state) {
    return {
      listExercises: state.listExercise.listExercises,
      ids: state.listExercise.ids
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListExerciseContainer);
