/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @ken
 */

'use strict'

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ScrollView,
    View
} from 'react-native';

import CoverSlider from './../Component/CoverSlider'

export default class Square extends Component {

    render() {
        return(
            <View style={styles.container}>
                <ScrollView>
                    <CoverSlider />
                    <View style={{height : 4, backgroundColor : '#F2F2F2'}} />
                </ScrollView>
            </View>
        );
    }
}


var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
});

