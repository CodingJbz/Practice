/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component , PropTypes } from 'react';
import {
    View,
    Text
} from 'react-native';
var name = '小明';
var age = '22';
export {name , age};

export default class PropsTest extends Component {
    static defaultProps={
        pName:'默认小花'
    }

    static propTypes={
        name:PropTypes.string,
    }
    render(){
        
        return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello.{this.props.pName}</Text>
    }
}