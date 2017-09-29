/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

export default class HelloComponent extends Component {
    render() {
        return (
            <Text style={styles.welcome}>
                Welcome to React Native!
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        backgroundColor:'red'
    }
});
