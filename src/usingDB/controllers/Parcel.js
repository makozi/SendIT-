// src/usingDB/controllers/ User.js
import moment from 'moment';
import uuidv4 from 'uuid/v4';
import db from '../db';

const Parcel = {
    /**
   * Create A   Parcel
   * @param {object} req 
   * @param {object} res
   * @returns {object}  Parcel object 
   */
    async create(req, res) {
        const text = `INSERT INTO
        parcels(id, placedBy, weight, weightmetric, status, from, sentOn , to, currentLocation,  deliveredOn)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        returning *`;
        const values = [
            uuidv4(),
            req.body.placedBy,
            req.body.weight,
            req.body.weightmetric,
            req.body.status,
            req.body.from,
            moment(new Date()),
            req.body.to,
            req.body.currentLocation,
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
   * Get All  Parcel
   * @param {object} req 
   * @param {object} res 
   * @returns {object}  Parcel array
   */
    async getAll(req, res) {
        const findAllQuery = 'SELECT * FROM parcels';
        try {
            const { rows, rowCount } = await db.query(findAllQuery);
            return res.status(200).send({ rows, rowCount });
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    /**
   * Get A  Parcel
   * @param {object} req 
   * @param {object} res
   * @returns {object}  Parcel object
   */
    async getOne(req, res) {
        const text = 'SELECT * FROM parcels WHERE id = $1';
        try {
            const { rows } = await db.query(text, [req.params.id]);
            if (!rows[0]) {
                return res.status(404).send({ 'message': 'parcel not found' });
            }
            return res.status(200).send(rows[0]);
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    /**
   * Update A  Parcel
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated  Parcel
   */
    async update(req, res) {
        const findOneQuery = 'SELECT * FROM users WHERE id=$1';
        const updateOneQuery = `UPDATE users
      SET placedBy=$1,weight=$2,weightmetric=$3,status=$4,from=$5,sentOn=$6,to=$7, currentLocation=$8, deliveredOn=$9
      WHERE id=$10 returning *`;
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
   * @returns {void} return status code 204 
   */
    async delete(req, res) {
        const deleteQuery = 'DELETE FROM users WHERE id=$1 returning *';
        try {
            const { rows } = await db.query(deleteQuery, [req.params.id]);
            if (!rows[0]) {
                return res.status(404).send({ 'message': ' Parcel not found' });
            }
            return res.status(204).send({ 'message': 'deleted' });
        } catch (error) {
            return res.status(400).send(error);
        }
    }
};

export default  Parcel;