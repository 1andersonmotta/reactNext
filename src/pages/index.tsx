// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

const nome = "Anderson"
let idade = "38"

function Topo() {
  return (
    <div>
      <div>Topo do {nome}</div>
      <div>Topo da {idade}</div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex justify-around items-center bg-slate-500 h-[100px]">
      <Topo></Topo>
      <div >olá mundo do {nome}</div>
      <div>olá mundo - {idade}</div>
    </main>
  )
}
