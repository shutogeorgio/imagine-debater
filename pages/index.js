import Head from 'next/head'
import preloadGoogleFont from '../public/lib/js/preload'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Imagine Debater</title>
        <link rel="icon" href="/imagine-logo.png" />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        {preloadGoogleFont}
        <link href="/lib/css/style.css" rel="stylesheet" />
      </Head>

      <Navbar />
      
      <main>
        <div className="flex index-flex-manager">
          <div className="d-flex flex-column pl-3 mr-5 align-items-center">
            <h1 className="h1-title mr-auto"><img src="/imagine-logo.png" className="title-logo" />Imagine Debater</h1>
            <div className="mt-3 desc-under mr-auto">Follow your "Wild Imagination".<br /> Exercise to maxmize your creativities.</div>
            <a href="/overview" className="btn btn-outline-info mt-3 btn-sm mr-auto">See Overview &rarr;</a>
          </div>
          <div className="d-flex w-display-manager">
            <img src="/discuss.png" className="w-100 bd-rd-min" />
          </div>
        </div>
        <div className="d-flex">
          <a href="/game" className="btn btn btn-info mt-5 w-100">Let's Play! &rarr;</a>
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
        main {
          min-height: 500px;
        }
        .h1-title {
          font-size: 40px;
        }
        .desc-under {
          font-size: 20px;
          line-height: 2;
        } 
        .index-flex-manager {
          place-content: center;
        }
        .w-display-manager {
          width: 50%;
        }
        .bd-rd-min {
          border-radius: 5px;
          box-shadow: 0 1px 0 rgba(12,13,14,0.15);
        }
      `}</style>
    </div>
  )
}
