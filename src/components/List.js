import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class List extends Component {
  renderBreadList() {
    const list = this.props.list;

    return list.map(item => {
      return (
        <Card
          key={item.id}
          imageURL={item.imageURL}
          title={item.title}
          description={item.description}
          price={item.price}
          quantity={item.quantity}
          details={item.details}
        />
      )
    })
  }
  render() {
    return (
      <div className="row">
        {this.renderBreadList()}
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.array.isRequired,
}








export default List;
