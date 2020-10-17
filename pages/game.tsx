import Head from 'next/head'
import Navbar from '../components/Navbar'
import RevealButton from '../components/RevealButton'
import Reload from '../components/Reload'
import Job from '../components/Job'
import Footer from '../components/Footer'

const Game: React.FunctionComponent = () => {
  return (
    <div className="container w-full flex flex-col items-center mx-auto">
      <Head>
        <title>Imagine Debater Game</title>
        <link rel="icon" href="/imagine-logo.png" />
        <link href="/lib/css/style.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      
      <main>
        <h1 className="h1-title"><img src="/imagine-logo.png" className="title-logo" />Imagine Debater</h1>
        <h3 className="mt-3 text-info">Let's Maximize Productivity and Creativity !!</h3>
        <Reload />
        <div className="flex">
        <div className="grid mr-5">
          <div className="card shadow-lg bg-light">
            <div className="sizser">
                <div className="d-inline-block">
                  <h3 className="mr-5 text-info">Player. 1</h3>
                  <Job />
                  <RevealButton />
                </div>
              </div>
          </div>
        </div>

        <div className="grid">
          <div className="card shadow-lg bg-light">
            <div className="sizser">
              <h3 className="mr-5 text-info">Player. 2</h3>
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
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Game