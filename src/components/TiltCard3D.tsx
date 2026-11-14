import type { PointerEvent, ReactNode } from 'react'

interface TiltCard3DProps {
  children: ReactNode
  className?: string
  intensity?: number
}

function TiltCard3D({
  children,
  className = '',
  intensity = 8,
}: TiltCard3DProps) {
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === 'touch') return

    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height

    event.currentTarget.style.setProperty(
      '--tilt-x',
      `${(0.5 - y) * intensity}deg`,
    )
    event.currentTarget.style.setProperty(
      '--tilt-y',
      `${(x - 0.5) * intensity}deg`,
    )
    event.currentTarget.style.setProperty('--spotlight-x', `${x * 100}%`)
    event.currentTarget.style.setProperty('--spotlight-y', `${y * 100}%`)
  }

  function resetPointer(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty('--tilt-x', '0deg')
    event.currentTarget.style.setProperty('--tilt-y', '0deg')
    event.currentTarget.style.setProperty('--spotlight-x', '50%')
    event.currentTarget.style.setProperty('--spotlight-y', '50%')
  }

  return (
    <div
      className={`tilt-card ${className}`.trim()}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      {children}
    </div>
  )
}

export default TiltCard3D