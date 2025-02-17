import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface ModalProps {
  isVisible: boolean
  children: ReactNode
  onBackdropPress?: () => void
  onBackButtonPress?: () => void
  onModalShow?: () => void
  onModalHide?: () => void
  animationIn?: 'slideInUp' | 'slideInDown' | 'slideInLeft' | 'slideInRight' | 'fadeIn'
  animationOut?: 'slideOutUp' | 'slideOutDown' | 'slideOutLeft' | 'slideOutRight' | 'fadeOut'
  animationInTiming?: number
  animationOutTiming?: number
  backdropColor?: string
  backdropOpacity?: number
  style?: ViewStyle
  avoidKeyboard?: boolean
  coverScreen?: boolean
  hasBackdrop?: boolean
  useNativeDriver?: boolean
  statusBarTranslucent?: boolean
  supportedOrientations?: ('portrait' | 'landscape')[]
}