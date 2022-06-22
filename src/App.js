import React from 'react';
import Vehicles from './Vehicle';
import VehicleList from './VehicleList';
import Stack from 'react-bootstrap/Stack';
import VehicleCard from './VehicleCard';

class App extends React.Component {
constructor(props) {
  super(props);
    this.state = { vehiclesarray: [] };
    this.onSelected = this.onSelected.bind(this);
    this.handleVehicleSelected = this.handleVehicleSelected.bind(this);
}

onSelected(vehicle) {
  this.setState((state) => {
    return {
      vehicles: state.vehicles(vehicle)
    }
  })
}




  render() {
    return (
      <Stack gap={3} direction="horizontal" className="p-5 col-md-10 offset-md-1">
        <VehicleList />
        <Vehicles />
        <VehicleCard />
      </Stack>
    )
  }


}


export default App;
