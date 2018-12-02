import React, { Component } from 'react';
import { View } from 'react-native';

export class CardSection extends Component {

    styles = {
        containerStyle: {
            borderBottomWidth: 1,
            padding: 5,
            backgroundColor: '$fff',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            borderColor: '#ddd',
            position: 'relative'
        }
    }

    render() {
        return (
            <View style={this.styles.containerStyle}>
                {this.props.children}
            </View>);
    }
}
