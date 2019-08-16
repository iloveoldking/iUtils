<template>
  <div>
    <pre>
      <a href="https://reactnative.cn/docs/signed-apk-android/" target="_blank"><a-icon type="link" /> react native中文网打包文档</a>

      1.生成签名密钥
      进入jdk的bin目录（比如C:\Program Files\Java\jdkx.x.x_x\bin），执行keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

      2.按照要求输入密钥配置，成功之后会在当前文件夹下生成一个my-release-key.keystore的密钥库文件

      3.把my-release-key.keystore文件放到工程中的android/app文件夹下

      4.配置android/app/build.gradle（除了配置下面这些，还可以配置其他选项，自行琢磨）
      android {
          ...
          defaultConfig { ... }
          signingConfigs {
            debug {
              storeFile file('debug.keystore')
              storePassword 'android'
              keyAlias 'androiddebugkey'
              keyPassword 'android'
            }
            release {
              storeFile file('my-release-key.keystore')
              storePassword '***'
              keyAlias 'my-key-alias'
              keyPassword '***'
            }
          }
          buildTypes {
            release {
              ...
              signingConfig signingConfigs.release
            }
          }
      }

      5.在package.json中配置打包命令
      "scripts": {
        ...
        "build:android": "cd android && gradlew assembleRelease"
      }

      6.生成的APK文件位于android/app/build/outputs/apk/release/app-release.apk，它已经可以用来发布了。

      7.android\app\src\main\AndroidManifest.xml以及同级目录下的res文件夹可以用来配置app打包之后的名字（在res\values\strings.xml中）和图标（包括方形弧角图标和圆形图标）等</pre>
  </div>
</template>

<script>
export default {
  name: "reactNativeBuild"
};
</script>