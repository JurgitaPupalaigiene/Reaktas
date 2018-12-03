import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import List from './List';





class List extends Component{
  render() {
    
        var suma=this.props.list
    .reduce((suma, produktas)=>
      suma + (produktas.price * produktas.quantity), 0);

    var duona= this.props.list
    // .filter(card=> card.price<=23)
    .map(card=>{
        return (
          <Card  
          imageURL={card.imageURL}
          title={card.title}
          description={card.description}
          price={card.price}
          quantity={card.quantity}
          />
        )}
      );
      // var naujas=this.props.list
      // .map(card=>{
      //   return(
      //     <Card
      //     title={produktas.title}
      //     price={produktas.price}/>
      //     )
      //   });
      //   naujas.forEach(element => console.log(element));
          
      //naujas.set(duona.title, duona.price);
      //naujas.has("rugine duona");

      //new naujas(duona.map(obj=>[obj.title, obj.price]));

      var naujasMasyvas=duona.map(card.title, card.price);
        return (<div className="row">
        {duona} 
        <div>Suma= {suma}</div>
        <div> Naujas masyvas yra cia: {naujasMasyvas}</div>
        </div>
          );
  }
}
List.propTypes={
  duona: PropTypes.array.isRequired,
  naujasMasyvas:PropTypes.array.isRequired
}
// newProduktas.propTypes={
//   produktas: PropTypes.array.isRequired
// }

export default List;