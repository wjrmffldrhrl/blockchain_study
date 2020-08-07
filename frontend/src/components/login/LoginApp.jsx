import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from '../../config/AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ErrorComponent from '../error/Error.jsx'
import HeaderComponent from '../HeaderComponent.jsx'
import FooterComponent from '../FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'

import MainComponent from './MainComponent.jsx';
import { withRouter } from 'react-router'
import RegisterForm from './RegisterForm';

class LoginApp extends Component {
    render() {
        const HeaderWithRouter = withRouter(HeaderComponent);

        return (
            <div className="TodoApp">
                <Router>
                    <div>
                        <HeaderWithRouter/>
                        <Switch>
                            <Route exact path="/"  component={MainComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/register" component={RegisterForm}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default LoginApp