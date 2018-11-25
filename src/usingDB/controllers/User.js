// src/usingDB/controllers/ User.js
import moment from 'moment';
import uuidv4 from 'uuid/v4';
import db from '../db';

const User = {
    /**
   * Create A  User
   * @param {object} req 
   * @param {object} res
   * @returns {object}  User object 
   */
    async create(req, res) {
        const text = `INSERT INTO
        users(id, firstname, lastname, othernames, email,username, registered, isAdmin, takeAway , modified_date)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        returning *`;
        const values = [
            uuidv4(),
            req.body.firstname,
            req.body.lastname,
            req.body.othernames,
            req.body.email,
            req.body.username,
            moment(new Date()),
            req.body.isAdmin,
            req.body.takeAway,
            moment(new Date())
        ];

        try {
            const { rows } = await db.query(text, values);
            return res.status(201).send(rows[0]);
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    /**
   * Get All User
   * @param {object} req 
   * @param {object} res 
   * @returns {object} User array
   */
    async getAll(req, res) {
        const findAllQuery = 'SELECT * FROM users';
        try {
            const { rows, rowCount } = await db.query(findAllQuery);
            return res.status(200).send({ rows, rowCount });
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    /**
   * Get A User
   * @param {object} req 
   * @param {object} res
   * @returns {object} reflection object
   */
    async getOne(req, res) {
        const text = 'SELECT * FROM users WHERE id = $1';
        try {
            const { rows } = await db.query(text, [req.params.id]);
            if (!rows[0]) {
                return res.status(404).send({ 'message': 'reflection not found' });
            }
            return res.status(200).send(rows[0]);
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    /**
   * Update A user
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated user
   */
    async update(req, res) {
        const findOneQuery = 'SELECT * FROM users WHERE id=$1';
        const updateOneQuery = `UPDATE users
      SET firstname=$1,lastname=$2,othernames=$3,email=$4,username=$5,isAdmin=$6, takeAway=$7, modified_date=$8
      WHERE id=$9, id=$10 returning *`;
        try {
            const { rows } = await db.query(findOneQuery, [req.params.id]);
            if (!rows[0]) {
                return res.status(404).send({ 'message': 'User not found' });
            }
            const values = [
                req.body.success || rows[0].success,
                req.body.low_point || rows[0].low_point,
                req.body.take_away || rows[0].take_away,
                moment(new Date()),
                req.params.id
            ];
            const response = await db.query(updateOneQuery, values);
            return res.status(200).send(response.rows[0]);
        } catch (err) {
            return res.status(400).send(err);
        }
    },
    /**
   * Delete A Reflection
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
    async delete(req, res) {
        const deleteQuery = 'DELETE FROM users WHERE id=$1 returning *';
        try {
            const { rows } = await db.query(deleteQuery, [req.params.id]);
            if (!rows[0]) {
                return res.status(404).send({ 'message': 'User not found' });
            }
            return res.status(204).send({ 'message': 'deleted' });
        } catch (error) {
            return res.status(400).send(error);
        }
    }
};

export default User;