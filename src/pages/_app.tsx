import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@/styles/style.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap, faHandHoldingDollar, faLightbulb, faMedal, faMugHot, faStar, faStarHalfStroke, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Adicione os ícones à biblioteca
library.add(faHandHoldingDollar, faMugHot, faMedal, faGraduationCap, faThumbsUp, faLightbulb);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
