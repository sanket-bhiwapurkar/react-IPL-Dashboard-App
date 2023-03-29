import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = recentMatchDetails
  const matchStatusClassName = matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <li className="recent-match-container">
      <div className="recent-match">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="competing-team-logo"
        />
        <p className="recent-heading">{competingTeam}</p>
        <p className="recent-para">{result}</p>
        <p className={matchStatusClassName}>{matchStatus}</p>
      </div>
    </li>
  )
}
export default MatchCard
