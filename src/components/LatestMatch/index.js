import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  console.log(latestMatchDetails)
  return (
    <div>
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="match-info">
          <div>
            <p className="card-headings">{competingTeam}</p>
            <p className="card-headings">{date}</p>
            <p className="card-para">{venue}</p>
            <p className="card-para">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}{competingTeam}`}
            className="competing-team-logo"
          />
        </div>
        <hr color="#475569" />
        <div className="match-details">
          <h1 className="card-sub-headings">First Innings</h1>
          <p className="card-para">{firstInnings}</p>
          <h1 className="card-sub-headings">Second Innings</h1>
          <p className="card-para">{secondInnings}</p>
          <h1 className="card-sub-headings">Man Of The Match</h1>
          <p className="card-para">{manOfTheMatch}</p>
          <h1 className="card-sub-headings">Umpires</h1>
          <p className="card-para">{umpires}</p>
        </div>
      </div>
      {}
    </div>
  )
}
export default LatestMatch
