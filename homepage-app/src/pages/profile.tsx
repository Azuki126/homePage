import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Prof() {
    return (
        <main>
            <div className="flex flex-col space-y-4 text-center bg-green-300 h-2/3">
                <div className="">名前 : unknown</div>
                <div className="">年齢 : 19</div>
                <div className="">趣味 : アニメ</div>
                <div>
                    最近のトレンド : 韻波句徒が無限に流れてる
                    <a href="https://www.youtube.com/watch?v=E08Intw81T0&pp=ygUM6Z-75rOi5Y-l5b6S">
                        →youtube
                    </a>
                </div>
                <div className="flex justify-center">
                    <Image src="/m.jpg" alt="namatamago" height={720} width={1280} priority={true} />
                </div>
            </div>
            <div className="text-center space-y-4 border-4 w-1/2 absolute left-1/4">
                <p>ゲーム:じゃんたま、goose goose duck、シャニマス等</p>
                <p>バイト:塾講師　数学、プログラミング、英語</p>
                <p>実は受験生だったりする</p>
                <p>中野あるまさんのyoutubeを見ることが日課</p>
                <p>目標:180cm、80kg</p>
                <p>aa</p>

            </div>
            <Link href="/" className="bg-green-300">
                ホームへ戻る
            </Link>
        </main>
    )
}