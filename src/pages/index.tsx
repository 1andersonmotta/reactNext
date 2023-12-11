/* eslint-disable react/jsx-no-undef */
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

import VideoComponent from "@/component/background-video";
import Header from "@/component/header";
import Anime from "@/component/anime";
import Component from "@/component/component";
import Main from "@/component/main";

export default function Home() {
  return (
    <main >
      <Header />
      <VideoComponent></VideoComponent>
      <Component></Component>
      <Main></Main>
      <Anime></Anime>
    </main>
  )
}
