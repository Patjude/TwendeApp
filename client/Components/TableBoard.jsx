import React, { Component } from 'react'
import { BusDriver, Buses } from '../../lib/collections'
import { withTracker } from 'meteor/react-meteor-data'

export class TableBoard extends Component {

  DisplayTable(){
    const buses = this.props.buses

    if (buses === undefined) {
      return
    }
    return buses.map((bus)=> (
      <tr key={bus._id}>
        <td>{bus.route}</td>
        <td>{bus.plate}</td>
        <td>{(bus.status === false) ? 'Stopped' : 'Enroute'}</td>
        <td>{moment().hour() + 1}</td>
      </tr>
    ))
  }

  render(){

    return(
      <table className="bordered">
      <thead>
        <tr>
            <th>Destination</th>
            <th>Current Bus</th>
            <th>Bus Status</th>
            <th>Next Bus</th>
        </tr>
      </thead>

      <tbody>
      {this.DisplayTable()}
      </tbody>
    </table>
    )
  }
}

export default withTracker(() => {
  return {
    buses: BusDriver.find().fetch(),

  }
})(TableBoard)
