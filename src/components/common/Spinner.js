import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

export class Spinner extends Component {

    styles = {
        spinnerStyle: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }
      }

    render() {
        return (
            <View style={this.styles.spinnerStyle}>
                <ActivityIndicator size={this.props.size || 'large'} />
            </View>
        );
    }
}