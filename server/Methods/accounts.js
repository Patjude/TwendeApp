import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

Meteor.methods({
  'user.insert'(user){
    check(user, Array)
    Accounts.createUser(user)
  }
})
