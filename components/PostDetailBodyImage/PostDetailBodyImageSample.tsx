import React, { useEffect, useMemo, useRef, useState } from 'react'
import { encode } from 'js-base64'

type Props = {
  url: string
  width: number
  height: number
}

const sizes = [640, 750, 828, 1080, 1200]

const Component: React.FC<Props> = ({ url, width, height }) => {
  const srcSetWebp = useMemo(
    () => sizes.map((size) => `${url}?w=${size}&fm=webp ${size}w`).join(', '),
    [url]
  )
  const srcSetDefault = useMemo(
    () => sizes.map((size) => `${url}?w=${size}&fm=png ${size}w`).join(', '),
    [url]
  )

  const [isLoad, setIsLoad] = useState(false)
  const lazyImage = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (process.browser) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoad(true)
          }
        })
      })
      if (lazyImage.current) {
        observer.observe(lazyImage.current)
      }
    }
  }, [])

  return (
    <div ref={lazyImage}>
      {!isLoad ? (
        <img
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          alt='CLS防止用画像'
          aria-hidden={true}
          role='presentation'
          src={`data:image/svg+xml;base64,${encode(
            `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`
          )}`}
        />
      ) : (
        <picture>
          <source type='image/webp' srcSet={srcSetWebp} sizes='100vw' />
          <source type='image/png' srcSet={srcSetDefault} sizes='100vw' />
          <img
            src={`${url}?w=${sizes[sizes.length - 1]}`}
            width={width}
            height={height}
            decoding='async'
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </picture>
      )}
    </div>
  )
}

export { Component as PostDetailBodyImageSample }
