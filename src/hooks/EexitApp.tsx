import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { BackHandler, Platform, ToastAndroid } from 'react-native'

export const CanGoBackExitApp = () => {
  const navigation = useNavigation()
  const [backPressed, setBackPressed] = useState<number>(0)
  useEffect(() => {
    if (Platform.OS === 'android') {
      const backAction = () => {
        const canGoBack = navigation.canGoBack()
        if (canGoBack) return !1
        if (backPressed === 1) {
          BackHandler.exitApp()
          return !0
        }
        setBackPressed(backPressed + 1)
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT)
        setTimeout(() => {
          setBackPressed(0)
        }, 3000)
        return !0
      }
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction
      )
      return () => backHandler.remove()
    }
  }, [navigation, backPressed])
}
