import React, {Component} from 'react';



class Counter extends Component {
    constructor(){
         super();
         this.state = { count: 0 }; }
         
            handleClick = (event) => {
                event.preventDefault(); // event.stopPropagation();
                 this.setState({ count: this.state.count + 1});
    }
    render() {
        return (
             <div className="container-fluid">
                
                 <button className="btn btn-warning"
                 onClick={this.handleClick}>Increase</button>
                 <button className="btn btn-info" >{this.state.count}</button>
             </div>
             );
        }
    }
    export default Counter;
