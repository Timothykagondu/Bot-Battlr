import React from 'react'
import BotCard from "./BotCard"

function BotCollection({ botCollection, action, removeCard }) {

    const displayBotCards = botCollection.map(bot => {

      return <BotCard bot={bot} action={action} removeCard={removeCard} />
    })

    return (

        <div className="column">
          <div className="row">
            You have completed your Bot Army. There are no more bots to collect.
            {displayBotCards}
          </div>
        </div>
      )
    }

    export default BotCollection;