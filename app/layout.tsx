import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Finlay Goff',
  description:
    'Software Engineer based in London, specialising in full-stack development with TypeScript, C#, and React.',
  openGraph: {
    title: 'Finlay Goff',
    description:
      'Software Engineer based in London, specialising in full-stack development with TypeScript, C#, and React.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-bg text-text font-sans antialiased leading-relaxed">
        {children}
      </body>
    </html>
  )
}
