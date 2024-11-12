// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = details

  return (
    <div className="mainContent">
      <div className="container">
        <div>
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            className="teamLogo"
            alt={`latest match ${competingTeam}`}
          />
        </div>
      </div>
      <div>
        <h3>First Innings</h3>
        <p>{firstInnings}</p>
        <h3>Second Innings</h3>
        <p>{secondInnings}</p>
        <h3>Man Of The Match</h3>
        <p>{manOfTheMatch}</p>
        <h3>Umpires</h3>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
