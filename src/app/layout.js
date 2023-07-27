import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb Clone',
  description: 'App built to learn how to create an IMDb clone.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Header */}
      {/* Navbar */}
      {/* SearchBox */}
      <body className={inter.className}>
      <Header></Header>{children}</body>
    </html>
  )
}
