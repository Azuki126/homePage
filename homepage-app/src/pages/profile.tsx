import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Prof() {
    return (
        <main>
            <div className="flex flex-col space-y-4 text-center bg-green-300">
                <div className="">名前 : unknown</div>
                <div className="">年齢 : 19</div>
                <div className="">趣味 : アニメ</div>
                <div>最近のトレンド : 韻波句徒が無限に流れてる</div>
                <div className="flex justify-center">
                    <Image src="/m.jpg" alt="namatamago" height={720} width={1280} priority={true}/>
                </div>
            </div>
            <Link href="/" className="bg-green-300">
                ホームへ戻る
            </Link>
        </main>
    )
}