import { useState } from 'react'

/**
 * A simple React Hook that responds to `hover` events.
 */
const useHover = () => {
  const [hovered, setHovered] = useState<boolean>(false)
  return [
    hovered,
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    },
  ]
}

export default useHover
