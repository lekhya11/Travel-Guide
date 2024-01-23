import './index.css'

const TravelItem = props => {
  const {guideDetails} = props
  const {name, imageUrl, description} = guideDetails

  return (
    <li className="card-container">
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="heading">{name}</h1>
      <p className="main-para">{description}</p>
    </li>
  )
}

export default TravelItem
