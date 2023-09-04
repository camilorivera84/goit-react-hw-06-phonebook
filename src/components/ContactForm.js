import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from './contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Validar y agregar el nuevo contacto
    if (name.trim() === '' || number.trim() === '') {
      // Manejar el caso de campos vacíos si lo deseas
      return;
    }

    dispatch(addContact({ name, number }));

    // Limpiar los campos del formulario
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="number">Phone Number:</label>
        <input
          type="text"
          id="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Add Contact</button>
      </div>
    </form>
  );
};

export default ContactForm;
