import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

const Cards = ({ spaceData }) => {
  return (
    <div className="spacecraft">
      {spaceData && spaceData.length && spaceData.map((cardData) => {
        const landingSuccess = (cardData.rocket
          && cardData.rocket.first_stage
          && cardData.rocket.first_stage.cores[0]
          && cardData.rocket.first_stage.cores[0].land_success) || false
        const missionIds = cardData.mission_id.map((id) => {
          return (
            <li className="flight__values" key={`flightid-${id}`} id={`flightid-${id}`}>
              {id}
            </li>
          )
        })
        return (
          <div className="spacecraft__cards" id="spacecraft__cards">
            <img src={cardData.links.mission_patch || ''} alt={cardData.mission_name || 'no image'}
              style={{width: '100%', height: '62%', backgroundColor: '#17151536'}}
            />
            <h4 className="flight__header">{`${cardData.mission_name || ''} #${cardData.flight_number || ''}`}</h4>
            <div className="flight__labels">
              Mission Ids:
            </div>
            <ul style={{margin: '0px'}}>
              {missionIds}
            </ul>
            <div>
              <span className="flight__labels">
                Launch Year:
              </span>
              <span className="flight__values">
                {cardData.launch_year || ''}
              </span>
            </div>
            <div>
              <span className="flight__labels">
                Successful Launch:
              </span>
              <span className="flight__values">
                {cardData.launch_success ? 'True': 'False'}
              </span>
            </div>
            <div>
              <span className="flight__labels">
                Successful Landing:
              </span>
              <span className="flight__values">
                {landingSuccess ? 'True': 'False'}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

Cards.propTypes = {
  spaceData: PropTypes.array.isRequired
}
export default Cards;  
