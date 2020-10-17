import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home: React.FunctionComponent = () => {
  return (
    <div className="container w-full flex flex-col items-center mx-auto">
      <Head>
        <title>Imagine Debater</title>
        <link rel="icon" href="/imagine-logo.png" />
        <link href="/lib/css/style.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      
      <main>
        <div className="flex index-flex-manager">
          <div className="d-flex flex-column pl-3 mr-5 align-items-center">
            <h1 className="h1-title mr-auto"><img src="/imagine-logo.png" className="title-logo" />Imagine Debater</h1>
            <div className="mt-3 desc-under mr-auto">Follow your "Wild Imagination".<br /> Exercise to maxmize your creativities.</div>
            <Link href="/overview">
              <a className="btn btn-outline-info mt-3 btn-sm mr-auto">See Overview &rarr;</a>
            </Link>
          </div>
          <div className="d-flex w-display-manager">
            <img src="/discuss.png" className="w-100 bd-rd-min" />
          </div>
        </div>
        <div className="d-flex">
          <Link href="/game">
            <a className="btn btn btn-info mt-5 w-100">Let's Play! &rarr;</a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home