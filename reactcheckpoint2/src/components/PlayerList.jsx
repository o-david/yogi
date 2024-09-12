import React from 'react'
import Player from './Player'
import players from '../players'

const PlayerList = () => {
  return (
    <div style={{display:'flex'}}>
        {
            players.map((player, index) =>(
                <Player key={index} {...Player}/>
                // <Player key={index} name={player.name} age={player.age} team={player.team} imageURL={player.imageURL}/>
            )) 
        }
    </div>
  )
}

export default PlayerList