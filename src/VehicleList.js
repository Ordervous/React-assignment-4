import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';



class VehicleList extends React.Component {

    singleVehicle(vehicle) {
        return (
            <div>
                <ListGroup className="w-150 align-self-start">
                    <ListGroup.Item action active={this.props.selected === vehicle}
                        onClick={this.props.handleVehicleSelected.bind(this, vehicle)}
                            >
                            { vehicle.manufacturer } {vehicle.model}
                          
                    </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }

    render() {
        return (
            <ListGroup>
                {this.props.vehicles.map((vehicle) => this.singleVehicle(vehicle))}
            </ListGroup>
        )
    }
}

export default VehicleList