

class EApp {
        constructor(){
         this.Users = [];
        }
    }
class User{
    constructor(name){
        this.name = name;
        this.exersises = [];
        this.friends = [];
    }
    
}
//class for the different exersies not completed
class Exersies{
     constructor(exersises){
      this.exersises = ["pushup","squat"];
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