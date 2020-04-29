import Head from 'next/head'

export default function Home() {
  
  const occupations_jp = [
    '公務員[一般行政職]',
    '歌手',
    '薬剤師',
    '宇宙開発技術者',
    '金融業界で働く',
    '作業療法士',
    '自然観察指導員',
    '作家',
    '看護師',
    '助産師',
    '留学コーディネーター',
    'ブライダルコーディネーター',
    '画家',
    '建築家',
    '医師',
    'グランドホステス(グランドスタッフ)',
    '外交官',
    'メイクアップアーティスト',
    '歴培養士(エンブリオロジスト)',
    'スタイリスト',
    'プラネタリウムで働く',
    'テレビ業界で働く',
    'ツアーコンダクター',
    'パン職人',
    'イラストレーター',
    'ファッションデザイナー',
    'プロスポーツ選手',
    'ゲームクリエイター',
    '臨床心理士',
    'スポーツトレーナー',
    '中学校教師',
    '公認会計士',
    'フラワーデザイナー',
    'CGクリエーター',
    '通訳',
    '編集者',
    'パティシエ',
    '保育士',
    '美容師',
    '客室乗務員',
    '犬の訓練士',
    'ネイルアーティスト',
    '速記者',
    'エンジニア',
    '獣医師',
    '農業',
    '言語聴覚士',
    '映画監督',
    '理学療法士',
    'ミキサー',
    '漫画家',
    '栄養士',
    'ゲームグラフィックデザイナー',
    '水族館の飼育係',
    '警察官',
    'PA[音響]',
    'ホテルで働く',
    '幼稚園教諭',
    '声優',
    '動物園の飼育係',
    'トリマー',
    '登山家',
    '天文台で働く',
    'NASAで働く',
    'カイロプラクター',
    '電車運転士'
  ];
  
  const randomly = () => {
    return 0.5 - Math.random();
  }
  
  const randomExtract = (array) => {
    var jsonObj = [];
    for (var l=1;l<array.length;l++) { 
      jsonObj.push({label: l, values: array[l]}); 
    }
    array.sort(randomly);
    console.log(array)
    return array;
  }

  
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">EG Item Generator</h1>
        <div className="flex">
        <div className="grid">
          <div href="https://nextjs.org/docs" className="card">
            <h2>Player. 1</h2>
            <h3>{randomExtract(occupations_jp)[1]}</h3>
            <iframe src="https://tango-gacha.com/"
              width="100%" height="500" frameborder="0"
              allowfullscreen sandbox>
              </iframe>
          </div>
        </div>

        <div className="grid">
          <div href="https://nextjs.org/docs" className="card">
            <h2>Player. 2</h2>
            <h3>{randomExtract(occupations_jp)[1]}</h3>
            <iframe src="https://tango-gacha.com/"
              width="100%" height="500" frameborder="0"
              allowfullscreen sandbox>
            </iframe>
          </div>
        </div>
        </div>
        
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

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .flex {
          display: flex;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          width: 50%;
          margin-top: 3rem;
        }

        .card {
          margin: 30px 15px 0 0;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .img {
          display: none;
        }

        #header {
          display: none;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

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
