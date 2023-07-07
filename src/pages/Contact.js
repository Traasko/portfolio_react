import React from 'react';

const Contact = ({email, tel}) => {
  return (
    <>
    <div>
      <h2>Contactez-moi</h2>
      <p>N'hésitez pas à me contacter si vous avez des questions ou des opportunités de collaboration.</p>
      <p>Email : {email}</p>
      <p>Téléphone : {tel}</p>
    </div>
    </>
  );
};

export default Contact;