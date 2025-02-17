import { Dimensions } from 'react-native'
import {
  withTiming,
  withSpring,
  type WithTimingConfig,
  type WithSpringConfig
} from 'react-native-reanimated'

const { height, width } = Dimensions.get('window')

const timingConfig: WithTimingConfig = {
  duration: 300,
}

const springConfig: WithSpringConfig = {
  damping: 15,
  stiffness: 90
}

export const animations = {
  // Slide animations
  slideInUp: () => {
    'worklet'
    return withSpring(0, springConfig)
  },
  slideInDown: () => {
    'worklet'
    return withSpring(0, springConfig)
  },
  slideInLeft: () => {
    'worklet'
    return withSpring(0, springConfig)
  },
  slideInRight: () => {
    'worklet'
    return withSpring(0, springConfig)
  },
  slideOutUp: () => {
    'worklet'
    return withSpring(-height, springConfig)
  },
  slideOutDown: () => {
    'worklet'
    return withSpring(height, springConfig)
  },
  slideOutLeft: () => {
    'worklet'
    return withSpring(-width, springConfig)
  },
  slideOutRight: () => {
    'worklet'
    return withSpring(width, springConfig)
  },

  // Fade animations
  fadeIn: () => {
    'worklet'
    return withTiming(1, timingConfig)
  },
  fadeOut: () => {
    'worklet'
    return withTiming(0, timingConfig)
  }
}

export const getInitialPosition = (animationType: string) => {
  'worklet'
  switch (animationType) {
    case 'slideInUp':
      return height
    case 'slideInDown':
      return -height
    case 'slideInLeft':
      return -width
    case 'slideInRight':
      return width
    default:
      return 0
  }
}