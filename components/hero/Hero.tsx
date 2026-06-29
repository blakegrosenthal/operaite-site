'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { env } from '@/lib/env'
import styles from './Hero.module.css'

type Clip = { label: string; src: string; start: number }

const CLIPS: Clip[] = [
  { label: 'clinics & front desks', src: 'https://videos.pexels.com/video-files/5137839/5137839-uhd_2732_1440_25fps.mp4', start: 30 },
  { label: 'auto shops', src: 'https://videos.pexels.com/video-files/14514790/14514790-hd_1920_1080_25fps.mp4', start: 0 },
  { label: 'HVAC & trades', src: 'https://videos.pexels.com/video-files/4456112/4456112-hd_1920_1080_25fps.mp4', start: 0 },
  { label: 'home services', src: 'https://videos.pexels.com/video-files/8853516/8853516-hd_1920_1080_24fps.mp4', start: 0 },
  { label: 'carpentry & build', src: 'https://videos.pexels.com/video-files/6790431/6790431-hd_1920_1080_25fps.mp4', start: 0 }
]
const HOLD = 4400
const CHAR_STEP = 0.038

// Headline lines as [text, isEmphasis] segments
const LINES: { segs: { t: string; em?: boolean }[] }[] = [
  { segs: [{ t: 'Stop losing ' }, { t: 'revenue', em: true }, { t: ' to' }] },
  { segs: [{ t: 'missed follow-ups, no-shows,' }] },
  { segs: [{ t: 'and delayed invoices.' }] }
]

const Arrow = () => (
  <svg viewBox="0 0 8 8" fill="none">
    <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function splitWords(text: string, baseDelay: number) {
  return text.split(' ').map((w, i) => (
    <span
      key={i}
      className={styles.word}
      style={{ animationDelay: `${baseDelay + i * 0.045}s` }}
    >
      {w}&nbsp;
    </span>
  ))
}

export function Hero() {
  const [ready, setReady] = useState(false)
  const heroRef = useRef<HTMLElement | null>(null)
  const bgRef = useRef<HTMLDivElement | null>(null)
  const nowRef = useRef<HTMLSpanElement | null>(null)

  // Montage: build preloaded, pre-seeked video elements
  useEffect(() => {
    const bg = bgRef.current
    const nowEl = nowRef.current
    if (!bg || !nowEl) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const vids: HTMLVideoElement[] = CLIPS.map((c) => {
      const v = document.createElement('video')
      v.className = styles.video
      v.muted = true
      v.loop = true
      v.playsInline = true
      v.preload = 'auto'
      const s = document.createElement('source')
      s.src = c.src
      s.type = 'video/mp4'
      v.appendChild(s)
      ;(v as any).__start = c.start || 0
      v.addEventListener('loadeddata', () => {
        if ((v as any).__start > 0) {
          try { v.currentTime = (v as any).__start } catch {}
        }
      })
      bg.appendChild(v)
      v.load()
      return v
    })

    let cur = 0
    let started = false
    const playFrom = (v: HTMLVideoElement) => {
      const st = (v as any).__start
      try { if (st > 0 && Math.abs(v.currentTime - st) > 2) v.currentTime = st } catch {}
      v.play().catch(() => {})
    }
    const show = (i: number) => {
      vids.forEach((v, k) => {
        if (k === i) {
          playFrom(v)
          v.classList.add(styles.show)
        } else {
          v.classList.remove(styles.show)
          setTimeout(() => { if (!v.classList.contains(styles.show)) v.pause() }, 1300)
        }
      })
      nowEl.style.opacity = '0'
      setTimeout(() => { nowEl.textContent = CLIPS[i].label; nowEl.style.opacity = '1' }, 400)
    }

    const begin = () => { if (!started) { started = true; setReady(true) } }

    vids[0].addEventListener('loadeddata', () => { vids[0].play().catch(() => {}); vids[0].classList.add(styles.show) }, { once: true })
    if (vids[0].readyState >= 4) begin()
    else vids[0].addEventListener('canplaythrough', begin, { once: true })
    const fallback = setTimeout(begin, 4000)

    const interval = reduce ? 0 : window.setInterval(() => { cur = (cur + 1) % CLIPS.length; show(cur) }, HOLD)

    return () => {
      clearTimeout(fallback)
      if (interval) clearInterval(interval)
      vids.forEach((v) => { v.pause(); v.remove() })
    }
  }, [])

  const scrollDown = () => {
    const el = document.getElementById('where-work-breaks')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  // char index accumulator across a line
  return (
    <>
      <section ref={heroRef} className={`${styles.hero} ${ready ? styles.ready : ''}`}>
        <div ref={bgRef} className={styles.bg} />
        <div className={styles.overlay} />
        <div className={styles.overlay2} />
        <div className={styles.blur}>
          <div className={styles.blurLayer} /><div className={styles.blurLayer} /><div className={styles.blurLayer} /><div className={styles.blurLayer} />
          <div className={styles.blurLayer} /><div className={styles.blurLayer} /><div className={styles.blurLayer} /><div className={styles.blurLayer} />
        </div>

        <header className={styles.header}>
          <Link href="/" className={styles.logo}>oper<b>AI</b>te</Link>
          <nav className={styles.navPill} aria-label="Primary">
            <Link href="/services">Services</Link>
            <Link href="/self-check">Self-Check</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/about">About</Link>
          </nav>
          <Link className={`${styles.btn} ${styles.btnHeader}`} href={env.calendlyUrl}>
            Book a call <Arrow />
          </Link>
        </header>

        <h1 className={styles.heading}>
          {LINES.map((line, li) => {
            const lineDelay = 0.3 + li * 0.55
            let ci = 0
            return (
              <span key={li} className={styles.line}>
                <span className={styles.lineInner}>
                  {line.segs.map((seg, si) => {
                    const Tag = seg.em ? 'em' : 'span'
                    const chars = Array.from(seg.t).map((ch, k) => {
                      if (ch === ' ') return <span key={`sp-${li}-${si}-${k}`}>{' '}</span>
                      const delay = lineDelay + ci * CHAR_STEP
                      ci += 1
                      return (
                        <span key={`ch-${li}-${si}-${k}`} className={styles.char} style={{ animationDelay: `${delay}s` }}>
                          {ch}
                        </span>
                      )
                    })
                    return <Tag key={si}>{chars}</Tag>
                  })}
                </span>
              </span>
            )
          })}
        </h1>

        <div className={styles.serves}>
          <span className={styles.dot} />
          Built for&nbsp;<span ref={nowRef} className={styles.servesNow}>clinics &amp; front desks</span>
        </div>

        <div className={styles.bottom}>
          <div className={styles.label}>{splitWords('01 — The problem', 1.0)}</div>
          <p className={styles.desc}>
            {splitWords(
              'Most revenue loss in service businesses doesn’t come from big mistakes. It leaks — one missed follow-up, one late invoice at a time. We install the simple systems that stop it.',
              1.2
            )}
          </p>
          <div className={styles.actions}>
            <Link className={`${styles.btn} ${styles.btnFooter}`} href={env.calendlyUrl}>
              Book a 30-Minute Operations Review <Arrow />
            </Link>
            <button className={styles.scrollDown} onClick={scrollDown} type="button">
              <span className={styles.scrollTxt}>Scroll down</span>
              <span className={styles.circ}>
                <svg viewBox="0 0 7.222 8.667" fill="none">
                  <path d="M3.611 1V7.667M3.611 7.667L1 5M3.611 7.667L6.222 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
      <div className={styles.blend} />
    </>
  )
}
