import BackgroundComponent from "@/components/background-video";
import Header from "@/components/header";
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
      <ProjectsComponent />
      <FooterComponent />
    </main>
  )
}
