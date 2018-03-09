import React, { Component } from 'react'
import Header from './Header'

export default class RegisterForm extends Component {

 handleSubmit(event){
  event.preventDefault()
  const name = event.target.user_name.value
  const phone = event.target.phone.value
  const type = event.target.type.value
  const email = event.target.email.value
  const password = event.target.password.value
  const profile = { name, phone, type }

  Accounts.createUser({
    email,
    password,
    profile
  })
}



  render(){
      $('select').select();
    return(
      <div>
        <Header />
        <div className="row">
          <div className="container">
          <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
            <div className="row">
              <h4 className="center">Register Here</h4>
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input id="user_name" type="text" className="validate" name="user_name" />
                <label htmlFor="user_name"> Name</label>
              </div>

              <div className="input-field col s12">
                <i className="material-icons prefix">phone</i>
                <input id="icon_telephone" type="tel" className="validate" name="phone"/>
                <label htmlFor="icon_telephone">Telephone</label>
              </div>

              <div className="input-field col s12">
                <i className="material-icons prefix">email</i>
                <input id="icon_telephone" type="tel" className="validate" name="email"/>
                <label htmlFor="icon_telephone">Email</label>
              </div>

              <div className="input-field col s12">
                <i className="material-icons prefix">lock</i>
                <input id="password" type="tel" className="validate" name="password"/>
                <label htmlFor="password">Password</label>
              </div>

              <div className="input-field col s4">
                  {/* <label>Materialize Select</label> */}
                <select className="browser-default" name="type">
                  <option value="" defaultValue>I am registering as </option>
                  <option value="owner">Bus Owner</option>
                  <option value="driver">Bus Driver</option>
                  <option value="passenger">Passenger</option>
                </select>
              </div>

            </div>
            <button className="btn waves-effect waves-light addBtn" type="submit" name="action"> Save
            </button>
          </form>
          <div className="input-field col s4 center">

          </div>
        </div>
        </div>
      </div>
    )
  }
}
