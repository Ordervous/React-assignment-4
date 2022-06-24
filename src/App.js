import React from 'react';
import Vehicles from './Vehicle';
import VehicleList from './VehicleList';
import Stack from 'react-bootstrap/Stack';
import { faker } from '@faker-js/faker';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vehicles: this.fakerVehicles(), selected: null}
    this.handleVehicleSelected = this.handleVehicleSelected.bind(this);
  }

  fakerVehicles() {
    let vehicles = []
    for (let i = 0; i < 10; i++) {
      vehicles.push({
        manufacturer: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        type: faker.vehicle.type(),
        fuel: faker.vehicle.fuel(),
        vin: faker.vehicle.vin(),
        color: faker.vehicle.color()
      })
    }
    return vehicles;
  }

  handleVehicleSelected(vehicle) {
    //* this you would use usually, but it didn't work for this. 
    // this.setState((state) => {
    //   return {
    //     selected: state.vehicle
    //   }
    // })
    this.setState({ selected: vehicle })
  }

  render() {
    return (
      <Stack gap={3} direction="horizontal" className="p-5 col-md-20 offset-md-2">
        <VehicleList
          vehicles={this.state.vehicles}
          handleVehicleSelected={this.handleVehicleSelected}
          selected={this.state.selected}
        />
        <Vehicles oneVehicle={this.state.selected}/>
      </Stack>
    )
  }
}


export default App
