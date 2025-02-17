import hotUpdate from 'react-native-ota-hot-update'
import ReactNativeBlobUtil from 'react-native-blob-util'
import { LayoutAnimation, Platform } from 'react-native';
import { useState } from 'react';
import BackgroundFetch from "react-native-background-fetch";

export const useUpdateVersion = () => {
    const [progress, setProgress] = useState(0);
    const updateVersion = async () => {
        try {

            const currentVersion = await hotUpdate.getCurrentVersion();
            const downloadIosUrl = '',downloadAndroidUrl = ''

            hotUpdate.downloadBundleUri(ReactNativeBlobUtil, Platform.OS === 'ios' ? downloadIosUrl : downloadAndroidUrl, currentVersion + 1, {
                updateSuccess() {
                    console.log('updateSuccess')
                },

                updateFail(message) {
                    console.log('updateFail', message);
                },
                progress(received: string, total: string) {
                    const percent = (+received / +total) * 100;
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                    setProgress(percent)
                    console.log('下载中progress', percent);

                },
                // restartAfterInstall:!0
            })
        } catch (error) {
            console.log('执行错误？');
        }

    }
    return {
        updateVersion,
        progress
    }
}

export const checkStatus = async (cb: (() => Promise<void>)) => {
    const status = await BackgroundFetch.status();
    console.log('status', status);

    switch (status) {
        case BackgroundFetch.STATUS_RESTRICTED:
            console.log("后台任务受限");
            break;
        case BackgroundFetch.STATUS_DENIED:
            console.log("后台任务被拒绝");
            break;
        case BackgroundFetch.STATUS_AVAILABLE:
            configureBackgroundFetch(cb)
            console.log("后台任务可用");
            break;
    }
}

const configureBackgroundFetch = (cb: (() => Promise<void>)) => {
    try {
        BackgroundFetch.configure({
            minimumFetchInterval: 1,
            stopOnTerminate: !1,
            enableHeadless: !0,
            startOnBoot: !0
        }, (taskId) => {
            console.log('BackgroundFetch.configure')
            cb?.()
            BackgroundFetch.finish(taskId)
        }, (error) => {
            console.log('[BackgroundFetch] 配置失败:', error);
        })
    } catch (error) {
        console.log('[BackgroundFetch] 配置异常:', error);
    }

}
