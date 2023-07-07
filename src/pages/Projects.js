import React from 'react';

const Projects = ({projet, type, techno1, techno2}) => {
  return (
    <>
    <div>
      <h2>Mes projets</h2>
      <ul>
        <li>
          <h3>{projet}</h3>
          <p>{type} en ligne réalisé avec {techno1}</p>
        </li>
        <li>
          <h3>{projet}</h3>
          <p>{type} réalisé avec la {techno2}</p>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Projects;