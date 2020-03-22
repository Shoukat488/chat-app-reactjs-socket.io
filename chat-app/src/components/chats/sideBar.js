import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEject } from '@fortawesome/free-solid-svg-icons';

export default class SideBar extends Component {
    constructor(props){
        super(props)
        this.usersRef = React.createRef();
    }
    render() {
        let { chats, activeChat, user, setActiveChat, logout } = this.props
        console.log(user)
        return (
            <div id="side-bar">
                <div className="heading">
                    <div className="app-name">Our Cool Chat <FontAwesomeIcon icon={faChevronDown} /></div>
                    <div className="menu">
                        <FontAwesomeIcon icon={faListUl} />
                    </div>
                </div>
                <div className="search">
                    <i className="search-icon"><FontAwesomeIcon icon={faSearch} /></i>
                    <input placeholder="Search" type="text" />
                    <div className="plus"></div>
                </div>
                <div
                    className="users"
                    ref={this.usersRef}
                    onClick={(e) => { (e.target === this.usersRef.current) && setActiveChat(null) }}>

                    {
                        chats.map((chat) => {
                            if (chat.name) {
                                const lastMessage = chat.messages[chat.messages.length - 1];
                                const user = chat.users.find(({ name }) => {
                                    return name !== this.props.name
                                }) || { name: "Community" }
                                const classNames = (activeChat && activeChat.id === chat.id) ? 'active' : ''

                                return (
                                    <div
                                        key={chat.id}
                                        className={`user ${classNames}`}
                                        onClick={() => { setActiveChat(chat) }}
                                    >
                                        <div className="user-photo">{user.name[0].toUpperCase()}</div>
                                        <div className="user-info">
                                            <div className="name">{user.name}</div>
                                            {lastMessage && <div className="last-message">{lastMessage.message}</div>}
                                        </div>

                                    </div>
                                )
                            }

                            return null
                        })
                    }

                </div>
                <div className="current-user">
                    <span>{user.name}</span>
                    <div onClick={() => { logout() }} title="Logout" className="logout">
                    <FontAwesomeIcon icon={faEject} />
                    </div>
                </div>
            </div>
        );

    }
}