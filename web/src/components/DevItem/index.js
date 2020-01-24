import React from 'react';

import './styles.css';

export default function DevItem({ dev, toDelete }){
  
  async function deleteDevs(){
    toDelete(dev._id);
  }

  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name}></img>
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no GitHub</a>
      <button onClick={deleteDevs}>Excluir perfil</button>
    </li>
  );
}