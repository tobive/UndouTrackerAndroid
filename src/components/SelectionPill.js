import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

class SelectionPill extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.open}
      >
        <Text>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    // height: 40,
    padding: 10,
    backgroundColor: '#D1D15F',
    borderRadius: 5,
  },
});

export default SelectionPill;
