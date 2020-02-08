export class UserModel {

    constructor(name = "", lastName = "", email = "", password = ""){

        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    } 

    name : String;
    lastName : String;
    email : String;
    password : String;
}
