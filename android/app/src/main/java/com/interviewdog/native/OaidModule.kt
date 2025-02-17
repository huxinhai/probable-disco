package com.interviewdog.native

import android.os.Handler
import android.os.Looper
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.github.gzuliyujiang.oaid.DeviceID
import com.github.gzuliyujiang.oaid.IGetter


class OaidModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext){

    private val context = reactContext

    override fun getName(): String {
        return "OaidModule"
    }

    @ReactMethod
    fun getOaid(promise:Promise){

        val handler = Handler(Looper.getMainLooper())
        val timeout = 1000L
        val timeoutRunnable = Runnable {
            promise.resolve("未获取到")
        }
        handler.postDelayed(timeoutRunnable, timeout)

        DeviceID.getOAID(context, object : IGetter{
            override fun onOAIDGetComplete(result: String) {
                // 成功获取 OAID
                promise.resolve(result)
            }

            override fun onOAIDGetError(error: Exception) {
                // 获取失败，返回错误信息
                promise.resolve("OAID_ERROR")
            }
        })
    }


}
