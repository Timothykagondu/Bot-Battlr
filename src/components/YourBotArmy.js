import React from 'react'
import BotCard from "./BotCard"

function YourBotArmy(props) {

    const displayBots = props.bots.map(bot => {

      return <BotCard bot={bot} action={props.action} removeCard={props.removeCard} />
    })
  
  return (
    <div className="bot-army">
      <div className="grid">
        <div className="bot-army-row">
          {displayBots}
        </div>
      </div>
    </div>
  )

}
export default YourBotArmy;