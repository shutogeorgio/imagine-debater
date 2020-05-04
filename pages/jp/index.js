import Head from 'next/head'
import Job from '../../components/jp/Job'
import Footer from '../../components/Footer'
import RevealButton from '../../components/jp/RevealButton'

export default function Home() {
  
  return (
    <div className="container">
      <Head>
        <title>Imagine Debater</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/lib/css/style.css" rel="stylesheet" />
      </Head>

      <main>
        <a href="/" className="btn btn-danger d-flex ml-auto">EN</a>
        <h1 className="title"><img src="/imagine-logo.png" class="title-logo" />Imagine Debater</h1>
        <a href="/jp/overview" className="btn btn-info mt-5">ルール説明</a>
        <div className="flex">
        <div className="grid mr-5">
          <div href="https://nextjs.org/docs" className="card shadow-lg bg-light">
            <div className="sizser">
              <h2 className="mr-1 text-info">プレイヤー. 1</h2>
            </div>
              <h3 className="mt-1"><Job /></h3>
              <RevealButton />
          </div>
        </div>

        <div className="grid">
          <div href="https://nextjs.org/docs" className="card shadow-lg bg-light">
            <div className="sizser">
              <h2 className="mr-5 text-info">プレイヤー. 2</h2>
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
