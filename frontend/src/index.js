import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Route } from "react-router-dom";
import Login from './components/login/index';
import  Register from './components/signUp/index';

ReactDOM.render(
	<Router>
        <Route  path="/" component={App} />       
        <Route exact path="/login" component={Login} />       
        <Route exact path="/Register" component={Register} />       
		
	</Router>,
	document.getElementById('root'),
);
