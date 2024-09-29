import React, { useReducer } from 'react';
import { createPortal } from 'react-dom';
import ProfileCard from '../components/profile-card/ProfileCard.jsx';
import ModalContent from '../components/modal/Modal.jsx';
import './Browser.scss';

const plusIconPath =
  'data:image/png;base64,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';

// {srcUrl: '', name: ''}
const initialState = {
  profiles: [],
  isEdit: false,
  showModal: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_IS_EDIT':
      return { ...state, isEdit: action.data.isEdit };
    case 'SET_ADD_PROFILE':
      return { ...state, profiles: state.profiles.push(action.data.profile) };
    case 'SET_ADD_MODAL':
      return { ...state, showModal: action.data.showModal };
    default:
      return state;
  }
};

const Browse = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    let isEdit = true;
    if (state.isEdit) isEdit = false;
    dispatch({ type: 'SET_IS_EDIT', data: { isEdit } });
  };
  const handleClose = () => {
    // let showModal = true;
    // if (state.showModal) isEdit = false;
    dispatch({ type: 'SET_ADD_MODAL', data: { showModal: false } });
  };
  const handleOpen = () => {
    dispatch({ type: 'SET_ADD_MODAL', data: { showModal: true } });
  };

  return (
    <>
      <div className="profiles-wrapper">
        {state.isEdit ? 'Manage Profiles' : "Who's Watching?"}
        <div className="profiles-card-wrapper">
          <ProfileCard
            srcUrl={
              'https://occ-0-5277-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229'
            }
            name={'Basic'}
            isEdit={state.isEdit}
          />

          <ProfileCard
            srcUrl={plusIconPath}
            name={'Add Profile'}
            onClick={handleOpen}
          />
        </div>
        <button onClick={handleClick}>
          {state.isEdit ? 'Done' : 'Manage Profiles'}
        </button>
      </div>
      {state.showModal &&
        createPortal(
          <ModalContent onClose={handleClose} />,
          document.getElementById('modal-root')
        )}
    </>
  );
};

export default Browse;
