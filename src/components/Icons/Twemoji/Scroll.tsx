import React from 'react'

const Scroll = (props) => (
  <svg viewBox="0 0 45 45" {...props}>
    <defs>
      <clipPath id="a">
        <path d="M0 36h36V0H0v36z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 45)">
      <path
        d="M32 36H10a4 4 0 0 1-4-4V8H4a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4v24a4 4 0 0 1 0 8"
        fill="#ffd983"
      />

      <path d="M8 26h24v2H10l-2 1v-3z" fill="#e39f3d" />
      <path
        d="M10 36a4 4 0 0 1-4-4V7.445A3.955 3.955 0 0 1 4 8a4 4 0 1 1 4-4v24.555A3.955 3.955 0 0 1 10 28a4 4 0 0 1 0 8"
        fill="#ffe8b6"
      />

      <path
        d="M12 32a2 2 0 1 0-4.001.001A2 2 0 0 0 12 32M6 4a2 2 0 1 0-4.001.001A2 2 0 0 0 6 4m24 17a1 1 0 0 0-1-1H11a1 1 0 0 0 0 2h18a1 1 0 0 0 1-1m0-4a1 1 0 0 0-1-1H11a1 1 0 1 0 0 2h18a1 1 0 0 0 1-1m0-4a1 1 0 0 0-1-1H11a1 1 0 1 0 0 2h18a1 1 0 0 0 1-1m0-4a1 1 0 0 0-1-1H11a1 1 0 1 0 0 2h18a1 1 0 0 0 1-1"
        fill="#c1694f"
      />
    </g>
  </svg>
)

export default Scroll
