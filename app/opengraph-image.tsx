import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { siteConfig } from '@/lib/site'

// Generated at build time, so the card can never drift from the site's own copy.
// Everything it renders comes from lib/site.ts. Change the copy there and the
// image is redrawn on the next deploy. Do not replace this with a static PNG.
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${siteConfig.name}. ${siteConfig.ogHeadline}`

const INK = '#101820'
const COBALT = '#2B4FE0'
const BONE_2 = '#f5f2ec'
const ASH_DARK = '#525a66'
const LINE = '#d8d3c8'

export default async function OpenGraphImage() {
  const [newsreader, geist] = await Promise.all([
    readFile(join(process.cwd(), 'app/og-fonts/Newsreader-SemiBold.ttf')),
    readFile(join(process.cwd(), 'app/og-fonts/Geist-Medium.ttf'))
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: BONE_2,
          padding: '72px 80px',
          fontFamily: 'Geist'
        }}
      >
        {/* Wordmark. The Ai is cobalt; it is never carried by capitalization. */}
        <div
          style={{
            display: 'flex',
            fontFamily: 'Newsreader',
            fontSize: 46,
            letterSpacing: '-0.01em',
            color: INK
          }}
        >
          <span>Oper</span>
          <span style={{ color: COBALT }}>Ai</span>
          <span>te</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontFamily: 'Newsreader',
              // 68/1010 keeps "no-shows" from breaking at its hyphen. If you
              // change ogHeadline, re-check the line breaks.
              fontSize: 68,
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
              color: INK,
              maxWidth: 1010
            }}
          >
            {siteConfig.ogHeadline}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 27,
              lineHeight: 1.4,
              color: ASH_DARK
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: `2px solid ${LINE}`,
            paddingTop: 26
          }}
        >
          <div style={{ display: 'flex', fontSize: 25, color: COBALT }}>
            operaiteconsulting.com
          </div>
          <div style={{ display: 'flex', fontSize: 25, color: ASH_DARK }}>
            {siteConfig.phone}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Newsreader', data: newsreader, weight: 600, style: 'normal' },
        { name: 'Geist', data: geist, weight: 500, style: 'normal' }
      ]
    }
  )
}
