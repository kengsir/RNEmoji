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
    Image,
    ScrollView,
    View
} from 'react-native';

// 计时器
var TimerMixin = require('react-timer-mixin');
// 尺寸计算
var Dimensions = require('Dimensions');

export default class CoverSlider extends Component {

    // 渲染轮播图
    render() {
        return (
            <View>
                <ScrollView>

                </ScrollView>

            </View>
        );
    }
}

module.exports = CoverSlider;