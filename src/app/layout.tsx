import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog Website',
  description: 'Blogs of bisw4sh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + "min-h-screen dark:bg-slate-950 dark:text-white px-16 py-8"
        }
      >
        {children}
      </body>
    </html>
  );
}
