import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="text-center">
        <p>学習部屋</p>
        <p>Next.jsとvercelを使用</p>
        <p>↓クリック</p>
      <Link href="/profile" className="bg-green-300">
        自己紹介
      </Link>

      </div>

    </main>
  )
}
