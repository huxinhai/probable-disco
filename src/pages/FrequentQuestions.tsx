import Button from '@/components/h/Button.tsx'
import type { RootStackParamList } from '@/types/type'
import type { StackNavigationProp } from '@react-navigation/stack'
import { observer } from 'mobx-react'
import type React from 'react'
import { useEffect } from 'react'
import Empty from '../components/Empty.tsx'
import {Provider} from '@fruits-chain/react-native-xiaoshu'
import NavBar from '@/components/h/NavBar.tsx'

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>

interface ProfileScreenProps {
  navigation: HomeScreenNavigationProp
}

const FrequentQuestions: React.FC<ProfileScreenProps> = ({ navigation }) => {



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
      <NavBar
        title="msfz"
        navigation={navigation}
        showBackArrow={!1}
      />

        <Empty description={'login'}>
          <Button
            text={'login'}
            onPress={() => {}}
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

// const styles = StyleSheet.create({
//   container: {
//     margin: 10,
//     paddingTop: 0,
//   },
//   questionItem: {
//     flexDirection: 'row',
//     padding: 10,
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#eee',
//   },
//   question: {
//     width: '80%',
//     fontSize: 18,
//     paddingRight: 5,
//   },
//   interviewCnt: {
//     flex: 1,
//     fontSize: 18,
//   },
// })

export default observer(FrequentQuestions)
