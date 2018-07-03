import React, { Component } from 'react';
import { Alert, Dimensions, ScrollView, Text, StyleSheet,
  TouchableHighlight, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectionPill from '../components/SelectionPill';
import * as Actions from '../actions';
import { strings } from '../../locales/i18n';

const { height, width } = Dimensions.get('window');

class ListWorkoutContainer extends Component {
  static navigationOptions = () => ({
    // header: null,
    title: strings('stack.exercise_tab'),
    headerStyle: {
        backgroundColor: '#37474F',
    },
    headerTintColor: 'tomato',
  })

  openWorkout = (id) => {
    this.props.actions.openWorkout(id);
  }

  deleteWorkout = (id, name) => {
    Alert.alert(
      strings('exercise.list_wo.alert_warning'),
      strings('exercise.list_wo.alert_delete_info', { name }),
      [
        { 
          text: strings('exercise.list_wo.alert_delete_cancel'), 
          onPress: () => false, 
          style: 'cancel' 
        },
        { 
          text: strings('exercise.list_wo.alert_delete_delete'), 
          onPress: () => this.props.actions.deleteWorkout(id) 
        }
      ]
    );
  }

  render() {
    const listWos = this.props.listWorkouts;
    const listIds = this.props.ids;
    if (listWos) {
      return (
        <ScrollView style={styles.container}>
          <View>
          {
            listWos.map((ex, id) => {
              return (
                <View key={`view-${id}`} style={styles.listContainer}>
                  <View style={styles.nameContainer}>
                    <SelectionPill 
                      key={`sel-${id}`} 
                      open={() => this.openWorkout(listIds[id])} 
                      name={ex.workoutName} 
                    />
                  </View>
                  <View style={styles.deleteContainer}>
                    <TouchableHighlight
                      key={`but-${id}`}
                      onPress={() => this.deleteWorkout(listIds[id], ex.workoutName)}
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
    } else {
      return (
        <View />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#37474F', 
  },
  listContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  nameContainer: {
    marginLeft: 10,
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
  },
});

function mapStateToProps(state) {
    return {
        listWorkouts: state.listWorkout.listWorkouts,
        ids: state.listWorkout.ids,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListWorkoutContainer);
