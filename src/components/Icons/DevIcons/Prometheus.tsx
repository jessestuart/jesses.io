import React from 'react'

const Prometheus = (props) => (
  <svg width={256} height={257} viewBox="0 0 256 257" {...props}>
    <g fillRule="nonzero" fill="none">
      <path
        d="M128.001.667C57.311.667 0 57.971 0 128.664c0 70.69 57.311 127.998 128.001 127.998S256 199.354 256 128.664C256 57.97 198.689.667 128.001.667z"
        fill="#DA4E31"
      />
      <path
        d="M128.001 240.227c-20.112 0-36.419-13.435-36.419-30.004h72.838c0 16.566-16.306 30.004-36.419 30.004zm60.153-39.94H67.842V178.47h120.314v21.816h-.002v.001zm-.432-33.045H68.185c-.398-.458-.804-.91-1.188-1.375-12.315-14.954-15.216-22.76-18.032-30.716-.048-.262 14.933 3.06 25.556 5.45 0 0 5.466 1.265 13.458 2.722-7.673-8.994-12.23-20.428-12.23-32.116 0-25.658 19.68-48.079 12.58-66.201 6.91.562 14.3 14.583 14.8 36.505 7.346-10.152 10.42-28.69 10.42-40.056 0-11.769 7.755-25.44 15.512-25.907-6.915 11.396 1.79 21.165 9.53 45.4 2.902 9.103 2.532 24.423 4.772 34.138.744-20.178 4.213-49.62 17.014-59.784-5.647 12.8.836 28.818 5.27 36.518 7.154 12.424 11.49 21.836 11.49 39.638 0 11.936-4.407 23.173-11.84 31.958 8.452-1.586 14.289-3.016 14.289-3.016l27.45-5.355c.002-.002-3.987 16.401-19.314 32.197z"
        fill="#FFF"
      />
    </g>
  </svg>
)

Prometheus.href = 'https://prometheus.io'

export default Prometheus
