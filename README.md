# rn_study
react-native-study

## react-native 起步
关于环境配置

首先安装react-native-cli

安卓的环境
只需要安装了`java`的`jdk`和`android studio`就差不多了

安装android studio 是为了搭配android的环境,

**但是不一定非要安装AVD**(安卓虚拟机)

需要注意的是要把adb的环境变量配置好

启动react-native, 需要

1. `react-native start --port 5389` (记住本机的端口号, 手机网络与电脑处在同一wifi下, 并且启用了代理)
2. `react-native run-android` (用于打包一个android app 到手机上)

其他的开发模式，只需要接入react native的文档，并按照react的开发方式来就ok了

当一个项目上传到git，然后在不同的机器上多端开发的时候，会遇到安装包前面版本不一致的问题，这个时候删除原手机上的apk包, 再重新执行run-android即可