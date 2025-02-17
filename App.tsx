
import type { RootStackParamList } from '@/types/type'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack'
import { Provider as MobxProvider } from 'mobx-react'
import type React from 'react'
import {  useEffect } from 'react'
import {
  StatusBar,
  Platform,
  UIManager
} from 'react-native'
import BootSplash from 'react-native-bootsplash'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { PaperProvider, Provider } from 'react-native-paper'
import { enableFreeze, enableScreens } from 'react-native-screens'
import Toast from 'react-native-toast-message'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import BottomTabNavigator from './src/pages/BottomTabNavigator.tsx'
import Router from '@/router';
import "./global.css"
import { checkStatus, useUpdateVersion } from '@/utils/updateVersion.ts'
if (__DEV__) {
  require('./ReactotronConfig')
}

const stores = {

}

const Stack = createStackNavigator<RootStackParamList>()
enableFreeze(true)
enableScreens()

function App(): React.JSX.Element {
  const { updateVersion } = useUpdateVersion()


  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }

    updateVersion()
    checkStatus(updateVersion)
  },[])

  return (
    <GestureHandlerRootView>

      <MobxProvider {...stores}>

        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={!0}
        />

        <PaperProvider>
          <Provider>

                <NavigationContainer
                  onReady={() => BootSplash.hide({ fade: true })}
                >
                  <Stack.Navigator
                    screenOptions={
                      {
                        headerShown: !1,
                      }
                    }
                    initialRouteName={'Main'}
                  >
                    <Stack.Screen
                      name="Main"
                      component={BottomTabNavigator}
                      options={{ headerShown: !1 }}
                    />
                    {
                      Router.map((item) =>
                        <Stack.Screen
                          key={item.name}
                          {...item}
                        />)
                    }
                  </Stack.Navigator>
                </NavigationContainer>

            {/*</Provider>*/}
          </Provider>
        </PaperProvider>

      </MobxProvider>
      <Toast />
    </GestureHandlerRootView>
  )
}


export default App
