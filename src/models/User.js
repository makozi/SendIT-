import moment from 'moment';
import uuid from 'uuid';

class User {
/**
   * class constructor
   * @param {object} data
   */
    constructor() {
        this.users = [];
    }
    /**
   * 
   * @returns {object} user object
   */
    create(data) {
        const newUser = {
            id: uuid.v4(),
            firstname: data.firstname || '',
            lastname: data.lastname || '',
            othernames: data.othernames || '',
            email: data.email || '',
            username: data.username || '',
            registered: moment.now(),
            isAdmin: data.isAdmin || '',
            takeAway: data.takeAway || '',
            modifiedDate: moment.now()
        };
        this.users.push(newUser);
        return newUser;
    }
    /**
   * 
   * @param {uuid} id
   * @returns {object} user object
   */
    findOne(id) {
        return this.users.find(use => use.id === id);
    }
    /**
   * @returns {object} returns all user
   */
    findAll() {
        return this.users;
    }
    /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
    update(id, data) {
        const user = this.findOne(id);
        const index = this.users.indexOf(user);
        this.users[index].firstname = data['firstname'] || user.firstname;
        this.users[index].lastname = data['lastname'] || user.lastname;
        this.users[index].othernames = data['othernames'] || user.othernames;
        this.users[index].email = data['email'] || user.email;
        this.users[index].username = data['username'] || user.username;
        this.users[index].registered = moment.now();
        this.users[index].isAdmin = data['isAdmin'] || user.isAdmin;
        this.users[index].takeAway = data['takeAway'] || user.takeAway;
        
        return this.users[index];
    }
    /**
   * 
   * @param {uuid} id 
   */
    delete(id) {
        const user = this.findOne(id);
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
        return {};
    }
}
export default new User();