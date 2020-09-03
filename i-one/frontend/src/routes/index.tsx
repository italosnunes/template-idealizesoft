import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignInUser from '../pages/SignInUser';
import AlterPassword from '../pages/AlterPassword';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import User from '../pages/User';
import ImportOrder from '../pages/ImportOrder';
import DashboardUser from '../pages/DashboardUser';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignInUser} />
        <Route path="/alter-password" component={AlterPassword} />
        <Route path="/admin" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />

        <Route path="/dashboard" exact component={DashboardUser} isPrivate />
        <Route
            path="/admin/dashboard"
            component={Dashboard}
            isPrivate
            template
        />

        <Route path="/user" component={User} isPrivate template />
        <Route
            path="/import-order"
            component={ImportOrder}
            isPrivate
            template
        />
    </Switch>
);

export default Routes;
