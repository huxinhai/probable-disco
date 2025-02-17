import Button from '@/components/h/Button.tsx'
import type { RootStackParamList } from '@/types/type'
import type { StackNavigationProp } from '@react-navigation/stack'
// import {Button} from '@ant-design/react-native'
import { observer } from 'mobx-react'
// import {ScrollView} from 'react-native'
import type React from 'react'
import { useEffect } from 'react'
import Empty from '../components/Empty.tsx'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import {

  Provider
} from '@fruits-chain/react-native-xiaoshu'
import Lj9 from '@/assets/svg/lj9.svg'
import NavBar from '@/components/h/NavBar.tsx'

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import LinearGradient from 'react-native-linear-gradient'
import Big from 'big.js'
import { getUserInfoApi } from '@/utils/public.ts'
import { s } from 'react-native-size-matters/extend'

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>

interface ProfileScreenProps {
  navigation: HomeScreenNavigationProp
}



const Announcements: React.FC<ProfileScreenProps> = ({ navigation }) => {

  useEffect(() => {
    navigation.setOptions({
      headerShown: !1
    })
  }, [])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {

    })

    // 清理监听器
    return unsubscribe
  }, [navigation])
  return (
    <Provider>
      <NavBar title="bshi" navigation={navigation} showBackArrow={!1} />

        <Empty description={'login'}>
          <Button
            text={'login'}
            onPress={() => navigation.navigate('Login')}
            style={{
              backgroundColor:
                'linear-gradient(120deg, rgb(246, 211, 101) 0%, rgb(253, 160, 133) 100%)',
              height: 45,
              width: 120,
              borderRadius: 10
            }}
          />
        </Empty>
    </Provider>
  )
}

export default observer(Announcements)
