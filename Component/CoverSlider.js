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
    View
} from 'react-native';

// 计时器
var TimerMixin = require('react-timer-mixin');
// 尺寸计算
var Dimensions = require('Dimensions');


//获取可视窗口的宽高
var { width, height, scale } = Dimensions.get('window');

var itemHeight = 100,
    // TODO 为什么说这是一种不科学的做法
    picFormat = '_640x200xzq75.jpg';
    //IP6
    if (height === 375){
        itemHeight = 117;
        picFormat = '_750x234xzq75.jpg';

    }else if(height === 414){ // IP6 plus
        itemHeight = 99.6;
        picFormat = '_1080x260xzq75.jpg';
    }


export default class CoverSlider extends Component {


    //虽然组件的原则就是模块化，彼此之间相互独立，但是有时候不同的组件之间可能会共用一些功能，
    // 共享一部分代码。所以 React 提供了 mixins 这种方式来处理这种问题。

    //Mixin 就是用来定义一些方法，使用这个 mixin 的组件能够自由的使用这些方法（就像在组件中定义的一样），
    //所以 mixin 相当于组件的一个扩展，在 mixin 中也能定义“生命周期”方法。
    // ES6 舍弃了
    mixin = [TimerMixin]


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
    static defaultProps = {
        width: width,
        indicatorColor: '#ffffff',
        inactiveIndicatorColor: '#ffffff',
        timer : 5000,
        api : 'http://ald.taobao.com/recommend.htm?appId=lb-tms-1261576-40550'
    }

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
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            currentX: 0,
            activePage: 0,
            dataSource : []
        };
    }

    // 拉取投放的数据
    fetchData() {
        // Promise模式
        fetch(this.props.api)
            .then((response)=>response.json())
            .then((responseData)=>{
                this.setState({ dataSource:responseData.data });
            })

            .done(()=>{this.start()});
    }

    //开始执行滚动操作
    start(){

        var scrollView = this.refs.scrollView;
        var length = this.state.dataSource.length;

        this.timer = setInterval(()=>{

            var activePage;

            if( (this.state.activePage + 1)  >= length){
                activePage = 0;
            }else{
                activePage = this.state.activePage + 1;
            }

            var currentX = this.props.width * activePage;
            scrollView.scrollResponderScrollTo({x:currentX,y:0});

            this.setState({
                currentX: currentX,
                activePage: activePage
            });

        }, this.props.timer)
    }

    //获取图片数据
    getImage(url){
        if(url.search('https')=== -1){
            return('https:' + url);
        }else {
            return(url);
        }
    }

    //渲染单个图片
    renderItems(data) {

        //map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。
        return data.map ((item,i)=> {
            var imgUrl = this.getImage(item.img);
            return(<Image key={i} style={{width:width,height:itemHeight}} source={{uri:imgUrl + picFormat}}/>)
        })
    }


    // 渲染轮播图
    render() {
        var data = this.state.dataSource
        return (
            <View style={styles.container}>
                <ScrollView
                    ref = 'scrollView'
                    contentContainerStyle={styles.container}
                    automaticallyAdjustContentInsets={false}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onAnimtionEnd}>
                    {this.renderItems(data)}
                </ScrollView>
                {this.renderPageControl()}
            </View>
        );
    }

    componentDidMount() {
        this.fetchData();
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
    container: {
        flex: 1
    },

    pageIndicator: {
        position : 'absolute',
        backgroundColor : 'transparent',
        left : 12,
        bottom : -10,
        flexDirection: 'row'
    }
});