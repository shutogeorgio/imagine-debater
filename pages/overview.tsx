import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import OverviewEle from '../components/OverviewEle'
import Footer from '../components/Footer'

const Overview: React.FunctionComponent = () =>  {
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
        <div className="flex flex-column mt-3">
          <h1 className="mr-auto text-info">Rules</h1>
          <OverviewEle />
        </div>
        <Link href="/game">
          <a className="btn btn-info mt-5">Let's Play! &rarr;</a>
        </Link>
      </main>
      <Footer />
    </div>
  )
}

export default Overview