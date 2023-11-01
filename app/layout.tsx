import type { Metadata } from 'next'
import Sidebar from '@/components/Sidebar';
import './globals.css'
import Followbar from '@/components/Followbar';
import Modal from '@/components/Modal';


export const metadata: Metadata = {
  title: 'twitter clone',
  description: "let's tweet something",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-black">
        <div className="container h-full p-0 mx-auto xl:px-30 max-w-6xl">
          <div className="grid grid-cols-4 h-full">
            <Sidebar />
            <div className='col-span-3 lg:col-span-2'>
              <Modal actionLabel='Submit' isOpen title="Test Modal" />
              {children}
            </div>
            <Followbar />
          </div>
        </div>
        </body>
    </html>
  )
}
