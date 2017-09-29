/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class LifeCycleComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }

    //组件装在之前
    componentWillMount(){
        console.log("------componentWillMount------");
    }
    //装载完成
    componentDidMount(){
        console.log("------componentDidMount------");
    }

    //
    componentWillReceiveProps(nextProps){
        console.log("------componentWillReceiveProps------");
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("------shouldComponentUpdate------");
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("------componentWillUpdate------");
    }

    componentDidUpdate( prevProps,  prevState){
        console.log("------componentDidUpdate------");
    }

    //移除
    componentWillUnmount(){
        console.log("------componentWillUnmount------");
    }

    render() {
        console.log("------render------");
        return (
           <View>
               <Text style={{fontSize:20,backgroundColor:'red'}}
                     onPress={()=>{
                         this.setState({count:this.state.count+1});
                     }}
               >
               打我呀
               </Text>
               <Text style={{fontSize:20}}>
                   被打了{this.state.count}次
               </Text>
           </View>

        );
    }
}
