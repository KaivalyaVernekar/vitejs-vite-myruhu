import React, { useState } from 'react';
import Close from '../../../public/close.svg';
import './Modal.scss';

const Modal = (props) => {
  const [value, setValue] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="modal-wrapper">
      <button className="close-btn" onClick={props.onClose}>
        <img src={Close} alt={'close-icon'} width={24} height={24} />
      </button>
      <h2>Add a Profile</h2>
      <p>Add a profile for another person watching Netflix.</p>
      <div className="input-wrapper">
        <img
          src={
            'https://occ-0-5277-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229'
          }
          alt={'close-icon'}
          width={80}
          height={80}
        />
        <input value={value} onChange={handleChange} placeholder="Name" />
      </div>

      <hr />

      <div>
        <div>
          <p>Children's Profile</p>
          <p>Only see kid-friendly TV shows and movies</p>
        </div>
        <input type="checkbox" id="switch" class="checkbox" />
      </div>
    </div>
  );
};

export default Modal;
