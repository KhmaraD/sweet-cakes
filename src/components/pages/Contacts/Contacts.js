import React from 'react';
import style from './Contacts.module.scss';
import '../../../App.css';

const Contacts = () => {
  return (
    <>
      <div className={style.contactsWrapper}>
        <h1>Contacts</h1>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938.5025120689095!2d30.36918045947043!3d50.4235043598847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb974b5c1403%3A0x89b803c1b6e354ba!2z0YPQuy4g0JfQvtC00YfQuNGFLCAzOCwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1633353859736!5m2!1sru!2sua"
        allowFullScreen=""
        loading="lazy"
        className={style.map}
        id="map"
      >
      </iframe>
    </>
  );
};

export default Contacts;