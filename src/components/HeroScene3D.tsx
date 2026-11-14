import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const NODE_COUNT = 54

function createNetwork() {
  const positions: THREE.Vector3[] = []
  const goldenAngle = Math.PI * (3 - Math.sqrt(5))

  for (let index = 0; index < NODE_COUNT; index += 1) {
    const y = 1 - (index / (NODE_COUNT - 1)) * 2
    const radius = Math.sqrt(1 - y * y)
    const angle = goldenAngle * index

    positions.push(
      new THREE.Vector3(
        Math.cos(angle) * radius * 1.65,
        y * 1.65,
        Math.sin(angle) * radius * 1.65,
      ),
    )
  }

  const linePositions: number[] = []
  const lineColors: number[] = []
  const cyan = new THREE.Color('#22d3ee')
  const indigo = new THREE.Color('#818cf8')

  positions.forEach((point, index) => {
    positions.slice(index + 1).forEach((otherPoint) => {
      if (point.distanceTo(otherPoint) > 0.84) return

      const color = index % 3 === 0 ? indigo : cyan
      linePositions.push(...point.toArray(), ...otherPoint.toArray())
      lineColors.push(
        color.r,
        color.g,
        color.b,
        color.r * 0.8,
        color.g * 0.8,
        color.b,
      )
    })
  })

  const linkGeometry = new THREE.BufferGeometry()
  linkGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(linePositions, 3),
  )
  linkGeometry.setAttribute(
    'color',
    new THREE.Float32BufferAttribute(lineColors, 3),
  )

  const links = new THREE.LineSegments(
    linkGeometry,
    new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.46,
    }),
  )
  const nodes = new THREE.Group()
  const nodeGeometry = new THREE.SphereGeometry(0.035, 10, 10)

  positions.forEach((point, index) => {
    const node = new THREE.Mesh(
      nodeGeometry,
      new THREE.MeshBasicMaterial({
        color: index % 3 === 0 ? '#a5b4fc' : '#67e8f9',
        transparent: true,
        opacity: 0.9,
      }),
    )
    node.position.copy(point)
    nodes.add(node)
  })

  const network = new THREE.Group()
  network.add(links, nodes)

  return network
}

function HeroScene3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const containerElement: HTMLDivElement = container

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
    camera.position.set(0, 0, 7.2)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    containerElement.appendChild(renderer.domElement)

    const network = createNetwork()
    scene.add(network)

    const pointer = new THREE.Vector2()
    const targetRotation = new THREE.Vector2()
    let frameId = 0

    function resize() {
      const { width, height } = containerElement.getBoundingClientRect()
      if (width === 0 || height === 0) return

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    function handlePointerMove(event: PointerEvent) {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    function handleWindowBlur() {
      pointer.set(0, 0)
    }

    function animate() {
      frameId = window.requestAnimationFrame(animate)
      targetRotation.x += (pointer.y * 0.2 - targetRotation.x) * 0.025
      targetRotation.y += (pointer.x * 0.28 - targetRotation.y) * 0.025
      network.rotation.x = targetRotation.x + 0.08
      network.rotation.y += 0.0015 + targetRotation.y * 0.004
      renderer.render(scene, camera)
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(containerElement)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('blur', handleWindowBlur)
    resize()
    animate()

    return () => {
      window.cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('blur', handleWindowBlur)
      scene.remove(network)
      network.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose()
          const material = object.material
          if (Array.isArray(material)) {
            material.forEach((item) => item.dispose())
          } else {
            material.dispose()
          }
        } else if (object instanceof THREE.LineSegments) {
          object.geometry.dispose()
          object.material.dispose()
        }
      })
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return <div ref={containerRef} className="hero-scene" aria-hidden="true" />
}

export default HeroScene3D