import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TravelItem from '../TravelItem'

import './index.css'

class TravelGuide extends Component {
  state = {
    travelGuideList: [],
    isTrue: true,
  }

  componentDidMount() {
    this.getFetchData()
  }

  getFetchData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    const packageData = data.packages
    console.log(data.packages)
    const formatData = packageData.map(each => ({
      id: each.id,
      description: each.description,
      imageUrl: each.image_url,
      name: each.name,
    }))
    console.log(formatData)
    this.setState({travelGuideList: formatData, isTrue: false})
  }

  render() {
    const {travelGuideList, isTrue} = this.state
    return (
      <div className="min-div">
        <h1 className="main-heading">Travel Guide</h1>
        {isTrue ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="list-items">
            {travelGuideList.map(each => (
              <TravelItem key={each.id} guideDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default TravelGuide
