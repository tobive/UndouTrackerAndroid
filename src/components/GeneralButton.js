import React, { Component } from 'react';
import AwesomeButton from 'react-native-really-awesome-button';

class GeneralButton extends Component {
  render() {
    return (
      <AwesomeButton
        onPress={this.props.onPress}
        backgroundColor={this.props.backgroundColor ? this.props.backgroundColor : '#1f7abf'}
        backgroundDarker={this.props.backgroundDarker ? this.props.backgroundDarker : '#1a639b'}
        textColor={this.props.textColor ? this.props.textColor : '#fff'}
        textSize={this.props.textSize ? this.props.textSize : 16}
        width={this.props.width}
        style={this.props.style}
      >
        {this.props.title}
      </AwesomeButton>
    );
  }
}

export default GeneralButton;
