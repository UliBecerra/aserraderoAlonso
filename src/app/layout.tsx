
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aserradero Alonso',
  description: 'Aserradero ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <head>
      
     </head>
      <body className={inter.className} >
        <header>
          <Header/>
        </header>
        {children}
        <footer className='bg-[#206caf]'>
          <Footer/>
        </footer>
        </body>
    </html>
  )
}
