import Head from 'next/head'
import Overview from '../components/Overview'

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
        <h1 className="title">Overview</h1>
        <div className="flex flex-column">
          <h2 className="mr-5 text-warning">Rules</h2>
          <Overview />
        </div>
        <a href="/" className="btn btn-danger mt-5">Home</a>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}