import React, { useState, useRef } from 'react';
import './Lobby.css';


const Lobby = () => {
  const [link, setLink] = useState('')
  const input = useRef(null)

  return (
    <div className="Lobby">
      <h1 className="buttongame">Button Game</h1>
      <p className="header">2020 - Koodarijahti</p>
      <input
        ref={input}
        className="formstyle inputStyle"
        type="text"
        placeholder="type your gamer name"
        value={link}
        onChange={e => setLink(e.target.value)}
      />
      <br />
      <a href={`/${link}`}>
        <button value="PLAY" type="submit" className="LobbyButton">PLAY</button>
      </a>
      <div className="link">
        <p>by Samuel Koskelainen</p>
        <p><a className="link" href="https://github.com/samuelkoskelainen/koodarijahti">github</a></p>
      </div>
    </div >
  );
};

export default Lobby;