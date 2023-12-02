// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

const nome = "Anderson"
let idade = "38"

export default function Home() {
  return (
    <main>
      <div>olá mundo do {nome}</div>
      <div>olá mundo - {idade}</div>
    </main>
  )
}
