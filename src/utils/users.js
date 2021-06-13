const users = []

//addUser, RemoveUser, getUser, getUserInRoom

const addUser = ({id, username, room})=>{
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate the data
    if(!username || !room){
        return{
            error: 'Username and room are required'
        }
    }
    //check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })
    //validate username
    if(existingUser){
        return{
            error:'Username is in use'
        }
    }
    //store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}
const removeUser = (id) =>{
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUsersInRoom = (room) => {
    roo = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

const getUser = (id) => {
    const output = users.find((user) => user.id === id)
    
    if(!output){
        return {
            error: 'Invalid id'
        }
    }
    return output
    
}


module.exports={
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}