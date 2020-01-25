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
<<<<<<< HEAD
      <button onClick={deleteDevs}>Excluir</button>
=======
      <button onClick={deleteDevs}>Excluir perfil</button>
>>>>>>> 5a34948e3c55949f52d05dcdc583c8c903d78d61
    </li>
  );
}