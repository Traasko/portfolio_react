import React from 'react';

const Skills = ({techno1, techno2, techno3}) => {
  return (
    <>
    <div>
      <h2>Mes compétences</h2>
      <ul>
        <li>{techno1}</li>
        <li>{techno2}</li>
        <li>{techno3}</li>
      </ul>
    </div>
    </>
  );
};

export default Skills;