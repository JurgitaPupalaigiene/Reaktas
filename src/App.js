import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import nuotraukos from './components/index.jpg';



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
  title: "Namine duona",
  description:"Senovinis receptas, be mieliu",
  price: 5,
  quantity: 18,
  details:"https://www.malsena.lt/receptas/namine-rugine-duona-su-raugu-duonkepei/"
}, 

{
  imageURL: nuotraukos,
  title: "Senoliu duona",
  description:"Senovinis receptas, be mieliu",
  price: 13,
  quantity: 2,
  details:"https://www.malsena.lt/receptas/namine-rugine-duona-su-raugu-duonkepei/"
},
{
  imageURL: nuotraukos,
  title: "Ajeru duona",
  description:"Senovinis receptas, be mieliu",
  price: 12,
  quantity: 4,
  details:"https://www.malsena.lt/receptas/namine-rugine-duona-su-raugu-duonkepei/"
},
{
  imageURL: nuotraukos,
  title: "Plikyta duona",
  description:"Senovinis receptas, be mieliu",
  price: 23,
  quantity: 14,
  details:"https://www.malsena.lt/receptas/namine-rugine-duona-su-raugu-duonkepei/"
},
{
  imageURL: nuotraukos,
  title: "Ukininku duona",
  description:"Senovinis receptas, be mieliu",
  price: 100,
  quantity: 63,
  details:"https://www.malsena.lt/receptas/namine-rugine-duona-su-raugu-duonkepei/"
},
{
  imageURL: nuotraukos,
  title: "Balta duona",
  description:"Senovinis receptas, be mieliu",
  price: 90,
  quantity: 3,
  details:"https://www.malsena.lt/receptas/namine-rugine-duona-su-raugu-duonkepei/"
},
{
  imageURL: nuotraukos,
  title: "Tikra duona",
  description:"Senovinis receptas, be mieliu",
  price: 78,
  quantity:15,
  details:"https://www.malsena.lt/receptas/namine-rugine-duona-su-raugu-duonkepei/"
}
]

// const produktaiSuKlasem = produktai.map(produktasIsMasyvo => new Produktas(produktasIsMasyvo.title,produktasIsMasyvo.price));
// const produktaiSete = new Set(produktaiSuKlasem);
// const produktaiMape= new Map();
// for ( var i=0; i<produktaiSuKlasem.length; i++){
// produktaiMape.set(i, produktaiSuKlasem[i]);
// }
//const newArray=Array.from(produktaiMape);

// var sakinys= null;
// for (i=0; i<newArray.length; i++){
//   sakinys+= newArray[i];
// }
//var names=produktaiSuKlasem.reduce(function(sum, produktai){
 // return sum +', '+produktai.title;});
 // console.log(names);


// pasinaudojant Array.from iš objektų map'o ir vėl gauti masyvą,
// kurį suredukuoti iki vienos eilutės, 
// kurioje būtų prekės title ir kaina
// Obuolys (1 eur), Samsung (100 eur)

// console.log(produktaiSuKlasem);
// console.log(produktaiSete);
// console.log(produktaiMape);
// console.log(newArray);

const goProducts = () => this.props.history.push("products");



class App extends Component {
  render() {
     return (
        <div className="container-fluid">
        <h1>Skanios duonos elektronine parduotuve</h1>
        <List list={produktai}/>
        <p><button onClick={this.goProducts}
        className="btn btn-primary"
        	role="button">
        		Go to Products
        	</button></p>
        </div>
    );
  }
}

export default App;
