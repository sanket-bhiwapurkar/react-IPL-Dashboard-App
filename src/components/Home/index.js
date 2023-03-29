import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsList: formattedData, isLoading: false})
  }

  RenderTeamCards = () => {
    const {teamsList} = this.state
    return (
      <>
        <div className="logo-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="logo-heading">IPL Dashboard</h1>
        </div>
        <ul className="teams-list">
          {teamsList.map(eachTeam => (
            <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        {isLoading ? (
          <div className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <this.RenderTeamCards />
        )}
      </div>
    )
  }
}
export default Home
