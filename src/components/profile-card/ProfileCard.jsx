import React from 'react';
import './ProfileCard.scss';
import Edit from '../../../public/edit.svg';

const ProfileCard = (props) => {
  const { name, srcUrl, isEdit, ...restProps } = props;
  return (
    <div className="profile-card" {...restProps}>
      <div className="profile-card-image-container">
        <img src={srcUrl} alt={'profeil-card'} className="profile-card-image" />
        {isEdit && (
          <img src={Edit} alt="edit icon" className="profile-card-edit" />
        )}
      </div>
      <p className="profile-card-name">{name}</p>
    </div>
  );
};

export default ProfileCard;
