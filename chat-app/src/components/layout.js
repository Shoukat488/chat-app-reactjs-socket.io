import React, { Component } from 'react'
import io from 'socket.io-client';

import { USER_CONNECTED ,LOGOUT } from '../events';
import LoginForm from './loginForm';
const socketUrl = process.env.SOCKET_URL || 'http://192.168.0.105:3232'

export default class Layout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            socket:null,
            user:null
        }
    }
    initSocket = () => {
        const socket = io(socketUrl);
        socket.on('connection',()=>{
            console.log("connected from client side")
        })
        this.setState({socket})
    }
    setUser=(user)=>{
        const {socket} = this.state;
        socket.emit(USER_CONNECTED,user)
        this.setState({user})
    }
    logout=()=>{
        const {socket} = this.state;
        socket.emit(LOGOUT);
        this.setState({user:null})
    }
    render() {
        const { socket } = this.state;

        return (
            <div className="container">
                <LoginForm socket={socket} serUser={this.setUser}/>
            </div>
        )
    }
}
