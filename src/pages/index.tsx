// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

import VideoComponent from "@/component/background-video"

export default function Home() {
  return (
    <main className="flex justify-around items-center bg-slate-500 h-[100px]">

      <VideoComponent></VideoComponent>
    </main>
  )
}
