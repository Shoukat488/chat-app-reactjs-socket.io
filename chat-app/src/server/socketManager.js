const { VERIFY_USER, USER_CONNECTED, LOGOUT } = require('../events');
const {createUser, createChat, createMessage} = require('../components/factories');

const connectedUsers = {}

const isUser=(user, userList)=> user in userList;

const addUser=(userList,user)=> {
    const newList = new Object.assign({},userList)
    newList[user.name] = user
    return newList;
}

const removeUser=(userList,user)=> {
    const newList = new Object.assign({},userList)
    delete newList[user]
    return newList;
}

module.exports = (socket) => {
    console.log("We are connected")
    console.log("socket id : ", socket.id)
    socket.emit(USER_CONNECTED, "Hello, everyone")


    socket.on(VERIFY_USER, (nickname, callback) => {
        if (isUser(connectedUsers,nickname))
            callback({ isUser: true, user: null })
        else
            callback({isUser:false , user:createUser({name:nickname})})
    })

    socket.on(LOGOUT, () => {

    })
}