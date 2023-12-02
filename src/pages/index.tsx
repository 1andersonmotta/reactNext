// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

const nome = "Anderson"
let idade = "38"

function Topo() {
  return (
    <div>Topo do {nome}</div>
  )
}

export default function Home() {
  return (
    <main className="flex justify-between items-center bg-slate-500">
      <Topo></Topo>
      <div >olá mundo do {nome}</div>
      <div>olá mundo - {idade}</div>
    </main>
  )
}
