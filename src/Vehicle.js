import { faker } from '@faker-js/faker';
import React from 'react';

class Vehicles extends React.Component {
    constructor(props) {
        super(props)
        this.getVehicles = this.getVehicles.bind(this)
    }

    getVehicles() {
        let vehiclesarray = []

        for (let i = 0; i < 10; i++) {
            vehiclesarray.push({
                manufacturer: faker.vehicle.manufacturer(),
                model: faker.vehicle.model(),
                type: faker.vehicle.type(),
                fuel: faker.vehicle.fuel(),
                vin: faker.vehicle.vin(),
                color: faker.vehicle.color()
            })
            return {
                vehiclesarray
            }
        }
    }

    render() {
        return {
            vehiclesarray
        }
    }

}



export default Vehicles