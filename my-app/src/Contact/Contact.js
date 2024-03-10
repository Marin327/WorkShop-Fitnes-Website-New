import React from 'react';
import '../App.css'; // Добави стиловете на Contact

const Contact = () => {
  return ( 
    <div className = "contact-container" >
    <h2> Свържете се с нас: </h2> 
    <h3> За всички запитвания, предложения или нужда от помощ. </h3> 
    <p>Имейл:<a href = "mailto:info@hotelparadise.com"> info @fitnesdeluxe&spa.com </a><br />
    Телефон: +359 89 708 2919<br />
    Адрес: ул.Главна 123, град София
    </p> 
    <div className = "social-links">
    <a href = "https://www.facebook.com/fitnesdeluxe&spa"
    target = "_blank"
    rel = "noopener noreferrer">Facebook</a> 
    <a href = "https://www.instagram.com/fitnedeluxe&spa"
    target = "_blank"
    rel = "noopener noreferrer">Instagram</a> 
    <a href = "https://twitter.com/fitnesdeluxe&spa"
    target = "_blank"
    rel = "noopener noreferrer">Twitter</a>
    </div> 
   </div>
  );
}

export default Contact;