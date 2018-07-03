import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

class TransparentButton extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <View
                    style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 5,
                        paddingRight: 5,                        
                        width: this.props.width,
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        borderRadius: 5,
                        borderColor: this.props.borderColor ? this.props.borderColor : '#d3d3d3',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text 
                        style={{ 
                            color: this.props.color ? this.props.color : '#f5f5f5',
                            fontSize: this.props.fontSize ? this.props.fontSize : 20, 
                        }}
                    >
                        {this.props.title}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

export default TransparentButton;
