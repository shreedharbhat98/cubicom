import React, { Component } from 'react';
import Login from './authentication/Login';
import { Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/Dashboard" component={Dashboard} />
            </Switch>
        );
    }
}

export default Routes;