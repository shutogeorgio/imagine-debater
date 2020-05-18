import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Imagine Debater</title>
        <link rel="icon" href="/imagine-logo.png" />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/lib/css/style.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />

      <main>
        <div className="flex index-flex-manager">
          <div className="d-flex flex-column pl-3 mr-5 align-items-center">
            <h1 className="h1-title mr-auto"><img src="/imagine-logo.png" className="title-logo" />Imagine Debater</h1>
            <div className="mt-3 desc-under mr-auto">自分の自身の直感を信じましょう。<br /> 想像力増大のために有効なエクササイズです。</div>
            <Link href="/jp/overview">
              <a className="btn btn-outline-info mt-3 btn-sm mr-auto">ルールを確認 &rarr;</a>
            </Link>
          </div>
          <div className="d-flex w-display-manager">
            <img src="/discuss.png" className="w-100 bd-rd-min" />
          </div>
        </div>
        <div className="d-flex">
          <Link href="/jp/game">
            <a className="btn btn btn-info mt-5 w-100">ゲームをプレイ &rarr;</a>
          </Link>
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
