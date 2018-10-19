

class EApp {
        constructor(){
         this.Users = [];
         this.CanBeSharedWithFirends = [];
        }
    }
class User{
    constructor(name){
        this.name = name;
        this.exersisesList = [];
        this.friends = [];
    }
    
}
//class for the different exersies not completed
class Exersies{
     constructor(exersises){
     this.exersises = exersises;
     //this.exersises = "pushup",
     //this.exersises = "squat"
     }
}
//class for the different friends not completed
class Friends{
    constructor(friend){
    this.friend = [friend];
    }
}

module.exports = {
    User,EApp,Friends,Exersies
}