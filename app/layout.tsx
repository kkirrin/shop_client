import type { Metadata } from 'next';
import './globalStyles/normalize.css';
import '../app/globalStyles/global.css';
import '../app/globalStyles/header.css';
import '../app/globalStyles/menu.css';
import '../app/globalStyles/mobile-navbar.css'
import '../app/globalStyles/catalogMenu.css'
import Layout from '@/components/layouts/layout'


export const metadata: Metadata = {
  title: 'Online shop',
  description: 'Online shop for saling products from Rostelecom',
} 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
  </html>
  )
}
