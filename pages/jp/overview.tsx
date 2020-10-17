import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import OverviewJP from '../../components/jp/Overview'
import Footer from '../../components/Footer.tsx'

const Overview: React.FunctionComponent = () => {

  return (
    <div className="container w-full flex flex-col items-center mx-auto">
      <Head>
        <title>Overview</title>
        <link rel="icon" href="/imagine-logo.png" />
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

export default Overview