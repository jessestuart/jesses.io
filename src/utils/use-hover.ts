import { useState } from 'react'

/**
 * A simple React Hook that responds to `hover` events.
 */
const useHover = (): [
  boolean,
  { onMouseEnter: () => any; onMouseLeave: () => any },
] => {
  const [isActive, setHovered] = useState<boolean>(false)
  return [
    isActive,
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    },
  ]
}

export default useHover
