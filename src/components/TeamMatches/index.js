// Write your code here

import './index.css'
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  constructor(props) {
    super(props)
    this.state = {teamDetails: {}, isLoading: true}
  }

  componentDidMount() {
    this.getTeamDetail()
  }

  getTeamDetail = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(match, params, id)

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data.latest_match_details)

    const latestMatchDetails = {
      umpires: data.latest_match_details.umpires,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }

    const recentMatches = data.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails,
      recentMatches,
    }

    this.setState({teamDetails: formattedData, isLoading: false})
  }

  render() {
    const {teamDetails, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetails
    return (
      <div className="main">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div className="container">
              <div>
                <img
                  className="teamBanner"
                  src={teamBannerUrl}
                  alt="team banner"
                />
              </div>

              <div>
                <LatestMatch details={latestMatchDetails} />
              </div>
              <div>
                <ul>
                  {recentMatches.map(each => (
                    <MatchCard key={each.id} details={each} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
