import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import React, {useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [text, setText] = useState("");
  const [addText, setAddText] = useState("");

  const onClickAddText = () => {
    setAddText(text);
    setText("");
  }
  return (
    <main>
      <div className="text-center flex flex-col space-y-4">
        <div className="font-bold text-2xl">2023/4/15更新</div>
        <div>気が向いたら更新予定</div>
        <div>↓クリック</div>
        <Link href="/profile" className="bg-green-300">
          自己紹介
        </Link>
        <div className="space-x-4">
          <input value={text} onChange={(event) => setText(event.target.value)} className="border-2 h-16" />
          <button onClick={onClickAddText} className="border-2">送信</button>
          <p>{addText}</p>
        </div>
      </div>


    </main>
  )
}
