import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';





class List extends Component{
  render() {
    var duona= this.props.list.map(card=> {
        return (
          <Card
          title={card.title}
          description={card.description}
          image={card.image}
          price={card.price}
          quantity={card.quantity}
          />
        )
})
        return (<div className="row">
        {duona}
        </div>
        );
  }
}
List.propTypes={
  duona: PropTypes.array.isRequired
}

export default List;