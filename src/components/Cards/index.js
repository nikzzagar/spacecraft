import React, { useState } from 'react';
import './style.css'

const Cards = ({ spaceData }) => {
  return (
    <div className="spacecraft">
      {spaceData.map((cardData) => {
        const missionIds = cardData.mission_id.map((id) => {
          return (
            <li className="flight__values">
              {id}
            </li>
          )
        })
        return (
          <div className="spacecraft__cards">
            <img src={cardData.links.mission_patch} alt={cardData.mission_name}
              style={{width: '100%', height: '62%', backgroundColor: '#17151536'}}
            />
            <h4 class="flight__header">{`${cardData.mission_name} #${cardData.flight_number}`}</h4>
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
                {cardData.launch_year}
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
                {cardData.launch_landing ? 'True': 'False'}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Cards;  
