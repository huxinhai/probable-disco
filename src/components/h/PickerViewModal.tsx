import Modal from '@/components/h/Modal.tsx'
import {
  Blank,
  type PickerValue,
  PickerView,
  type PickerViewProps
} from '@fruits-chain/react-native-xiaoshu'
import type { Column } from '@fruits-chain/react-native-xiaoshu/lib/typescript/picker-view/interface'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface PickerViewModalProps extends PickerViewProps {
  visible: boolean
  title?: string
  onConfirm?: (values: PickerValue[]) => void
  onCancel?: () => void
}

let value: PickerValue[] = []
const App = (props: PickerViewModalProps) => {
  const { visible, title, onConfirm, onCancel, ...rest } = props

  return (
    <Modal
      visible={visible}
      animationType={'slide'}
      styleContainer={styles.container}
      onRequestClose={() => onCancel?.()}
      onPressOverlay={() => onCancel?.()}
      styleBg={styles.bg}
    >
      <Blank style={styles.header} bottom>
        <TouchableOpacity onPress={() => onCancel?.()}>
          <Text style={styles.headerLeftText}>取消</Text>
        </TouchableOpacity>
        <Text style={styles.headerCenterText}>{title}</Text>
        <TouchableOpacity onPress={() => onConfirm?.(value)}>
          <Text style={styles.headerRightText}>确定</Text>
        </TouchableOpacity>
      </Blank>
      <PickerView
        {...rest}
        onChange={(values: PickerValue[], options: Column[]) => {
          value = values
          rest?.onChange?.(values, options)
        }}
      />
    </Modal>
  )
}

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 1,
    alignItems: 'center'
  },
  headerLeftText: {
    color: 'rgb(90, 96, 104)'
  },
  headerCenterText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  headerRightText: {
    color: 'rgb(0, 101, 254)'
  },
  container: {
    justifyContent: 'flex-end'
  },
  bg: {
    width: '100%'
  }
})

export default App
