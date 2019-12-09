import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
// import { connect } from '@tarojs/redux'

// import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'
import dishes from '../../data/default_dishes'


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
class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  config = {
    navigationBarTitleText: '首页'
  }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {/* <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button> */}
        {/* <View><Text>{this.props.counter.num}</Text></View> */}
        {
          dishes.map(({ name, pic, note }, index) => (
            <View
              key={index}
              style={{
                padding: 10,
                borderStyle: 'solid',
                borderBottomWidth: 1,
                borderColor: 'grey'
              }}
              hoverStyle={{ borderColor: 'red' }}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Image
                  style={{ height: 80, width: 80,  }}
                  src={pic}
                />
                <View style={{ margin: 5 }}>
                  <Text style={{ flex: 1, fontSize: 20 }}>{name}</Text>
                  <Text style={{ flex: 3, fontSize: 14, color: 'grey' }}>{note}</Text>
                </View>
              </View>
            </View>
          ))
        }
      </View>
    )
  }
}

export default Index
