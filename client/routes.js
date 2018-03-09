import { mount } from 'react-mounter';
import { Landing } from './Components/Landing'
import  RegisterForm  from './Components/RegisterForm'
import  AddBus  from './Components/AddBus'

FlowRouter.route('/', {
  name: 'Landing',
  action() {
    mount(Landing, {});
  }
});

FlowRouter.route('/register', {
  name: 'RegisterForm',
  action() {
    mount(RegisterForm, {});
  }
});

FlowRouter.route('/add_bus', {
  name: 'AddBus',
  action() {
    mount(AddBus, {});
  }
});
