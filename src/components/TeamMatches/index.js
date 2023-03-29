import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchesDetails: {}}

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(eachMatch => ({
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        date: eachMatch.date,
        firstInnings: eachMatch.first_innings,
        id: eachMatch.id,
        manOfTheMatch: eachMatch.man_of_the_match,
        matchStatus: eachMatch.match_status,
        result: eachMatch.result,
        secondInnings: eachMatch.second_innings,
        umpires: eachMatch.umpires,
        venue: eachMatch.venue,
      })),
    }
    this.setState({isLoading: false, teamMatchesDetails: formattedData})
    switch (id) {
      case 'RCB':
        break

      default:
        break
    }
  }

  RenderTeamMatches = () => {
    const {teamMatchesDetails} = this.state
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
    } = teamMatchesDetails
    return (
      <div>
        <img src={teamBannerUrl} alt="team banner" className="banner" />
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="recent-matches-lists">
          {recentMatches.map(eachMatch => (
            <MatchCard recentMatchDetails={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  BGClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'sh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className={`team-matches-container ${this.BGClassName()}`}>
        {isLoading ? (
          <div className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <this.RenderTeamMatches />
        )}
      </div>
    )
  }
}

export default TeamMatches
