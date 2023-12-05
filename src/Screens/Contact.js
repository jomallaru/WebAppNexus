import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div name="Contact" className={styles.contact}>
      <h2>Contacto</h2>
      <form
        className={styles.form}
        method="POST"
        action="https://getform.io/f/a10050cb-ca66-4c4c-af3a-260ef8b17201"
        
      >
        <label for="Name">Nombre</label>
        <input id="Name" name="Nombre" className={styles.input}></input>
        <label for="Email">Correo</label>
        <input
          id="Email"
          name="Email"
          type="Email"
          className={styles.input}
        ></input>
        <label for="Message">Mensaje</label>
        <textarea id="Message" className={styles.textArea}></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;