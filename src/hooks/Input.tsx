import { useState } from 'react'

export const useInputNumber = () => {
  const [value, setValue] = useState<string>()
  const handleChange = (text: string) => {
    if (/^\d*$/.test(text)) {
      setValue(text)
    }
  }

  return { value, handleChange }
}
