import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';





class List extends Component{
  render() {
    var suma=this.props.list
    .reduce((suma, produktas)=>
      suma + (produktas.price * produktas.quantity), 0);

    var duona= this.props.list
    .filter(card=> card.price<=23)
    .map(card=>{
        return (
          <Card
          title={card.title}
          description={card.description}
          image={card.imageURL}
          price={card.price}
          quantity={card.quantity}
          />
        )
})
        return (<div className="row">
        {duona}

        <div>Suma= {suma}</div>
        </div>
        );
  }
}
List.propTypes={
  duona: PropTypes.array.isRequired
}

export default List;