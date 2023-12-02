// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

const nome = "Anderson"
let idade = "38"

function Topo() {
  return (
    <div>Topo</div>
  )
}

export default function Home() {
  return (
    <main>
      <Topo></Topo>
      <div>olá mundo do {nome}</div>
      <div>olá mundo - {idade}</div>
    </main>
  )
}
