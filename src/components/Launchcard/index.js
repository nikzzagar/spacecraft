import React, { useState } from 'react';
import constant from '../../constant'
import './style.css'

const Launchcard = ({selectYear, selectLaunch, selectLanding}) => {
  const yearButtons = constant.launchYears.map(year => {
    return (
      <div className="launch--button" id={`launchyear-${year}`}
        onClick={(e) => selectYear(e.target.id.split('-')[1])}
      >
        {year}
      </div>
    )
  })
  const launchButtons = Object.keys(constant.launchButtons).map(button => {
    return (
      <div className="launch--button" id={`launchbutton-${constant.launchButtons[button]}`}
        onClick={(e) => selectLaunch(e.target.id.split('-')[1])}
      >
        {button.toString()}
      </div>
    )
  })
  const successfulLanding = Object.keys(constant.successfulLanding).map(button => {
    return (
      <div className="launch--button" id={`successfulLanding-${constant.successfulLanding[button]}`}
        onClick={(e) => selectLanding(e.target.id.split('-')[1])}
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
export default Launchcard;  
