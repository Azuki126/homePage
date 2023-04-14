import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="text-center bg-green-300">
        <p>hello world!</p>
      </div>
    </main>
  )
}