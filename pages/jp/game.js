import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Job from '../../components/jp/Job'
import Reload from '../../components/Reload'
import Footer from '../../components/Footer'
import RevealButton from '../../components/RevealButton'

import preloadGoogleFont from '../../public/lib/js/preload'

export default function Home() {
  
  return (
    <div className="container">
      <Head>
        <title>Imagine Debater Game</title>
        <link rel="icon" href="/imagine-logo.png" />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/lib/css/style.css" rel="stylesheet" />
        {preloadGoogleFont}
      </Head>

      <Navbar />
      
      <main>
        <h1 className="h1-title"><img src="/imagine-logo.png" className="title-logo" />Imagine Debater</h1>
        <h3 className="mt-3 text-info">想像力と生産性を最大化しましょう！</h3>
        <Reload />
        <div className="flex">
        <div className="grid mr-5">
          <div href="https://nextjs.org/docs" className="card shadow-lg bg-light">
            <div className="sizser">
              <h3 className="mr-1 text-info">プレイヤー. 1</h3>
            </div>
              <h3 className="mt-1"><Job /></h3>
              <RevealButton />
          </div>
        </div>

        <div className="grid">
          <div href="https://nextjs.org/docs" className="card shadow-lg bg-light">
            <div className="sizser">
              <h3 className="mr-5 text-info">プレイヤー. 2</h3>
            </div>
            <h3 className="mt-1"><Job /></h3>
            <RevealButton />
          </div>
        </div>
        </div>
        
      </main>

      <Footer />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}