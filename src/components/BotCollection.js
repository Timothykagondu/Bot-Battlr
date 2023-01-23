import React from 'react'
import BotCard from "./BotCard"

function BotCollection({ botCollection, action, removeCard }) {

    const displayBotCards = botCollection.map(bot => {

      return <BotCard bot={bot} action={action} removeCard={removeCard} />
    })

    return (

        <div className="ui four column grid">
          <div className="row">
            {displayBotCards}
          </div>
        </div>
      )
    }

    export default BotCollection;