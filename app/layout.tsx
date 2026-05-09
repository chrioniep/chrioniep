import type { Metadata } from 'next'
import { Source_Serif_4, Geist, JetBrains_Mono } from 'next/font/google'
import { Providers } from '@/lib/providers'
import './globals.css'

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif-4',
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'onion',
    template: '%s — onion',
  },
  description: 'Active recall for serious learners.',
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sourceSerif4.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
