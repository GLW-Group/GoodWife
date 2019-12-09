# GoodWife
Grocery shopping list generator

# 启动项目
1. Install taro-cli
2. Run yarn install in client folder
3. Run yarn dev:rn in client folder
4. Clone taro-rn-shell outside project
5. Run yarn install in shell folder
6. Run pod install in shell/ios folder
7. Modify AppDelegate.m file, change the module name to match your project name which is "client" for us.
8. click run in Xcode
9. Tada! Open a beer and keep saying I'm awesome!

Could meet error for config.h file not found
Solution is here: https://github.com/facebook/react-native/issues/14382#issuecomment-313163119

Reference files
	1. https://nervjs.github.io/taro/docs/react-native.html
https://juejin.im/book/5b73a131f265da28065fb1cd/section/5b7413a4e51d45662434b5ca

# 重要规则
1. 不直接向master分支commit。建立分支然后提交向master的PR
2. 不force push

# 项目愿景
打造属于太太们的平台。她们买菜，她们做饭，她们那么辛苦。希望这款软件可以帮助她们更合理的安排自己的购物目标。

# 项目规划
1. 纯前端可用的最基本功能模块（加菜，加食材，生成购物清单）。暂不关心安卓。暂不推送商店。
2. 增加服务器和数据库，以支持数据永久保存和食材价格拉取。
3. 用户登陆支持多地点同时登陆。用户间可分享数据和清单。可以给老公布置购买任务。
4. 增加更多社交功能，如分享菜谱和清单。
5. 简单实时通讯和评论功能。

# [数据结构](https://github.com/GLW-Group/GoodWife/wiki/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)

# 设计图
1. 第一版
![](https://user-images.githubusercontent.com/12590308/66263982-ec935780-e7ca-11e9-93be-ba25bbe57f06.jpg)
![](https://user-images.githubusercontent.com/12590308/66263983-ec935780-e7ca-11e9-8e30-198128ddab01.jpg)
