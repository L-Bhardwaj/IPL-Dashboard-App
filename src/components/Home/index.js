// Write your code here
import './index.css'

import {Component} from 'react'

import TeamCard from '../TeamCard'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {teams: []}
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

    this.setState({teams: formattedTeams})
  }

  render() {
    const {teams} = this.state

    return (
      <div className="main">
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
      </div>
    )
  }
}
export default Home
