import React, { Component } from 'react'
import { VERIFY_USER } from '../events';

export default class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nickname: "",
            error: ""
        }
    }
    setUser = ({ user, isUser }) => {
        console.log(this.props)
        if (isUser)
        this.setState({error:"Name is already taken"})
        else
        this.props.setUser(user)

        console.log(user)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { socket } = this.props;
        const { nickname } = this.state;

        socket.emit(VERIFY_USER, nickname, this.setUser)
    }
    handleChange = (e) => {
        this.setState({ nickname: e.target.value })
    }
    render() {
        const { nickname , error } = this.state;

        return (
            <div className="login">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="nickname">
                        <h2>
                            What is your nickname?
                        </h2>
                    </label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={nickname}
                        placeholder="hello user!"
                    />
                    <div className = "error">
                            {error}
                    </div>
                </form>
            </div>
        )
    }
}
