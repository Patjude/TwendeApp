import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import Header from './Header'
import { BusDriver, Buses } from '../../lib/collections'

export class AddBus extends Component {

static handleSubmit(event){
   event.preventDefault()
   const plate = event.target.plate.value
   const name = event.target.driver.value
   const route = event.target.route.value
    BusDriver.insert({
      plate,
      name,
      route,
      status:false
    })
 }

 renderDrivers(){
    const drivers = this.props.drivers
    if (drivers === undefined) {
      return
    }
    return drivers.map((driver) => (
      <li key={driver._id} className="collection-item dismissable"><div>{driver.name}<a href="#!" className="secondary-content">{driver.plate}</a></div></li>
    ))
 }


  render(){
    return(
      <div>
        <Header />

          <div className="container">
            <div className="row">
            {/* margiin top */}
          <form className="col s6" onSubmit={AddBus.handleSubmit.bind(this)}>

              <h4 className="center">Register Bus </h4>
              <div className="input-field col s12">
                <i className="material-icons prefix">directions_bus</i>
                <input id="nplate" type="text" className="validate" name="plate"/>
                <label htmlFor="nplate"> Number Plate</label>
              </div>

              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon_telephone" type="tel" className="validate" name="driver"/>
                <label htmlFor="icon_telephone">Driver</label>
              </div>

              <div className="input-field col s12">
                <i className="material-icons prefix">directions</i>
                <input id="icon_telephone" type="tel" className="validate" name="route"/>
                <label htmlFor="icon_telephone">Bus Route </label>
              </div>


            <button className="btn waves-effect waves-light addBtn" type="submit" name="action"> Save
            </button>
          </form>
          <div className="col s6">
            <h4 className="center">List of Buses</h4>

          <ul className="collection">
            {this.renderDrivers()}
          </ul>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default withTracker(() => {
  return {
    drivers: BusDriver.find().fetch(),
  }
})(AddBus)
