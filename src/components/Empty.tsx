import type React from 'react'
import { Image, Text, View } from 'react-native'

interface EmptyProps {
  description: string
  children?: React.ReactNode
}
const App = (props: EmptyProps) => {
  const { children, description } = props
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32
      }}
    >
      <Image
        source={require('@/assets/image/empty.png')}
        style={{
          width: 80,
          height: 80
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          marginTop: 10,
          fontSize: 14,
          color: '#999'
        }}
      >
        {description}
      </Text>
      <View style={{ marginTop: 24 }}>{children}</View>
    </View>
  )
}

export default App
