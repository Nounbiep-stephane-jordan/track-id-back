class User {
     constructor({name,password}){
          this.name = name;
          this.password = password;
     }
}

class EntryInfo {
     constructor({name,age,sex,arrivalTime,exitTime}){
          this.name = name;
          this.age = age;
          this.sex = sex;
          this.arrivalTime = arrivalTime;
          this.exitTime = exitTime;
     }
}

module.exports = {
     User,EntryInfo
}