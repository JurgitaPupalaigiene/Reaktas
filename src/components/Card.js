import React, {Component} from 'react';
import PropTypes from 'prop-types';

const styles={
  card:{
    width:'18rem'
  },
  image:{
    height: '200px'
  }
}



class Card extends Component{
  render() {
    return (
    <div className="card" style={styles.card}>
                  <img className="card-img-top" src={this.props.imageURL} alt={this.props.title} style={styles.image}/> 
                    <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <p className="card-price">{this.props.price}</p>
                    <p className="card-quantity">{this.props.quantity}</p>
                    <a href={"https://www.malsena.lt/receptas/namine-rugine-duona-su-raugu-duonkepei/"} className="btn btn-primary">Details</a>
                    </div> 
    </div>
                );
  }
}
Card.propTypes={
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  details: PropTypes.array.isRequired
}

export default Card;