import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="text-center flex flex-col space-y-4">
        <div className="font-bold text-2xl">2023/4/15</div>
        <div>気が向いたら更新予定</div>
        <div>↓クリック</div>
        <Link href="/profile" className="bg-green-300">
          自己紹介
        </Link>

      </div>

    </main>
  )
}
