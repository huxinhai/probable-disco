package com.interviewdog

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.zoontek.rnbootsplash.RNBootSplash


class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        RNBootSplash.init(this, R.style.BootTheme)  // <-- 调用这个方法来显示启动页
        super.onCreate(null)
//        val config = InitConfig("680979","interviewDog")
//        config.setImeiEnable(false);//建议关停获取IMEI（出于合规考虑）
//        config.setAutoTrackEnabled(false); // 全埋点开关，true开启，false关闭
//        config.setLogEnable(false); // true:开启日志，参考4.3节设置logger，false:关闭日志
//        AppLog.setEncryptAndCompress(false); // 加密开关，true开启，false关闭
//        config.setEnablePlay(false); // 配置心跳事件（时长统计）
//        val newAppLogInstance = AppLog.newInstance()
//        BDConvert.getInstance().init(this, newAppLogInstance);
//        newAppLogInstance.init(this, config);
//
//        Thread.sleep(1000)
//        Log.d(AppLog.getAppId(), "hxhgetAppId: ")
//        Log.d(AppLog.getUdid(), "hxhgetUdid: ")
//        Log.d(AppLog.getDid(), "hxhgetDid: ")
//        Log.d(AppLog.getSsid(), "hxhgetSsid: ")
//        Log.d(AppLog.getIid(), "hxhgetIid: ")
//        Log.d("你好？", "hxhgetIid: ")
    }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "interviewDog"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
