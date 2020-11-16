import React, { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket'
import { Link } from 'react-router-dom'
import './Game.css'

const socket = new W3CWebSocket('ws://localhost:8000')


const Game = (props) => {
  const [clientId, setClientId] = useState('')
  const [counter, setCounter] = useState(0)
  const [clicksToReward, setClicksToReward] = useState(10)
  const [clicks, setClicks] = useState(0)
  const [points, setPoints] = useState(0)

  const clientName = props.match.params.client

  /** CLIENT-BACKEND HANDLER ON COMPONENT DID MOUNT*/
  useEffect(() => {
    socket.onmessage = message => {
      const response = JSON.parse(message.data)
      // handle connect
      if (response.method === "client-connect") {
        if (localStorage.getItem(`${clientName}`)) {
          const clientData = localStorage.getItem(`${clientName}`)
          const client = JSON.parse(clientData)
          setClientId(client.clientId)
          setClicks(client.clicks)
          setPoints(client.points)
        } else {
          const client = {
            clientId: response.clientId,
            clicks: response.clicks,
            points: response.points,
          }
          localStorage.setItem(`${clientName}`, JSON.stringify(client))
          setClientId(response.clientId)
          setClicks(response.clicks)
          setPoints(response.points)
        }
        setCounter(response.counter)
        setClicksToReward(response.clicksToReward)
      }

      // handle button click
      if (response.method === "client-buttonClick") {
        const clientData = localStorage.getItem(`${clientName}`)
        const client = JSON.parse(clientData)
        client.clicks = response.clicks
        client.points = response.points
        localStorage.setItem(`${clientName}`, JSON.stringify(client))
        setClicks(response.clicks)
        setPoints(response.points)
      }

      // handle updating every clients counter
      if (response.method === "client-all-updateCounter") {
        setCounter(response.counter)
        setClicksToReward(response.clicksToReward)
      }
    }

    const payLoad = {
      "method": "client-connect"
    }

    socket.onopen = () => socket.send(JSON.stringify(payLoad))
  }, [])

  /** CLIENT-BACKEND HANDLERS TO UI ELEMENTS */

  const buttonClick = () => {
    const payLoad = {
      "method": "client-buttonClick",
      "clientId": clientId,
      "clicks": clicks,
      "points": points,
      "counter": counter
    }

    socket.send(JSON.stringify(payLoad))
  }

  const updateCounter = () => {
    const payLoad = {
      "method": "client-all-updateCounter",
    }
    socket.send(JSON.stringify(payLoad))
  }
  useEffect(() => updateCounter, [clicks])



  /** ------------------------------------------ */

  return (
    <div className="ButtonSection">
      <div className="player">
        <p>player: {clientName}</p>
      </div>
      <div className="info">
        <p>clicks to reward: {clicksToReward}</p>
      </div>
      <p>points: {points}</p>
      <div className="buttons">
        <button className="PlayButton" onClick={clicks > 0 ? buttonClick : null}>{clicks}</button>
      </div>

      <Link to="/">
        <button className="ContinueButton">Back to lobby</button>
      </Link>
      {clicks <= 0 ? <button className="ContinueButton" onClick={() => setClicks(20)}>continue?</button> : null}
    </div>
  )
}

export default Game;