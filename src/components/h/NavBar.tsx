import {
  // Blank,
  NavBar,
  type NavBarProps
} from '@fruits-chain/react-native-xiaoshu'
import type { navigationProps } from '@/global'
// import { getStatusBarHeight } from 'rn-statusbar-height'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props extends NavBarProps {
  navigation: navigationProps['navigation']
}

const App = (props: Props) => {
  const { navigation, ...rest } = props
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        paddingTop: insets.top,
        //@ts-ignore
        backgroundColor: rest.style?.backgroundColor || '#fff'
      }}
    >
      {/*<View*/}
      {/*  style={{*/}
      {/*    height: Platform.OS !== 'ios' ? getStatusBarHeight() : 0,*/}
      {/*    //@ts-ignore*/}
      {/*    backgroundColor: rest.style?.backgroundColor || '#fff'*/}
      {/*  }}*/}
      {/*/>*/}

      <NavBar
        onPressBackArrow={() => {
          navigation.goBack()
        }}
        {...rest}
      />
    </View>
  )
}

export default App
