import { useState } from 'react'

export const useBoolean = (initialValue = false) => {
  const [value, setValue] = useState(initialValue)

  const toggle = (_value?: boolean) => setValue(_value ?? !value)

  return [value, toggle] as const
}
