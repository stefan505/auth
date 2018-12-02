import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

export class Input extends Component {

    constructor(props) {
        super(props);
    }

    styles = {
        inputStyle: {
            color: '#000',
            paddingRight: 5,
            paddingLeft: 5,
            fontSize: 18,
            flex: 2
          },
          labelStyle: {
            fontSize: 18,
            paddingLeft: 20,
            flex: 1
          },
          containerStyle: {
            height: 40,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
          }
    }

    render() {
        return (
            <View style={this.styles.containerStyle}>
                <Text style={this.styles.labelStyle}>{this.props.label}</Text>
                <TextInput
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={false}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    style={this.styles.inputStyle}
                />
            </View>
        );
    }
}
