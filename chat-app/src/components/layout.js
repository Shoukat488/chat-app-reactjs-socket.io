import React, { Component } from 'react'
import openSocket from 'socket.io-client';

import { USER_CONNECTED ,LOGOUT } from '../events';
import LoginForm from './loginForm';
const socketUrl = 'http://localhost:3231/'

export default class Layout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            socket:null,
            user:null
        }
    }
    componentDidMount(){
        this.initSocket();
    }
    initSocket = () => {
        console.log("Hello")
        const socket = openSocket(socketUrl)
        socket.on('connect',(error)=>{
            if(error)
            console.log(error)
            else
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
                <LoginForm socket={socket} setUser={this.setUser}/>
            </div>
        )
    }
}
