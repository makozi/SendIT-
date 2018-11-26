
import UserModel from '../models/User';

const User = {
    /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object 
   */
    create(req, res) {
        if (!req.body.firstname  && !req.body.lastname && !req.body.othernames && !req.body.email && !req.body.username && !req.body.isAdmin && !req.body.takeAway) {
            return res.status(400).json({
                status: '400',
                message: 'All fields are rquired'
            });
        }
        const user = UserModel.create(req.body);
        return res.status(201).send(user);
    },
    /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} user array
   */
    getAll(req, res) {
        const users = UserModel.findAll();
        res.status(200).send(users);
    },
    /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object
   */
    getOne(req, res) {
        const user = UserModel.findOne(req.params.id);
        if (!user) {
            return res.status(404).json({
                status: '400',
                message: 'User not found'
            });
        }
        return res.status(200).send(user);
    },
    /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated reflection
   */
    update(req, res) {
        const user = UserModel.findOne(req.params.id);
        if (!user) {
            return res.status(404).json({
                status: '400',
                message: 'User not found'
            });
        }
        const updatedUser = UserModel.update(req.params.id, req.body);
        return res.status(200).send(updatedUser);
    },
    /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return status code 204 
   */
    delete(req, res) {
        const user = UserModel.findOne(req.params.id);
        if (!user) {
            return res.status(404).json({
                status: '400',
                message: 'User not found'
            });
        }
        const ref = UserModel.delete(req.params.id);
        return res.status(204).send(ref);
    }
};

export default User;