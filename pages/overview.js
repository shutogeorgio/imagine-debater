import Head from 'next/head'
import Navbar from '../components/Navbar'
import Overview from '../components/Overview'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Overview</title>
        <link rel="icon" href="/imagine-logo.png" />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/lib/css/style.css" rel="stylesheet" />
      </Head>

      <Navbar />

      <main>
        <h1 className="title">Overview</h1>
        <div className="flex flex-column">
          <h2 className="mr-5 text-info">Rules</h2>
          <Overview />
        </div>
        <a href="/" className="btn btn-info mt-5">Home</a>
      </main>

      <Footer />
    </div>
  )
}