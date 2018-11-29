import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import List from './components/List';
import nuotraukos from './components/nuotrauka.jpeg';



const produktai=[
{
  imageURL: nuotraukos,
  title: "Rugine duona",
  description:"Senovinis receptas, be mieliu",
  price: 1,
  quantity: 16,
  details:"https://www.malsena.lt/receptas/namine-rugine-duona-su-raugu-duonkepei/"
},

{
  imageURL: nuotraukos,
  title: "Rugine duona",
  description:"Senovinis receptas, be mieliu",
  price: 5,
  quantity: 18,
  details:"https://www.malsena.lt/receptas/namine-rugine-duona-su-raugu-duonkepei/"
}, 

{
  imageURL: nuotraukos,
  title: "Rugine duona",
  description:"Senovinis receptas, be mieliu",
  price: 13,
  quantity: 2,
  details:"https://www.malsena.lt/receptas/namine-rugine-duona-su-raugu-duonkepei/"
},
{
  imageURL: nuotraukos,
  title: "Rugine duona",
  description:"Senovinis receptas, be mieliu",
  price: 12,
  quantity: 4,
  details:"https://www.malsena.lt/receptas/namine-rugine-duona-su-raugu-duonkepei/"
},
{
  imageURL: nuotraukos,
  title: "Rugine duona",
  description:"Senovinis receptas, be mieliu",
  price: 23,
  quantity: 14,
  details:"https://www.malsena.lt/receptas/namine-rugine-duona-su-raugu-duonkepei/"
},
{
  imageURL: nuotraukos,
  title: "Rugine duona",
  description:"Senovinis receptas, be mieliu",
  price: 100,
  quantity: 63,
  details:"https://www.malsena.lt/receptas/namine-rugine-duona-su-raugu-duonkepei/"
},
{
  imageURL: nuotraukos,
  title: "Rugine duona",
  description:"Senovinis receptas, be mieliu",
  price: 90,
  quantity: 3,
  details:"https://www.malsena.lt/receptas/namine-rugine-duona-su-raugu-duonkepei/"
},
{
  imageURL: nuotraukos,
  title: "Rugine duona",
  description:"Senovinis receptas, be mieliu",
  price: 78,
  quantity:15,
  details:"https://www.malsena.lt/receptas/namine-rugine-duona-su-raugu-duonkepei/"
}
]

class App extends Component {
  render() {
     return (
        <div className="container-fluid">
        <h1>Skanios duonos elektronine parduotuve</h1>
        <List list={produktai}/>
      </div>
    );
  }
}

export default App;
