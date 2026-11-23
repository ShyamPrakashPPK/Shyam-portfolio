'use client'

import { useEffect, useRef } from 'react'
import { createNoise3D } from 'simplex-noise'

const TEXT = 'Loading'
export const LOADING_FILL_MS = 2400
export const LOADING_HOLD_MS = 2800

const WAVE_COLORS = ['#ffffff', '#f5f5f5', '#e8e8e8', '#d0d0d0', '#b8b8b8']

const easeInOut = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

export default function LoadingScreen() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const offscreen = document.createElement('canvas')
        const off = offscreen.getContext('2d')
        if (!off) return

        const noise = createNoise3D()
        const started = performance.now()
        let nt = 0
        let raf = 0
        let cancelled = false

        const fitFontSize = (cssWidth: number) => {
            let size = Math.max(72, Math.min(cssWidth * 0.18, 240))
            while (size > 36) {
                ctx.font = `700 ${size}px Inter, sans-serif`
                if (ctx.measureText(TEXT).width <= cssWidth * 0.88) break
                size -= 2
            }
            return size
        }

        const draw = (now: number) => {
            if (cancelled) return

            const dpr = Math.min(window.devicePixelRatio || 1, 2)
            const cssWidth = window.innerWidth
            const cssHeight = window.innerHeight
            const width = Math.floor(cssWidth * dpr)
            const height = Math.floor(cssHeight * dpr)

            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width
                canvas.height = height
                offscreen.width = width
                offscreen.height = height
            }

            const progress = Math.min(1, (now - started) / LOADING_FILL_MS)
            const eased = easeInOut(progress)
            nt += 0.004

            const fontSize = fitFontSize(cssWidth) * dpr
            const font = `700 ${fontSize}px Inter, sans-serif`
            ctx.setTransform(1, 0, 0, 1, 0, 0)
            off.setTransform(1, 0, 0, 1, 0, 0)
            ctx.font = font
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'

            const metrics = ctx.measureText(TEXT)
            const ascent = metrics.actualBoundingBoxAscent || fontSize * 0.72
            const descent = metrics.actualBoundingBoxDescent || fontSize * 0.18
            const centerY = height / 2
            const textTop = centerY - ascent
            const textBottom = centerY + descent
            const amplitude = Math.max(28 * dpr, fontSize * 0.2)
            const crest =
                textBottom + amplitude -
                eased * (textBottom - textTop + amplitude * 2 + 12 * dpr)

            off.clearRect(0, 0, width, height)
            off.filter = `blur(${4 * dpr}px)`
            off.globalAlpha = 0.95
            off.beginPath()
            const step = Math.max(4, 6 * dpr)
            for (let x = 0; x <= width; x += step) {
                const y = noise(x / (520 * dpr), 0.15, nt) * amplitude + crest
                if (x === 0) off.moveTo(x, y)
                else off.lineTo(x, y)
            }
            off.lineTo(width, height)
            off.lineTo(0, height)
            off.closePath()
            off.fillStyle = '#f4f4f4'
            off.fill()

            const full = eased >= 0.999
            for (let i = 0; i < WAVE_COLORS.length; i++) {
                off.beginPath()
                off.lineWidth = 16 * dpr
                off.strokeStyle = WAVE_COLORS[i]
                off.globalAlpha = 0.55
                const band = full
                    ? textTop + ((i + 0.5) / WAVE_COLORS.length) * (textBottom - textTop)
                    : crest + amplitude + (i + 1) * amplitude * 0.7
                for (let x = 0; x <= width; x += step) {
                    const y = noise(x / (520 * dpr), 0.32 * i, nt) * amplitude * 0.65 + band
                    if (x === 0) off.moveTo(x, y)
                    else off.lineTo(x, y)
                }
                off.stroke()
            }

            off.filter = 'none'
            off.globalAlpha = 1

            ctx.clearRect(0, 0, width, height)
            ctx.globalCompositeOperation = 'source-over'
            ctx.drawImage(offscreen, 0, 0)
            ctx.globalCompositeOperation = 'destination-in'
            ctx.fillStyle = '#ffffff'
            ctx.fillText(TEXT, width / 2, centerY)
            ctx.globalCompositeOperation = 'source-over'
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.92)'
            ctx.lineWidth = 1.5 * dpr
            ctx.lineJoin = 'round'
            ctx.strokeText(TEXT, width / 2, centerY)

            raf = requestAnimationFrame(draw)
        }

        const start = () => {
            if (!cancelled) raf = requestAnimationFrame(draw)
        }

        if (document.fonts?.ready) {
            document.fonts.ready.then(start)
        } else {
            start()
        }

        return () => {
            cancelled = true
            cancelAnimationFrame(raf)
        }
    }, [])

    return (
        <>
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
            <span className="sr-only">Loading</span>
        </>
    )
}
