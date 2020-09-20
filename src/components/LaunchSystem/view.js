import React from 'react';
import Loader from 'react-loader-spinner'
import Launchcard from '../Launchcard'
import Cards from '../Cards'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types';
import './style.css'

class LaunchSystem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      launchYear: '',
      isSuccessfulLaunch: '',
      isSuccessfulLanding: '',
      loadingCards: false
    }
    this.selectYear = this.selectYear.bind(this)
    this.selectLanding = this.selectLanding.bind(this)
    this.selectLaunch = this.selectLaunch.bind(this)
    this.fetchCards = this.fetchCards.bind(this)
    this.renderHeadTags = this.renderHeadTags.bind(this)
  }

  fetchCards() {
    const { launchYear, isSuccessfulLaunch, isSuccessfulLanding } = this.state
    this.props.fetchSpacecards(launchYear, isSuccessfulLaunch, isSuccessfulLanding)
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

  renderHeadTags () {
    return (
      <Helmet>
        <title> Home page of the planets most amazing concerts </title>
        <meta property="og:title" content="Concerts near you" />
        <meta property="og:image" content="public/cover-poster.png" />
      </Helmet>
    )
  }

  render() {
    const { spaceData, fetchingData } = this.props
    return(
      <>
        {this.renderHeadTags}
        <div className="row" key="launchpad">
          <h1 className="header" key="main-header">
            SpaceX Launch Programs
          </h1>
          <div className ="col-1 launch-card column" key="launch-card">
            <Launchcard
              selectYear={this.selectYear}
              selectLaunch={this.selectLaunch}
              selectLanding={this.selectLanding}
            />
          </div>
          <div className ="col-2 column">
            {
              fetchingData? (
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
        {!fetchingData && (
        <footer className="footer">
          Developed By: Nitin Agrawal
        </footer>
        )}
      </>
    )
  }
}
LaunchSystem.propTypes = {
  fetchSpacecards: PropTypes.func.isRequired,
  fetchingData: PropTypes.bool.isRequired
}

export default LaunchSystem