import Head from 'next/head'

export default function Home() {
  
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/lib/style.css" rel="stylesheet" />
      </Head>

      <main>
        <h1 className="title">🔥Overview🔥</h1>
        <div className="flex flex-column">
          <h2 className="mr-5 text-warning">Rules</h2>
          <ul className="mt-3 d-flex flex-column w-100">
            <li className="d-flex mt-3"><h3>1. 1対1のガチンコバトル</h3></li>
            <li className="d-flex mt-3"><h3>2. プレイヤーは1つの役職と3つのアイテムをゲットする。</h3></li>
            <li className="d-flex mt-3"><h3>3. プレイヤーは10秒戦略を練ることができ、その間にアイテムを駆使しながら敵を倒す策を思考。</h3></li>
            <li className="d-flex mt-3"><h3>4. 1分の攻撃タイムで自分の役職が相手の役職よりうわ待っていることを説明する。</h3></li>
            <li className="d-flex mt-3"><h3>5. これを交互に繰り返し、判定員がどちらのほうが強そうか判定する。</h3></li>
          </ul>
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
