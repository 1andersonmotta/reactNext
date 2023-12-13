/* eslint-disable react/jsx-no-undef */
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

import VideoComponent from "@/components/background-video";
import Header from "@/components/header";
import Anime from "@/components/anime";
import Component from "@/components/component";
import Main from "@/components/main";
import Services from "@/components/services";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main >
      <Header />
      <VideoComponent></VideoComponent>
      <Component></Component>
      <Main></Main>
      <Services></Services>
      <Experience></Experience>
      <Anime></Anime>
    </main>
  )
}
