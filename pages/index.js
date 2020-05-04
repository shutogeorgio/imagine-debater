import Head from 'next/head'
import RevealButton from '../components/RevealButton'
import Job from '../components/Job'
import Footer from '../components/Footer'

export default function Home() {
  const color = "btn btn-secondary";
  return (
    <div className="container">
      <Head>
        <title>EG Debater</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/lib/css/style.css" rel="stylesheet" />
      </Head>

      <main>
        <a href="/jp" className="btn btn-danger d-flex ml-auto">JP</a>
        <h1 className="title">🔥EG Debater🔥</h1>
        <a href="/overview" className="btn btn-primary mt-5">Overview</a>
        <div className="flex">
        <div className="grid">
          <div href="https://nextjs.org/docs" className="card">
            <div className="sizser">
                <h2 className="mr-5 text-warning">Player. 1</h2>
                <Job />
              </div>
              <RevealButton />
          </div>
        </div>

        <div className="grid">
          <div href="https://nextjs.org/docs" className="card">
            <div className="sizser">
              <h2 className="mr-5 text-success">Player. 2</h2>
              <Job />
            </div>
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
