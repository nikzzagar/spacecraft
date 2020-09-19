import React from 'react';
import axios from 'axios'
import Loader from 'react-loader-spinner'
import config from '../../config'
import Launchcard from '../Launchcard'
import Cards from '../Cards'
import './style.css'

class LaunchSystem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      launchYear: '',
      isSuccessfulLaunch: '',
      isSuccessfulLanding: '',
      spaceData: [],
      loadingCards: true
    }
    this.selectYear = this.selectYear.bind(this)
    this.selectLanding = this.selectLanding.bind(this)
    this.selectLaunch = this.selectLaunch.bind(this)
    this.fetchCards = this.fetchCards.bind(this)
  }

  componentDidMount() {
    this.fetchCards()
  }

  fetchCards() {
    const launchParam = {
      launchYear: 'launch_year',
      isSuccessfulLaunch: 'launch_success',
      isSuccessfulLanding: 'land_success'
    }
    let spaceUrl = `${config.launchURL}`
    let modifiedUrl = spaceUrl
    Object.keys(launchParam).forEach((param => {
      if (this.state[param]) {
        modifiedUrl = modifiedUrl.concat(`&${launchParam[param]}=${this.state[param].toString()}`)
      }
    }))
    console.log('URL: ', modifiedUrl)
    axios.get(modifiedUrl).then(spaceData => {
      if (spaceData && spaceData.data && spaceData.data.length) {
        this.setState({
          spaceData: spaceData.data,
          loadingCards: false
        })
      } else {
        this.setState({
          spaceData: [],
          loadingCards: false
        })
      }
    }).catch(() => {
      this.setState({
        spaceData: [],
        loadingCards: false
      })
    })
  }

  selectYear(year) {
    const { launchYear } = this.state
    if (launchYear === year) {
      document.getElementById(`launchyear-${launchYear}`).style.backgroundColor = '#c2f9bf'
      this.setState({launchYear: '', loadingCards: true}, () =>  this.fetchCards())
    } else {
      if (document.getElementById(`launchyear-${launchYear}`)) {
        document.getElementById(`launchyear-${launchYear}`).style.backgroundColor = '#c2f9bf'
      }
      document.getElementById(`launchyear-${year}`).style.backgroundColor = '#4CAF50'
      this.setState({launchYear: year, loadingCards: true}, () =>  this.fetchCards())
    }
  }
  selectLaunch(launch) {
    const { isSuccessfulLaunch } = this.state
    if (launch === isSuccessfulLaunch) { // toggle
      document.getElementById(`launchbutton-${isSuccessfulLaunch}`).style.backgroundColor = '#c2f9bf'
      this.setState({isSuccessfulLaunch: '', loadingCards: true}, () =>  this.fetchCards())
    } else {
      if (document.getElementById(`launchbutton-${isSuccessfulLaunch}`)) {
        document.getElementById(`launchbutton-${isSuccessfulLaunch}`).style.backgroundColor = '#c2f9bf'
      }
      document.getElementById(`launchbutton-${launch}`).style.backgroundColor = '#4CAF50'
      if (launch === 'false') {
        document.getElementById('successfulLanding-true').style.backgroundColor = '#c2f9bf'
        document.getElementById('successfulLanding-false').style.backgroundColor = '#c2f9bf'
        this.setState({
          isSuccessfulLaunch: launch, 
          isSuccessfulLanding: '',
          loadingCards: true
        }, () =>  this.fetchCards())
      }
      this.setState({isSuccessfulLaunch: launch, loadingCards: true}, () =>  this.fetchCards())
    }
  }
  selectLanding(landing) {
    const { isSuccessfulLanding, isSuccessfulLaunch } = this.state
    if (isSuccessfulLaunch === 'false' && landing === 'true') {
      return
    }
    if (landing === isSuccessfulLanding) { // toggle
      document.getElementById(`successfulLanding-${isSuccessfulLanding}`).style.backgroundColor = '#c2f9bf'
      this.setState({isSuccessfulLanding: '', loadingCards: true}, () =>  this.fetchCards())
    } else {
      if (document.getElementById(`successfulLanding-${isSuccessfulLanding}`)) {
        document.getElementById(`successfulLanding-${isSuccessfulLanding}`).style.backgroundColor = '#c2f9bf'
      }
      document.getElementById(`successfulLanding-${landing}`).style.backgroundColor = '#4CAF50'
      this.setState({isSuccessfulLanding: landing, loadingCards: true}, () =>  this.fetchCards())
    }
  }

  render() {
    const { spaceData, loadingCards } = this.state
    return(
      <>
        <div className="row">
          <h1 className="header">
            SpaceX Launch Programs
          </h1>
          <div className ="col-1 launch-card column">
            <Launchcard
              selectYear={this.selectYear}
              selectLaunch={this.selectLaunch}
              selectLanding={this.selectLanding}
            />
          </div>
          <div className ="col-2 column">
            {
              loadingCards? (
                <div className ="loader">
                  <Loader
                    type="Grid"
                    color="#00BFFF"
                    height={100}
                    width={100}
                  />
                </div>
              ): (
                <Cards spaceData={spaceData} />
              )
            }
          </div>
        </div>
        {!loadingCards && (
        <footer className="footer">
          Developed By: Nitin Agrawal
        </footer>
        )}
      </>
    )
  }
}

export default LaunchSystem;