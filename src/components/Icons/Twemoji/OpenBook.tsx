import React from 'react'

const OpenBook = (props) => (
  <svg viewBox="0 0 45 45" {...props}>
    <defs>
      <clipPath id="a">
        <path d="M0 36h36V0H0v36z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 45)">
      <path
        d="M32 29H4a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4h11.416c.52-.596 1.477-1 2.584-1s2.064.404 2.584 1H32a4 4 0 0 1 4 4v15a4 4 0 0 1-4 4"
        fill="#269"
      />

      <path d="M20 9a2 2 0 0 0-4 0v18a2 2 0 0 0 4 0V9z" fill="#292f33" />
      <path
        d="M18 10a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10z"
        fill="#99aab5"
      />

      <path
        d="M18 10c-.999 1.998-3.657 2-4 2-2 0-5-2-8-2-1 0-2 .896-2 2v16c0 1.104 1 2 2 2 3.255 0 6 2 8 2 3 0 4-1.896 4-3V10z"
        fill="#e1e8ed"
      />

      <path
        d="M34 10a2 2 0 0 0-2-2H20a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10z"
        fill="#99aab5"
      />

      <path
        d="M18 10c.999 1.998 3.657 2 4 2 2 0 5-2 8-2 1 0 2 .896 2 2v16c0 1.104-1 2-2 2-3.256 0-6 2-8 2-3 0-4-1.896-4-3V10z"
        fill="#ccd6dd"
      />
    </g>
  </svg>
)

export default OpenBook
