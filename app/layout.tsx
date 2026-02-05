import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '❤️ Para Mi Amor',
  description: 'Un regalo especial hecho con amor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  )
}
