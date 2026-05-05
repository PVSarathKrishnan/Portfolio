import { useEffect, useMemo, useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import * as THREE from 'three'
import './App.css'

type MotionState = {
  progress: number
  speed: number
}

type Chapter = {
  marker: string
  eyebrow: string
  text: string
  bubble: string
  action: string
  terms: string[]
  projects?: Project[]
}

type Project = {
  name: string
  label: string
  href: string
}

type PaperDepthLayerProps = MotionState & {
  action: string
}

const storyCopies = 3

const projectLinks: Project[] = [
  {
    name: 'Tanq Driver',
    label: 'driver app',
    href: 'https://play.google.com/store/apps/details?id=app.driver.tanq&hl=en_IN',
  },
  {
    name: 'Tanq',
    label: 'rider app',
    href: 'https://play.google.com/store/apps/details?id=com.tanqrider.app&hl=en_IN',
  },
  {
    name: 'Piggyback',
    label: 'sportsbook learning',
    href: 'https://play.google.com/store/apps/details?id=com.piggyback.appp.piggyback&hl=en_IN',
  },
  {
    name: 'Fintalkr',
    label: 'finance advisory',
    href: 'https://play.google.com/store/apps/details?id=com.fintalkr.app.fintalkr&hl=en_IN',
  },
  {
    name: 'Agent Property Journey',
    label: 'real-estate CRM',
    href: 'https://play.google.com/store/apps/details?id=com.myproperty.flutterapp&hl=en',
  },
  {
    name: 'Leadsden',
    label: 'agent CRM',
    href: 'https://play.google.com/store/apps/details?id=com.leadsDen.mobileApp&hl=en',
  },
]

const chapters: Chapter[] = [
  {
    marker: '00',
    eyebrow: 'sarath enters',
    text: 'This is Sarath Krishnan P V: Kerala-born, 2001 edition, Flutter developer, AI-assisted builder, and professional overthinker of tiny app details.',
    bubble: "I am the narrator. welcome to sarath's story.",
    action: 'wave',
    terms: ['Flutter', 'AI', 'Kerala'],
  },
  {
    marker: '01',
    eyebrow: 'curiosity loads',
    text: 'His story started with gadgets, laptops, games, video edits, and movie hacking scenes where people type aggressively and somehow save the planet.',
    bubble: 'hollywood lied. he still bought the dream.',
    action: 'gadget',
    terms: ['gadgets', 'editing', 'gaming'],
  },
  {
    marker: '02',
    eyebrow: 'engineering turn',
    text: 'After Plus Two, Sarath chose B.Tech Computer Science under KTU and completed it in 2023. Curiosity finally found a direction and a compiler to argue with.',
    bubble: 'degree acquired. bugs came free.',
    action: 'graduate',
    terms: ['KTU', 'CSE', '2023'],
  },
  {
    marker: '03',
    eyebrow: 'flutter spark',
    text: 'A college mobile app project pulled him toward Flutter: logic, design, performance, and real usefulness packed into one tiny rectangle.',
    bubble: 'tiny rectangle. massive opinions.',
    action: 'flutter',
    terms: ['Dart', 'Flutter', 'Mobile UI'],
  },
  {
    marker: '04',
    eyebrow: 'real work begins',
    text: 'At Aster Medcity and then Coder Space, he sharpened into a stronger Flutter developer, learning how real products are planned, built, and shipped.',
    bubble: 'tutorial mode died on impact.',
    action: 'build',
    terms: ['Aster', 'Coder Space', 'shipping'],
  },
  {
    marker: '05',
    eyebrow: 'tanq ride',
    text: 'Tanq Driver became a major chapter: he completed the driver app fully, contributed to the user app, and handled serious production-level mobile flows.',
    bubble: 'cars, maps, deadlines. lovely chaos.',
    action: 'route',
    terms: ['Tanq Driver', 'maps', 'real time'],
  },
  {
    marker: '06',
    eyebrow: 'ateam phase',
    text: 'At Ateam Soft Solutions, the work got heavier: larger architectures, native needs, advanced integrations, and faster expectations.',
    bubble: 'difficulty upgraded. peace uninstalled.',
    action: 'climb',
    terms: ['native', 'architecture', 'integrations'],
  },
  {
    marker: '07',
    eyebrow: 'product range',
    text: 'He worked across shipped products: Tanq, Piggyback, Fintalkr, Agent Property Journey, and Leadsden. Sports data, finance, real-estate CRM, APIs, Firebase, Bloc, GetX, integrations.',
    bubble: 'actual apps. portfolio finally has receipts.',
    action: 'data',
    terms: ['Bloc', 'GetX', 'Firebase', 'REST API'],
    projects: projectLinks,
  },
  {
    marker: '08',
    eyebrow: 'ai-assisted era',
    text: 'When AI coding tools arrived, Sarath did not watch from the sidelines. He turned Cursor, Codex, Claude, prompts, agents, debugging, generation, and review into a faster way to think, build, and ship.',
    bubble: 'AI entered. excuses left.',
    action: 'prompt',
    terms: ['Cursor', 'Codex', 'Claude', 'AI agents'],
  },
  {
    marker: '09',
    eyebrow: 'solo achievement',
    text: 'A big milestone: handling a project almost alone with AI as a serious force multiplier, while also managing client communication, requirements, releases, and delivery.',
    bubble: 'solo run. AI sidekick. stress DLC.',
    action: 'launch',
    terms: ['Codemagic', 'CI/CD', 'Play Store', 'release'],
  },
  {
    marker: '10',
    eyebrow: 'this portfolio too',
    text: 'And yes, he built this portfolio with React, TypeScript, Three.js, and a suspicious amount of learning on the fly. He did not know all of it before starting. That is kind of the point.',
    bubble: 'proof of work. slightly illegal confidence.',
    action: 'evolve',
    terms: ['React', 'TypeScript', 'Three.js', 'Vite'],
  },
]

const storySections = chapters.length + 1

const threeActionProfiles: Record<string, { color: number; sides: number; pulse: number }> = {
  wave: { color: 0x12110f, sides: 24, pulse: 0.16 },
  gadget: { color: 0x2a7f9f, sides: 4, pulse: 0.2 },
  trip: { color: 0x12110f, sides: 3, pulse: 0.24 },
  graduate: { color: 0x12110f, sides: 4, pulse: 0.18 },
  ai: { color: 0x8f4de8, sides: 8, pulse: 0.28 },
  flutter: { color: 0x18b9ed, sides: 4, pulse: 0.28 },
  intern: { color: 0x5e8c61, sides: 5, pulse: 0.16 },
  build: { color: 0x12110f, sides: 6, pulse: 0.22 },
  route: { color: 0xdc523a, sides: 3, pulse: 0.26 },
  climb: { color: 0x12110f, sides: 5, pulse: 0.2 },
  score: { color: 0x4b7c59, sides: 6, pulse: 0.24 },
  finance: { color: 0xb39131, sides: 24, pulse: 0.22 },
  prompt: { color: 0x8f4de8, sides: 8, pulse: 0.3 },
  data: { color: 0x12110f, sides: 4, pulse: 0.2 },
  connect: { color: 0x2a7f9f, sides: 6, pulse: 0.22 },
  launch: { color: 0xdc523a, sides: 3, pulse: 0.28 },
  client: { color: 0x12110f, sides: 24, pulse: 0.18 },
  evolve: { color: 0x12110f, sides: 8, pulse: 0.24 },
}

function createActionGeometry(sides: number) {
  if (sides >= 24) {
    return new THREE.RingGeometry(0.16, 0.18, 40)
  }

  return new THREE.RingGeometry(0.14, 0.18, sides)
}

function getLoopProgress(y: number, loopHeight: number) {
  const wrapped = ((y % loopHeight) + loopHeight) % loopHeight
  return wrapped / loopHeight
}

function PaperDepthLayer({ progress, speed, action }: PaperDepthLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const motionRef = useRef({ progress, speed, action })

  useEffect(() => {
    motionRef.current = { progress, speed, action }
  }, [progress, speed, action])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    })
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6))

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    camera.position.z = 4

    const dotCount = 72
    const dotPositions = new Float32Array(dotCount * 3)
    const dotSeeds = Array.from({ length: dotCount }, (_, index) => ({
      x: (index % 12) / 5.5 - 1,
      y: Math.floor(index / 12) / 2.8 - 0.95,
      z: -Math.random() * 1.8,
      drift: 0.015 + Math.random() * 0.035,
    }))

    dotSeeds.forEach((seed, index) => {
      dotPositions[index * 3] = seed.x
      dotPositions[index * 3 + 1] = seed.y
      dotPositions[index * 3 + 2] = seed.z
    })

    const dotGeometry = new THREE.BufferGeometry()
    dotGeometry.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3))
    const dots = new THREE.Points(
      dotGeometry,
      new THREE.PointsMaterial({
        color: 0x12110f,
        size: 0.012,
        transparent: true,
        opacity: 0.22,
        depthWrite: false,
      }),
    )
    scene.add(dots)

    const linePositions = new Float32Array([
      -0.9, 0.56, -0.8, -0.18, 0.64, -1.2,
      0.18, 0.64, -1.2, 0.86, 0.34, -1.1,
      -0.72, -0.2, -1.4, -0.12, -0.44, -1.5,
      -0.12, -0.44, -1.5, 0.68, -0.3, -1.35,
      -0.32, 0.24, -1.7, 0.28, 0.1, -1.6,
    ])
    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    const lines = new THREE.LineSegments(
      lineGeometry,
      new THREE.LineBasicMaterial({
        color: 0x12110f,
        transparent: true,
        opacity: 0.09,
      }),
    )
    scene.add(lines)

    const actionMaterial = new THREE.MeshBasicMaterial({
      color: 0x12110f,
      transparent: true,
      opacity: 0.1,
      wireframe: true,
    })
    let actionGeometry = createActionGeometry(24)
    const actionGlyph = new THREE.Mesh(actionGeometry, actionMaterial)
    actionGlyph.position.set(0.62, -0.36, -0.6)
    scene.add(actionGlyph)

    const resize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      renderer.setSize(width, height, false)
      const aspect = width / Math.max(height, 1)
      camera.left = -aspect
      camera.right = aspect
      camera.top = 1
      camera.bottom = -1
      camera.updateProjectionMatrix()
    }

    let activeSides = 24
    let frame = 0
    const render = (time: number) => {
      const {
        progress: scrollProgress,
        speed: scrollSpeed,
        action: activeAction,
      } = motionRef.current
      const positionAttribute = dotGeometry.getAttribute('position')
      const profile = threeActionProfiles[activeAction] ?? threeActionProfiles.wave

      if (profile.sides !== activeSides) {
        actionGeometry.dispose()
        actionGeometry = createActionGeometry(profile.sides)
        actionGlyph.geometry = actionGeometry
        activeSides = profile.sides
      }

      dotSeeds.forEach((seed, index) => {
        const wave = Math.sin(time * 0.00025 + index * 1.7) * seed.drift
        positionAttribute.setXYZ(
          index,
          seed.x + wave + scrollProgress * 0.1,
          seed.y + Math.cos(time * 0.00018 + index) * seed.drift - scrollProgress * 0.16,
          seed.z,
        )
      })
      positionAttribute.needsUpdate = true

      dots.rotation.z = scrollProgress * 0.18
      lines.rotation.z = -scrollProgress * 0.08
      lines.position.x = scrollSpeed * 0.12
      dots.position.y = scrollSpeed * 0.06
      actionMaterial.color.setHex(profile.color)
      actionMaterial.opacity = 0.08 + profile.pulse * Math.abs(Math.sin(time * 0.002))
      actionGlyph.rotation.z = time * 0.0007 + scrollProgress * Math.PI * 2
      actionGlyph.scale.setScalar(1 + profile.pulse * Math.sin(time * 0.003))
      actionGlyph.position.x = 0.62 + scrollSpeed * 0.22

      renderer.render(scene, camera)
      frame = requestAnimationFrame(render)
    }

    resize()
    frame = requestAnimationFrame(render)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      dotGeometry.dispose()
      lineGeometry.dispose()
      actionGeometry.dispose()
      ;(dots.material as THREE.Material).dispose()
      ;(lines.material as THREE.Material).dispose()
      actionMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return <canvas className="paper-depth" ref={canvasRef} aria-hidden="true" />
}

function StoryPass({
  copyIndex,
  beginOrbitDrag,
  beginItemDrag,
  drag,
  endDrag,
  itemSpins,
}: {
  copyIndex: number
  beginOrbitDrag: (event: PointerEvent<HTMLDivElement>) => void
  beginItemDrag: (key: string, event: PointerEvent<HTMLSpanElement>) => void
  drag: (event: PointerEvent<HTMLDivElement>) => void
  endDrag: () => void
  itemSpins: Record<string, number>
}) {
  return (
    <div className="story-pass" aria-hidden={copyIndex !== 1}>
      <section className="intro">
        <p className="tiny">sarath krishnan pv</p>
        <h1>Flutter developer. AI-assisted builder. Constantly evolving.</h1>
        <p className="intro-copy">
          My short scroll-story about curiosity, Flutter, real products, and
          using AI without forgetting how to think.
        </p>
        <p className="scroll-cue">scroll forever, basically</p>
        <div
          className="first-page-skills"
          aria-label="Sarath skill highlights"
          onPointerDown={beginOrbitDrag}
          onPointerMove={drag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <div className="orbit-rotor">
            <span
              className="skill-card skill-flutter"
              onPointerDown={(event) => beginItemDrag('flutter', event)}
              style={{ '--item-spin': `${itemSpins.flutter ?? 0}deg` } as React.CSSProperties}
            >
              Flutter
            </span>
            <span
              className="skill-card skill-code"
              onPointerDown={(event) => beginItemDrag('code', event)}
              style={{ '--item-spin': `${itemSpins.code ?? 0}deg` } as React.CSSProperties}
            >
              Coding
            </span>
            <span
              className="skill-card skill-video"
              onPointerDown={(event) => beginItemDrag('video', event)}
              style={{ '--item-spin': `${itemSpins.video ?? 0}deg` } as React.CSSProperties}
            >
              Video editing
            </span>
            <span
              className="skill-card skill-ai"
              onPointerDown={(event) => beginItemDrag('ai', event)}
              style={{ '--item-spin': `${itemSpins.ai ?? 0}deg` } as React.CSSProperties}
            >
              AI prompting
            </span>
          </div>
        </div>
      </section>

      {chapters.slice(1).map((chapter) => (
        <section className="beat" key={`${copyIndex}-${chapter.marker}`}>
          <div className="term-field" aria-hidden="true">
            {chapter.terms.map((term, termIndex) => (
              <span
                className={`floating-term term-${termIndex + 1}`}
                key={term}
              >
                {term}
              </span>
            ))}
          </div>
          <div className="beat-marker">{chapter.marker}</div>
          <div>
            <p className="eyebrow">{chapter.eyebrow}</p>
            <p className="giant-copy">{chapter.text}</p>
            {chapter.projects ? (
              <div className="project-showcase" aria-label="Play Store project links">
                {chapter.projects.map((project) => (
                  <a
                    className="project-link"
                    href={project.href}
                    key={project.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>{project.name}</span>
                    <small>{project.label}</small>
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ))}

      <section className="outro">
        <p className="tiny">the story keeps looping</p>
        <h2>built while learning. shipped while walking. honestly, that tracks.</h2>
      </section>
    </div>
  )
}

function App() {
  const [motion, setMotion] = useState<MotionState>({ progress: 0, speed: 0 })
  const [orbitRotation, setOrbitRotation] = useState(0)
  const [itemSpins, setItemSpins] = useState<Record<string, number>>({})
  const loopRef = useRef<HTMLDivElement | null>(null)
  const didCenterLoopRef = useRef(false)
  const dragRef = useRef<{
    type: 'orbit' | 'item'
    key?: string
    startX: number
    startY: number
    startRotation: number
  } | null>(null)

  useEffect(() => {
    let lastY = window.scrollY
    let lastTime = performance.now()
    let frame = 0

    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const now = performance.now()
        const loopHeight = (loopRef.current?.scrollHeight ?? 0) / storyCopies
        let y = window.scrollY

        if (loopHeight > 1 && !didCenterLoopRef.current) {
          y = loopHeight
          window.scrollTo(0, y)
          lastY = y
          didCenterLoopRef.current = true
        } else if (loopHeight > 1 && y < loopHeight * 0.45) {
          y += loopHeight
          window.scrollTo(0, y)
          lastY = y
        } else if (loopHeight > 1 && y > loopHeight * 2.55) {
          y -= loopHeight
          window.scrollTo(0, y)
          lastY = y
        }

        const distance = y - lastY
        const elapsed = Math.max(now - lastTime, 16)
        const speed = Math.max(-1, Math.min(distance / elapsed / 2, 1))
        const progress = loopHeight > 1 ? getLoopProgress(y, loopHeight) : 0

        setMotion({
          progress,
          speed,
        })

        lastY = y
        lastTime = now
      })
    }

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const phase = useMemo(() => motion.progress * Math.PI * 20, [motion.progress])
  const walk = Math.sin(phase)
  const counterWalk = Math.cos(phase)
  const jump = Math.max(0, Math.sin(motion.progress * Math.PI * 9))
  const lean = motion.speed * 14
  const leftArm = -58 + counterWalk * 34
  const rightArm = 58 + walk * 34
  const leftLeg = -28 + walk * 36
  const rightLeg = 28 + counterWalk * 36
  const loopAngle = motion.progress * Math.PI * 2
  const face = 1
  const travelX = 48 - Math.cos(loopAngle) * 38
  const travelY = 46 + Math.sin(loopAngle * 1.35) * 14
  const currentSectionIndex = Math.min(
    Math.floor(motion.progress * storySections),
    storySections - 1,
  )
  const isOutro = currentSectionIndex === storySections - 1
  const currentChapterIndex = isOutro
    ? chapters.length - 1
    : Math.min(currentSectionIndex, chapters.length - 1)
  const currentAction = chapters[currentChapterIndex].action
  const localProgress = motion.progress * storySections - currentSectionIndex
  const actionPulse = Math.max(0, Math.sin(localProgress * Math.PI))
  const orbitSpeed = 38

  const beginOrbitDrag = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    dragRef.current = {
      type: 'orbit',
      startX: event.clientX,
      startY: event.clientY,
      startRotation: orbitRotation,
    }
  }

  const beginItemDrag = (key: string, event: PointerEvent<HTMLSpanElement>) => {
    event.stopPropagation()
    event.currentTarget.setPointerCapture(event.pointerId)
    dragRef.current = {
      type: 'item',
      key,
      startX: event.clientX,
      startY: event.clientY,
      startRotation: itemSpins[key] ?? 0,
    }
  }

  const drag = (event: PointerEvent<HTMLDivElement>) => {
    const dragState = dragRef.current
    if (!dragState) {
      return
    }

    const distance = event.clientX - dragState.startX
      + (event.clientY - dragState.startY) * 0.2
    if (dragState.type === 'orbit') {
      setOrbitRotation(dragState.startRotation + distance * 0.32)
      return
    }

    if (dragState.key) {
      setItemSpins((spins) => ({
        ...spins,
        [dragState.key]: dragState.startRotation + distance * 1.6,
      }))
    }
  }

  const endDrag = () => {
    dragRef.current = null
  }

  return (
    <main
      className="story"
      style={
        {
          '--progress': motion.progress,
          '--walk': walk,
          '--counter-walk': counterWalk,
          '--jump': jump,
          '--lean': `${lean}deg`,
          '--left-arm': `${leftArm}deg`,
          '--right-arm': `${rightArm}deg`,
          '--left-leg': `${leftLeg}deg`,
          '--right-leg': `${rightLeg}deg`,
          '--travel-x': `${travelX}vw`,
          '--travel-y': `${travelY}vh`,
          '--face': face,
          '--action-pulse': actionPulse,
          '--local-progress': localProgress,
          '--orbit-speed': `${orbitSpeed}s`,
          '--orbit-rotation': `${orbitRotation}deg`,
        } as React.CSSProperties
      }
      data-action={currentAction}
      data-tone={isOutro ? 'dark' : 'light'}
    >
      <PaperDepthLayer progress={motion.progress} speed={motion.speed} action={currentAction} />

      <aside className="stage" aria-label="scrolling stick man narrator">
        <div className="progress-track">
          <div className="progress-fill" />
        </div>
        <div className="stick-wrap">
          <div className="paper-plane" aria-hidden="true">
            <span className="smoke smoke-one" />
            <span className="smoke smoke-two" />
            <span className="smoke smoke-three" />
          </div>
          <div className="speech">
            {isOutro ? 'white outfit. black slide. drama.' : chapters[currentChapterIndex].bubble}
          </div>
          <div className="stickman" aria-hidden="true">
            <span className="head" />
            <span className="body" />
            <span className="arm arm-left" />
            <span className="arm arm-right" />
            <span className="leg leg-left" />
            <span className="leg leg-right" />
            <span className="flower flower-one" />
            <span className="flower flower-two" />
            <span className="flower flower-three" />
            <span className="stick-prop prop-one" />
            <span className="stick-prop prop-two" />
            <span className="stick-prop prop-three" />
            <span className="shadow" />
          </div>
        </div>
      </aside>

      <div className="story-loop" ref={loopRef}>
        {Array.from({ length: storyCopies }, (_, copyIndex) => (
          <StoryPass
            key={copyIndex}
            copyIndex={copyIndex}
            beginOrbitDrag={beginOrbitDrag}
            beginItemDrag={beginItemDrag}
            drag={drag}
            endDrag={endDrag}
            itemSpins={itemSpins}
          />
        ))}
      </div>
    </main>
  )
}

export default App
