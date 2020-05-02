import Head from 'next/head'
import randomExtract from '../../public/lib/js/randomGetter'
import closeOpenFuncFirst from '../../public/lib/js/first'
import closeOpenFuncSecond from '../../public/lib/js/secondary'

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
    'ホテルで働く',
    '幼稚園教諭',
    '声優',
    '動物園の飼育係',
    'トリマー',
    '登山家',
    '天文台で働く',
    'NASAで働く',
    '電車運転士'
  ];

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
        <a href="/jp/overview" className="btn btn-primary mt-5">ルール説明</a>
        <div className="flex">
        <div className="grid">
          <div href="https://nextjs.org/docs" className="card">
            <div className="sizser">
              <h2 className="mr-5 text-warning">プレイヤー. 1</h2>
              <a href="javascript:void(0);" className="btn btn-warning btn-sm text-white summary_btn first"
            onClick={closeOpenFuncFirst}>Open</a>
            </div>
            <h3 className="mt-5">{randomExtract(occupations_jp)[1]}</h3>  
            <div className="summary-box first">
              <iframe src="https://tango-gacha.com/#word"
              width="100%" height="500" frameborder="0"
              allowfullscreen sandbox>
              </iframe>
            </div>
          </div>
        </div>

        <div className="grid">
          <div href="https://nextjs.org/docs" className="card">
            <div className="sizser">
              <h2 className="mr-5 text-success">プレイヤー. 2</h2>  
              <a href="javascript:void(0);"
                  className="btn btn-success btn-sm text-white summary_btn second"
            onClick={closeOpenFuncSecond}>Open</a>
            </div>
            <h3 className="mt-5">{randomExtract(occupations_jp)[1]}</h3>
            <div
              className="summary-box second"
            >
              <iframe src="https://tango-gacha.com/#word"
              width="100%" height="500" frameborder="0"
              allowfullscreen sandbox>
              </iframe>
            </div>
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
