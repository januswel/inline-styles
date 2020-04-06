import React from 'react'

const style = {
  position: 'absolute' as const,
  left: 0,
  top: 0,
  background: 'black',
  opacity: 0.5,
  width: '100vw',
  height: '100vh',
}

export default function Panel() {
  return <div style={style} />
}
