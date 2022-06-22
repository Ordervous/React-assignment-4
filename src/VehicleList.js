import ListGroup from 'react-bootstrap/ListGroup'
import React from 'react';
import Vehicles from './Vehicle';


class VehicleList extends React.Component {

    vehiclesMap () {
        return this.props.vehicles.map((vehicle) => <Vehicles vehicle={vehicle}
        key={vehicle.vin}
        onVehicleSelected={this.props.onVehicleSelected} />
        )
    }

    render() {
        return (
            <ListGroup className="w-50 align-self-start">
                <ListGroup.Item action active={ } onClick={ }>
                    {vehicle.manufacturer} {vehicle.model}
                </ListGroup.Item>
                ...
                <ListGroup.Item action active={ } onClick={ }>
                    {vehicle.manufacturer} {vehicle.model}
                </ListGroup.Item>
            </ListGroup>

        )
    }


}

export default VehicleList
