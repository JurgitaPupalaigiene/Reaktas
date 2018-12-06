import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';





class List extends Component{
  render() {
    
     var suma=this.props.list
    .reduce((suma, produktas)=>
    suma + (produktas.price * produktas.quantity), 0);

    var sakinys=this.props.list
    .reduce((sakinys, produktas)=>
    sakinys + produktas.price +', '+ produktas.quantity);
    console.log (sakinys);



    var duona= this.props.list
    .filter(card=> card.price<=23)
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
    
        return (<div className="row">
          {duona} 
          <div>Suma= {suma}</div>
        </div>
          );
  }
}
List.propTypes={
  duona: PropTypes.array.isRequired,
}

export default List;