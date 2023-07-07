import React from 'react';

const Home = ({nom, prenom}) => {
  return (
    <>
    <div>
      <h1>Bienvenue sur mon portfolio</h1>
      <p>Bonjour je suis {prenom} {nom} , je partage mes réalisations et compétences en développement.</p>
    </div>
    </>
  );
};

export default Home;