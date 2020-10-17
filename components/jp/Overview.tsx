import data from '../data/overview/jp.json'

const newdata = data.map((data) => { 
  return(
    <li className="mt-3" key={data.id} >
      <h5> {data.desc}</h5>  
    </li>
  )
})

const OverviewJP: React.FunctionComponent = () => {
  return (
    <ul className="owncard">{newdata}</ul>
  )
}

export default OverviewJP