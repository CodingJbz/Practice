/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

//import HelloComponent from "./HelloComponent";

import LifeCycleComponent from "./LifeCycleComponent";
export default class setup extends Component {
    constructor(props){
        super(props);
        this.state=({
            remove:false
        });
    }
    render() {
        var view = this.state.remove?null:<LifeCycleComponent/>;
        var text = this.state.remove?"复活":"干掉";
        return (
            <View style={styles.container}>
                <Text onPress={()=>{
                    this.setState({
                        remove:!this.state.remove
                    })
                }}>
                    {text}
                </Text>
                {view}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop:50
    }
});
