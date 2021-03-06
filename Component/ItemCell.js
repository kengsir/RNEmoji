/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @ken
 */
'use strict'

//TODO ref / Promise模式,异步  / map() / mixin


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    View,
    TouchableHighlight
} from 'react-native';

//cat 数据
var MockData = [{
    img : 'http://gtms02.alicdn.com/tps/i2/TB1hbkyHpXXXXboXXXXcy0wIpXX-70-70.png',
    text : '手机圈儿',
    link : 'http://3c.m.tmall.com'
},{
    img : 'http://gtms02.alicdn.com/tps/i2/TB1hbkyHpXXXXboXXXXcy0wIpXX-70-70.png',
    text : '发现好玩',
    link : 'http://3c.m.tmall.com'
},{
    img : 'http://gtms01.alicdn.com/tps/i1/TB1wpUtHpXXXXb1XVXXcy0wIpXX-70-70.png',
    text : '我爱我家',
    link : 'http://3c.m.tmall.com'
},{
    img : 'http://gtms01.alicdn.com/tps/i1/TB1wpUtHpXXXXb1XVXXcy0wIpXX-70-70.png',
    text : '我爱我家',
    link : 'http://3c.m.tmall.com'
},{
    img : 'http://gtms01.alicdn.com/tps/i1/TB1wpUtHpXXXXb1XVXXcy0wIpXX-70-70.png',
    text : '我爱我家',
    link : 'http://3c.m.tmall.com'
}];


export default class RushCell extends Component {


    //虽然组件的原则就是模块化，彼此之间相互独立，但是有时候不同的组件之间可能会共用一些功能，
    // 共享一部分代码。所以 React 提供了 mixins 这种方式来处理这种问题。

    //Mixin 就是用来定义一些方法，使用这个 mixin 的组件能够自由的使用这些方法（就像在组件中定义的一样），
    //所以 mixin 相当于组件的一个扩展，在 mixin 中也能定义“生命周期”方法。
    // ES6 舍弃了
    //mixin = [TimerMixin]


    //对于每个组件实例来讲，这个方法只会调用一次，该组件类的所有后续应用，
    // getDefaultPops 将不会再被调用，其返回的对象可以用于设置默认的 props(properties的缩写) 值。
    //ES6下也丢弃了以下写法
    // getDefaultProps() {
    //     return {
    //         width: width,
    //         indicatorColor: '#ffffff',
    //         inactiveIndicatorColor: '#ffffff',
    //         timer : 5000,
    //         api : 'http://ald.taobao.com/recommend.htm?appId=lb-tms-1261576-40550'
    //     }
    // }
    // static defaultProps = {
    //
    // }

    //对于组件的每个实例来说，这个方法的调用有且只有一次，
    //来初始化每个实例的 state，在这个方法里，可以访问组件的 props。
    //每一个React组件都有自己的 state，其与 props 的区别在于 state只存在组件的内部，props 在所有实例中共享。

    // getInitialState 和 getDefaultPops 的调用是有区别的，
    // getDefaultPops 是对于组件类来说只调用一次，后续该类的应用都不会被调用，
    // 而 getInitialState 是对于每个组件实例来讲都会调用，并且只调一次。

    // ES 6 这个方法已经被弃用
    // getInitialState() {
    //     return {
    //         currentX : 0,
    //         activePage: 0,
    //         dataSource:[]
    //     }
    // }

    // 使用构造方法代替
    // 构造
    // constructor(props) {
    //     super(props);
    //     // 初始状态
    //     this.state = {
    //     };
    // }

    // 拉取投放的数据
    fetchData() {
    }



    //获取图片数据
    getImage(url){

    }

    renderItems(data) {
        return data.map(function(items,i){
            return (
                <TouchableHighlight >

                    <View style={styles.boxItem}>

                        <Image key={i} source={{uri : items.img}} style={styles.boxImg} />
                        <Text style={styles.boxText}>{items.text}</Text>

                    </View></TouchableHighlight>
            )
        })
    }

    render() {
        return (
            <View style={styles.box} >

                <ScrollView
                    ref = 'scrollView'
                    contentContainerStyle={styles.container}
                    automaticallyAdjustContentInsets={false}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onAnimtionEnd}>
                    {this.renderItems(MockData)}
                </ScrollView>


            </View>
        )

    }


    componentDidMount() {
    }

    //分页指示点
    renderPageControl() {

    }

    // 当滑动结束时调用
    onAnimtionEnd(e) {

    }

}

// 样式表
var styles = StyleSheet.create({
    container:{
        flex:1,

    },

    box: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom : 10,
        backgroundColor : 'white'
    },
    boxImg : {
        width : 85,
        height: 85,
        marginBottom : 10
    },
    boxItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
    },
    boxText: {
        color : '#333333',
        fontSize : 12
    }
});