import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','500','700']
})

export const metadata: Metadata = {
  title: 'Shyam Prakash',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
