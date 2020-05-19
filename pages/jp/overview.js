import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import OverviewJP from '../../components/jp/Overview'
import Footer from '../../components/Footer'

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Imagine Debater | Overview</title>
        <link rel="icon" href="/imagine-logo.png" />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/lib/css/style.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
    <Navbar />
      <main>
        <h1 className="h1-title text-info mr-auto">ルール</h1>
        <div className="flex flex-column">
          <OverviewJP />
        </div>
        <Link href="/jp/game">
          <a className="btn btn-info mt-5">ゲームをプレイ　&rarr;</a> 
        </Link>
      </main>
      <Footer />
    </div>
  )
}
