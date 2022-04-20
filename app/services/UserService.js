const User = require('./../models/User')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    get getInfo(){
        
        return this.id
    }

}

module.exports = UserService