import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import BackgroundComponent from "@/components/background-video";
import Header from "@/components/header";
import Anime from "@/components/anime";
import Component from "@/components/component";
import Main from "@/components/main";
import Services from "@/components/services";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Facts from "@/components/facts";
import Video from "@/components/video";
import ProjectsComponent from '@/components/projects';
import FooterComponent from '@/components/footer';

export default function Home() {
  return (
    <main >
      <Video></Video>
      <Header />
      <BackgroundComponent></BackgroundComponent>
      <Component></Component>
      <Main></Main>
      <Services></Services>
      <Experience></Experience>
      <Skills></Skills>
      <Facts></Facts>
      {/* <Anime></Anime> */}
      <ProjectsComponent />
      <FooterComponent />
    </main>
  )
}
