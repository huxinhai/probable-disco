import React from 'react'
import {
  type StyleProp,
  StyleSheet,
  Text,
  type TextStyle,
  TouchableHighlight,
  type TouchableHighlightProps
} from 'react-native'

interface ButtonProps extends TouchableHighlightProps {
  text: string
  styleText?: StyleProp<TextStyle>
}
const Button = (props: ButtonProps) => {
  const { text, underlayColor = 'transparent' } = props
  const styleButton = StyleSheet.flatten([styles.button, props.style])
  const styleText = StyleSheet.flatten([styles.text, props.styleText])
  return (
    <TouchableHighlight
      {...props}
      underlayColor={underlayColor}
      style={styleButton}
    >
      <Text style={styleText}>{text}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    // alignItems:'center',
    justifyContent: 'center',
    margin: 'auto'
  },
  text: {
    textAlign: 'center'
  }
})

export default Button
