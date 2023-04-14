import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Prof() {
  return (
    <main>
      <div className="flex flex-col space-y-4 text-center">
        <div className="bg-green-300">name : マイケル</div>
        <div className="bg-blue-300">age : 19</div>
        <div className="bg-red-300">hobby : だらだら</div>
      </div>
    </main>
  )
}