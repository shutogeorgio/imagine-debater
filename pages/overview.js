import Head from 'next/head'
import Link from 'next/link'
import preloadGoogleFont from '../public/lib/js/preload'
import Navbar from '../components/Navbar'
import Overview from '../components/Overview'
import Footer from '../components/Footer'

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
        <div className="flex flex-column mt-3">
          <h1 className="mr-auto text-info">Rules</h1>
          <Overview />
        </div>
        <Link href="/game">
          <a className="btn btn-info mt-5">Let's Play! &rarr;</a>
        </Link>
      </main>
      <Footer />
    </div>
  )
}