import Head from 'next/head'
import Job from '../../components/Job.jp'
import Footer from '../../components/Footer'
import randomExtract from '../../public/lib/js/randomGetter'
import closeOpenFuncFirst from '../../public/lib/js/first'
import closeOpenFuncSecond from '../../public/lib/js/secondary'

export default function Home() {
  
  return (
    <div className="container">
      <Head>
        <title>EG Debater</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/lib/css/style.css" rel="stylesheet" />
      </Head>

      <main>
        <h1 className="title mr-4">🔥EG Debater🔥</h1>
        <a href="/jp/overview" className="btn btn-primary">ルール説明</a>
        
        <div className="flex">
        <div className="grid">
          <div href="https://nextjs.org/docs" className="card">
            <div className="sizser">
              <h2 className="mr-5 text-warning">プレイヤー. 1</h2>
              <button className="btn btn-warning btn-sm text-white summary_btn first"
            onClick={closeOpenFuncFirst}>Open</button>
            </div>
            <h3 className="mt-5"><Job /></h3>  
            <div className="summary-box first">
              <iframe src="https://tango-gacha.com/#word"
              width="100%" height="500" frameBorder="0">
              </iframe>
            </div>
          </div>
        </div>

        <div className="grid">
          <div href="https://nextjs.org/docs" className="card">
            <div className="sizser">
              <h2 className="mr-5 text-success">プレイヤー. 2</h2>  
              <button className="btn btn-success btn-sm text-white summary_btn second"
            onClick={closeOpenFuncSecond}>Open</button>
            </div>
            <h3 className="mt-5"><Job /></h3>
            <div
              className="summary-box second"
            >
              <iframe src="https://tango-gacha.com/#word"
              width="100%" height="500" frameBorder="0">
              </iframe>
            </div>
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
