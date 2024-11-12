// Write your code here
import './index.css'

const MatchCard = props => {
  const {key, details} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = details

  const classNam = matchStatus === 'Win' ? 'green' : 'red'

  return (
    <li key={key}>
      <div className="card">
        <img
          src={competingTeamLogo}
          className="teamLogo"
          alt={`competing team ${competingTeam}`}
        />
        <p>{competingTeam}</p>
        <p>{result}</p>
        <p className={classNam}>{matchStatus}</p>
      </div>
    </li>
  )
}
export default MatchCard
