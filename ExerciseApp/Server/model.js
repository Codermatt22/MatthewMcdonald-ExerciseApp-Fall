


class EApp {
        constructor(){
         this.Users = [];
         this.CanBeSharedWithFirends = [];
        }
    }
class User{
    constructor(name){
        this.name = name;
        this.exersises = ["situp"];
        this.friends = [];
    }
}

class Friends{
    constructor(friend){
    this.friend = [friend];
    }
}

module.exports = {
    User,EApp,Friends
}