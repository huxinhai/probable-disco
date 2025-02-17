import type React from 'react'
import {
  Dimensions,
  Modal,
  type ModalProps,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native'

export interface HModalProps extends ModalProps {
  children: React.ReactNode
  animationType?: ModalProps['animationType']
  styleContainer?: ModalProps['style']
  styleBg?: ModalProps['style']
  onPressOverlay?: () => void
}
const App = (props: HModalProps) => {
  const {
    visible,
    children,
    styleContainer,
    styleBg,
    animationType = 'fade',
    onPressOverlay,
    ...rest
  } = props

  return (
    <>
      {visible && (
        <StatusBar
          barStyle="dark-content"
          backgroundColor="rgba(0, 0, 0, 0.6)"
        />
      )}
      <Modal
        animationType={animationType}
        hardwareAccelerated={!0}
        transparent={!0}
        {...rest}
        visible={visible}
      >
        <TouchableWithoutFeedback onPress={() => onPressOverlay?.()}>
          <View style={[styles.overlay]} />
        </TouchableWithoutFeedback>
        {/*<ScrollView style={{flex:1}}>*/}
        <View style={[styles.container, styleContainer]}>
          <View style={[styles.bg, styleBg]}>{children}</View>
        </View>
        {/*</ScrollView>*/}
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  bg: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    width: Dimensions.get('window').width - 100,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
})

export default App
