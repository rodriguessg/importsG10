import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'G10 Importações',
  description: 'Desenvolvido por Gabriel Rodrigues',
  generator: 'Dev Gabriel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="PT-BR">
      <body>{children}</body>
    </html>
  )
}
