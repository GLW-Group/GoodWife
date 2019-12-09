import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text, Image } from "@tarojs/components-rn";
// import { connect } from '@tarojs/redux'

// import { add, minus, asyncAdd } from '../../actions/counter'

import indexStyleSheet from "./index_styles";
import dishes from "../../data/default_dishes";

// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   }
// }))
var _styleSheet = indexStyleSheet;
let Index = class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View style={_styleSheet["index"]}>
        {}
        {}
        {dishes.map(({ name, pic, note }, index) => <View key={index} style={{
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: 'grey'
      }} hoverStyle={{ borderColor: 'red' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Image style={{ height: 80, width: 80 }} src={pic} />
                <View style={{ margin: 5 }}>
                  <Text style={{ flex: 1, fontSize: 20 }}>{name}</Text>
                  <Text style={{ flex: 3, fontSize: 14, color: 'grey' }}>{note}</Text>
                </View>
              </View>
            </View>)}
      </View>;
  }
};
Index.config = {
  navigationBarTitleText: '首页'
};


export default Index;