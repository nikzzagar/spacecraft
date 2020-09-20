import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import constant from '../../constant'

const Launchcard = ({selectYear, selectLaunch, selectLanding}) => {
  const yearButtons = constant.launchYears.map(year => {
    return (
      <div className="launch--button" id={`launchyear-${year}`}
        onClick={(e) => selectYear(e.target.id.split('-')[1])}
        key={`launchyear-${year}`}
      >
        {year}
      </div>
    )
  })
  const launchButtons = Object.keys(constant.launchButtons).map(button => {
    return (
      <div className="launch--button" id={`launchbutton-${constant.launchButtons[button]}`}
        onClick={(e) => selectLaunch(e.target.id.split('-')[1])}
        key={`launchbutton-${constant.launchButtons[button]}`}
      >
        {button.toString()}
      </div>
    )
  })
  const successfulLanding = Object.keys(constant.successfulLanding).map(button => {
    return (
      <div className="launch--button" id={`successfulLanding-${constant.successfulLanding[button]}`}
        onClick={(e) => selectLanding(e.target.id.split('-')[1])} key={`successfulLanding-${constant.successfulLanding[button]}`}
      >
        {button.toString()}
      </div>
    )
  })
  return (
    <>
      <h2 className="launchcard__heading">
        Filters
      </h2>
      <div className="launchcard__heading--secondary">
        Launch Year
      </div>
      <div className="launchyear">
        {yearButtons}
      </div>
      <div className="launchcard__heading--secondary">
        Successful Launch
      </div>
      <div className="launchyear">
        {launchButtons}
      </div>
      <div className="launchcard__heading--secondary">
        Successful Landing
      </div>
      <div className="launchyear">
        {successfulLanding}
      </div>
    </>
  )
}

Launchcard.propTypes = {
  selectYear: PropTypes.func.isRequired,
  selectLaunch: PropTypes.func.isRequired,
  selectLanding: PropTypes.func.isRequired
}
export default Launchcard;  
