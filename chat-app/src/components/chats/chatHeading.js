import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faEllipsisV, faVideo } from '@fortawesome/free-solid-svg-icons';

export default function ({ name, numberOfUsers }) {

    return (
        <div className="chat-header">
            <div className="user-info">
                <div className="user-name">{name}</div>
                <div className="status">
                    <div className="indicator"></div>
                    <span>{numberOfUsers ? numberOfUsers : null}</span>
                </div>
            </div>
            <div className="options">
                <FontAwesomeIcon icon={faVideo} />
                <FontAwesomeIcon icon={faUserPlus} />
                <FontAwesomeIcon icon={faEllipsisV} />
            </div>
        </div>
    );

}


