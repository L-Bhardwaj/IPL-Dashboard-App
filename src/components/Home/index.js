// Write your code here
import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {teams: [], isLoading: true}
  }

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const {teams} = data

    const formattedTeams = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teams: formattedTeams, isLoading: false})
  }

  render() {
    const {teams, isLoading} = this.state

    return (
      <div className="main">
        <div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <div className="container">
              <div className="heading">
                <img
                  className="ipl"
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
                  alt="ipl logo"
                />
                <h1>IPL Dashboard</h1>
              </div>
              <div>
                <ul>
                  {teams.map(each => (
                    <TeamCard key={each.id} details={each} />
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Home
