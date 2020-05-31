class user {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends user {
    constructor(){
        super();

        this.admin = true;
    }
}

const user1 = new user('luciosx@hotmaail.como', '1234');
const admin1 = new Admin('admin@teste.com', '12455');

console.log(user1.isAdmin());
console.log(admin1.isAdmin());