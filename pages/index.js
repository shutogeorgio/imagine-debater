import Head from 'next/head'
import Items from '../components/Item'
import Job from '../components/Job'
import Footer from '../components/Footer'

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
        <h1 className="title">🔥EG Debater🔥</h1>
        <a href="/overview" className="btn btn-primary mt-5">Overview</a>
        <div className="flex">
        <div className="grid">
          <div href="https://nextjs.org/docs" className="card">
            <div className="sizser">
                <h2 className="mr-5 text-warning">Player. 1</h2>
                <Job />
              <button className="btn btn-warning btn-sm text-white summary_btn first">Open</button>
            </div>
            <h3 className="mt-5"></h3>  
            <div className="summary-box first">
              <Items />
            </div>
          </div>
        </div>

        <div className="grid">
          <div href="https://nextjs.org/docs" className="card">
            <div className="sizser">
                <h2 className="mr-5 text-success">Player. 2</h2>
                <Job />
              <button className="btn btn-success btn-sm text-white summary_btn second">Open</button>
            </div>
            <h3 className="mt-5"></h3>
            <div
              className="summary-box second"
            >
              <Items />
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
