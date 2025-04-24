import React from "react";
import PropTypes from "prop-types";
import '../styles/ProfileButton.css';

const ProfileButton = (props) => {

    return (

        <button className="profile-button" onClick={props.onClick}>
            <span className="profile-button__icon">{props.icon}</span>
            <span className="profile-button__username">{props.username}</span>
        </button>
    );
}

ProfileButton.defaultProps = {
    onClick: () => { console.log("TESTSTSTSTSST")},
}

export default ProfileButton;