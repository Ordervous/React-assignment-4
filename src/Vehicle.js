import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Vehicles extends React.Component {

    render() {

        if (this.props.oneVehicle == null) {
            return (
                <div style={{ display: 'block', width: 350, padding: 30 }}>

                    <Card className="w-0 align-self-start">
                        <Card.Body>
                            <Card.Title>No Vehicle Selected</Card.Title>
                            <Card.Text>
                                Click a vehicle on the left to see more details
                                {this.props.ivan}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )

        } else {
            let { manufacturer, model, type, fuel, vin, color } = this.props.oneVehicle
            return (
                <Card className="w-0 align-self-start">
                    <Card.Img variant="top" src={`https://via.placeholder.com/180x150?text=${manufacturer} ${model}`} />
                    <Card.Body>
                        <Card.Title>{manufacturer} {model}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{vin}</Card.Subtitle>
                        <Card.Text>
                            This is a wonderful {fuel}-powered {color} {type}.
                        </Card.Text>
                        <Button>Buy Now!</Button>
                    </Card.Body>
                </Card>
            )
        }

    }

}

export default Vehicles

//* Could not get the trenary to work, tired heaps of things. 

