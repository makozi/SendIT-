
import ParcelModel from '../models/Parcel';

const Parcel= {
    /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object 
   */
    create(req, res) {
        if (!req.body.placedBy  && !req.body.weight && !req.body.weightmetric && !req.body.status && !req.body.from && !req.body.to && !req.body.currentLocation ) {
            return res.status(400).json({
                status: '404',
                message: 'All fields required'
            });
        }
        const parcel = ParcelModel.create(req.body);
        return res.status(201).send(parcel);
    },
    /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} user array
   */
    getAll(req, res) {
        const parcels = ParcelModel.findAll();
        res.status(200).send(parcels);
    },
    /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object
   */
    getOne(req, res) {
        const parcel = ParcelModel.findOne(req.params.id);
        if (!parcel) {
            return res.status(404).json({
                status: '404',
                message: 'Parcel not found'
            });
        }
        return res.status(200).send(parcel);
    },
    /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated parcel
   */
    update(req, res) {
        const parcel = ParcelModel.findOne(req.params.id);
        if (!parcel) {
            return res.status(404).json({
                status: '404',
                message: 'Parcel not found'
            });
            //.send({'message': 'user not found'});
        }
        const updatedParcel = ParcelModel.update(req.params.id, req.body);
        return res.status(200).send(updatedParcel);
    },
    /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return status code 204 
   */
    delete(req, res) {
        const parcel = ParcelModel.findOne(req.params.id);
        if (!parcel) {
            return res.status(404).send({'message': 'user not found'});
        }
        const ref = ParcelModel.delete(req.params.id);
        return res.status(204).send(ref);
    }
};

export default Parcel;