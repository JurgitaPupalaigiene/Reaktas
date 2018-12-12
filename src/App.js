import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import { products } from './products';

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

class App extends Component {
  goProducts = () => this.props.history.push("products");

  render() {
     return (
        <div className="container-fluid">
          <h1>Skanios duonos elektronine parduotuve</h1>
          <List list={products}/>
          <button
            onClick={this.goProducts}
            className="btn btn-primary"
            role="button"
          >
            Go to Products
          </button>
        </div>
    );
  }
}

export default App;
