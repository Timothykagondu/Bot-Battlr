import React from "react"

const botTypeClasses = {
    Assault: "icon military",
    Defender: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star"
  }
  
  const BotCard = props => {
    const { bot, action, removeCard } = props
  
    function handleClick(e) {
      console.log("handleClick fired!")
      action(bot)
    }
  
    function handleDischarge(e) {
      console.log("Red X Clicked!")
      e.stopPropagation()
      removeCard(bot)
    }
  
  
    return (
      <div>
        <div className="card1" key={props.bot.id} onClick={handleClick}>

          <div className="img2">

            <img alt="oh no!" src={props.bot.avatar_url} />
            
          </div>
          <div>
            <div className="header1">
              {props.bot.name}
              <i className={botTypeClasses[props.bot.bot_class]} />
            </div>
            <div>
              <small>{props.bot.catchphrase}</small>
            </div>
          </div>
          <div>
            <span>

              <i/> {props.bot.health}
            </span>
  
            <span>
              <i/>
              {props.bot.damage}
            </span>
            <span>
              <i/>
              {props.bot.armor}
            </span>
            <span>
              <div>
                <button onClick={handleDischarge}> x </button>
              </div>
            </span>
          </div>
        </div>
      </div >
    )
  }
  
  export default BotCard