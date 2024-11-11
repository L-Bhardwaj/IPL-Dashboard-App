// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details

  return (
    <li>
      <Link to={`/team-matches/${id}`}>
        <div className="card">
          <div>
            <img className="teamLogo" src={teamImageUrl} alt={name} />
          </div>
          <div>
            <p>{name}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
