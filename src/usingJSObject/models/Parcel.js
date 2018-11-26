import moment from 'moment';
import uuid from 'uuid';

class Parcel {
/**
   * class constructor
   * @param {object} data
   */
    constructor() {
        this.parcels = [];
    }
    /**
   * 
   * @returns {object} Parcel object
   */
    create(data) {
        const newParcel = {
            id: uuid.v4(),
            placedBy: data.placedBy || '',
            weight: data.weight || '',
            weightmetric: data.weightmetric || '',
            status: data.status || '',
            from: data.from || '',
            sentOn: moment.now(),
            to: data.to || '',
            currentLocation: data.currentLocation || '',
            deliveredOn: moment.now()
        };
        this.parcels.push(newParcel);
        return newParcel;
    }
    /**
   * 
   * @param {uuid} id
   * @returns {object} user object
   */
    findOne(id) {
        return this.parcels.find(use => use.id === id);
    }
    /**
   * @returns {object} returns all user
   */
    findAll() {
        return this.parcels;
    }
    /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
    update(id, data) {
        const parcel = this.findOne(id);
        const index = this.parcels.indexOf(parcel);
        this.parcels[index].placedBy = data['placedBy'] || parcel.placedBy;
        this.parcels[index].weight = data['weight'] || parcel.weight;
        this.parcels[index].weightmetric = data['weightmetric'] || parcel.weightmetric;
        this.parcels[index].status = data['status'] || parcel.status;
        this.parcels[index].from = data['from'] ||parcel.from;
        this.parcels[index].sentOn = moment.now();
       
        this.parcels[index].to = data['to'] || parcel.to;
        this.parcels[index].currentLocation = data['currentLocation'] || parcel.currentLocation;
        this.parcels[index].deliveredOn = moment.now();
        
        return this.parcels[index];
    }
    /**
   * 
   * @param {uuid} id 
   */
    delete(id) {
        const parcel = this.findOne(id);
        const index = this.parcels.indexOf(parcel);
        this.parcels.splice(index, 1);
        return {};
    }
}
export default new Parcel();