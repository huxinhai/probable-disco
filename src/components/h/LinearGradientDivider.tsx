import { sw } from '@/utils/scale'
import { Flex } from '@fruits-chain/react-native-xiaoshu'
import { StyleSheet, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const LinearGradientDivider: React.FC<{
  text: string
}> = ({ text }) => {
  const colors = ['#FF7B00', 'rgba(255, 0, 0, 0)']
  const LinearGradientProps = {
    colors,
    start: { x: 1, y: 0 },
    end: { x: 0, y: 0 }
  }

  return (
    <Flex align={'center'} style={styles.container}>
      {/* <Flex style={{ flex: 1 }}> */}
      <LinearGradient
        {...LinearGradientProps}
        style={[
          styles.linearGradient,
          {
            transform: [{ rotate: '-0.3deg' }]
          }
        ]}
      />
      {/* </Flex> */}

      <Text style={styles.text}>{text}</Text>

      <Flex style={{ flex: 1 }}>
        <LinearGradient
          {...LinearGradientProps}
          style={[
            styles.linearGradient,
            {
              transform: [{ rotate: '-180deg' }, { rotate: '-0.3deg' }]
            }
          ]}
        />
      </Flex>
    </Flex>
  )
}

const styles = StyleSheet.create({
  container: {
    height: sw`31`
    // minHeight: sw`31` // 确保最小高度
  },
  text: {
    fontSize: sw`16`,
    color: '#FF7B00',
    fontWeight: '900',
    paddingHorizontal: sw`10`,
    // includeFontPadding: false,
    // textAlignVertical: 'center',
    lineHeight: sw`31`
    // height: sw`31`
  },
  linearGradient: {
    height: sw`3`,
    flex: 1,
    marginTop: sw`5`
  }
})

export default LinearGradientDivider
