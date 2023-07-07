import React from 'react';

const About = ( {prenom, nom, age, ville} ) => {
  return (
    <>
    <div>
      <h2>À propos de moi</h2>
      <p>Je suis {prenom} {nom},j'ai {age}, j'habite à {ville} un développeur passionné par la création de solutions innovantes.</p>
      <p>J'ai une solide expérience dans les technologies web, notamment Symfony, React, JavaScript et HTML/CSS.</p>
    </div>
    </>
  );
};

export default About;