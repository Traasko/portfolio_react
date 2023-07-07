import React from 'react';

const Experience = ({metier}) => {
  return (
    <>
    <div>
      <h2>Expérience professionnelle</h2>
      <h3>Aliecom</h3>
      <p>Octobre 2022 - Présent</p>
      <p>{metier} Web</p>
      <h3>RE/MAX MY IMMO</h3>
      <p>Septembre 2022 - Octobre 2022</p>
      <p>{metier} FullStack</p>
    </div>
    </>
  );
};

export default Experience;