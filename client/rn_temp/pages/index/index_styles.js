
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "index": {
    "flexGrow": 1,
    "flexShrink": 1,
    "flexBasis": 0,
    "justifyContent": "flex-start",
    "marginTop": scalePx2dp(10),
    "marginRight": scalePx2dp(10),
    "marginBottom": scalePx2dp(10),
    "marginLeft": scalePx2dp(10)
  }
})
