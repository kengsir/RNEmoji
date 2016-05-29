/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @ken
 */
"use strict";

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TabBarIOS,
    NavigatorIOS,
    View
} from 'react-native';

import Square from './View/Square'

class RNEmoji extends Component {

    /**
     * 初始化导航器
     * @param route 路由的属性
     * @param navigator 导航器
     * @returns {XML} 渲染组件
     * @private
     */
    // _renderScene(route, navigator) {
    //     var Component = route.component;
    //     return (
    //         <Component
    //             {...route.props}
    //             navigator={navigator}
    //             route={route}/>
    //     );
    // }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab: 'square'
        };
    }

    changeTab(tabName){
        //TODO 断点这个this代表的是什么
        this.setState({
            selectedTab:tabName
        });
    }

    render() {
        return (
            <TabBarIOS tintColor="orange">
                <TabBarIOS.Item
                    title="收藏"
                    icon={require('image!icon_tabbar_misc')}
                    onPress={ ()=>this.changeTab('collect') }
                    //selected 一个bool值,这个属性决定了子视图是否可见。如果你看到一个空白的页面，很可能是没有选中任何一个标签。
                    selected={this.state.selectedTab === 'collect'}>
                    <NavigatorIOS
                        style={styles.container}
                        barTintColor={'yellow'}
                        //renderScene={this._renderScene}
                        initialRoute={{component:Square,title:'收藏',leftButtonIcon:require('image!icon_tabbar_onsite')}}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="广场"
                    icon={require('image!icon_tabbar_misc')}
                    onPress={()=>this.changeTab("square")}
                    selected={this.state.selectedTab === 'square'}>
                    <NavigatorIOS
                        style={styles.container}
                        barTintColor={'yellow'}
                        //renderScene={this._renderScene}
                        initialRoute={{component: Square,title: '鬼畜表情'}}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="搜索"
                    icon={require('image!icon_tabbar_misc')}
                    onPress={()=>this.changeTab("sousuo")}
                    selected={this.state.selectedTab === 'sousuo'}>
                    <NavigatorIOS
                        style={styles.container}
                        barTintColor={'yellow'}
                        //renderScene={this._renderScene}
                        initialRoute={{component: Square,title: '搜索'}}/>
                </TabBarIOS.Item>

            </TabBarIOS>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

AppRegistry.registerComponent('RNEmoji', () => RNEmoji);