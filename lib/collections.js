import { Mongo } from 'meteor/mongo';

export const BusDriver = new Mongo.Collection('drivers'),
             BusOwner = new Mongo.Collection('bus_owner'),
             Areas = new Mongo.Collection('areas'),
             Routes = new Mongo.Collection('routes'),
             Buses = new Mongo.Collection('buses'),
             Stations = new Mongo.Collection('stations')
