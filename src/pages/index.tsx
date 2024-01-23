/* eslint-disable react/jsx-no-undef */
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap, faHandHoldingDollar, faLightbulb, faMedal, faMugHot, faStar, faStarHalfStroke, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Adicione os ícones à biblioteca
library.add(faHandHoldingDollar, faMugHot, faMedal, faGraduationCap, faThumbsUp, faLightbulb);

import VideoComponent from "@/components/background-video";
import Header from "@/components/header";
import Anime from "@/components/anime";
import Component from "@/components/component";
import Main from "@/components/main";
import Services from "@/components/services";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Facts from "@/components/facts";
import Video from "@/components/video";

export default function Home() {
  return (
    <main >
      <Video></Video>
      <Header />
      <VideoComponent></VideoComponent>
      <Component></Component>
      <Main></Main>
      <Services></Services>
      <Experience></Experience>
      <Skills></Skills>
      <Facts></Facts>
      <Anime></Anime>
    </main>
  )
}
