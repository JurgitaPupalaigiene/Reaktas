import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import Card from './components/Card';
import List from './components/List';
import ShoppingCart from './components/ShoppingCart';

import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';




	
	
	var NoMatch = (props) => {
	var goApp = () => props.history.push("/");
	return <div>Route did not match
	<button onClick={goApp}>Go Home</button></div>;
	};

var DemonstruotiNavigacija = (props) => {
	var goHome = () => props.history.push("/");
	return (
	<div>
	At route: {props.location.pathname}
	<button onClick={goHome}>Go Home</button>
	<pre>
	{JSON.stringify(props, null, 2)}
	</pre>
	</div>
	);
	};
	// class AppContainer extends Component{
	// 	state={

	// 	}
	// }
	var AppContainer = (props) => {
		return (<div>
		<div>
		<Link to='/'>Home</Link> |&nbsp;
		<Link to='/products'>Product List</Link> |&nbsp;
		<Link to={`/products/${127}`}>Products' details</Link> |&nbsp;
		<Link to='/shopping-cart'> Shopping Cart</Link> |&nbsp;
		<Link to='/non-existant'>Non Existant</Link>
		</div>
		{props.children}
		</div>);
		};

	
	

ReactDOM.render((
		<BrowserRouter>
		<AppContainer>
		<Switch>
		<Route exact path='/' component={App}/>
		<Route path="/products/:id" component={Card} />
		<Route path="/products" component={List} />
		<Route path="/shopping-cart" component={ShoppingCart} />
		<Route path="*" component={NoMatch}/>
		<Route component={NoMatch}/>
		</Switch>
		</AppContainer>
		</BrowserRouter>
		), document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();