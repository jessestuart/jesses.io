import { useState } from 'react'

const useHover = () => {
  const [hovered, set] = useState(false)
  return [
    hovered,
    {
      onMouseEnter: () => set(true),
      onMouseLeave: () => set(false),
    },
  ]
}

export default useHover
