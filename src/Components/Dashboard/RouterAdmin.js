import React from 'react';
import { Switch, Route } from "react-router-dom";
import AdminForm from './AdminForm';
import ContentUsers from './Users/ContentUsers';
import ContentCarts from './Carts/ContentCarts';
import Dashboard from './Dashboard__page/index';

const RoutersAdmin = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/admin/users" component={ContentUsers} />
        <Route path="/admin/account" component={AdminForm} />
        <Route path="/admin/carts" component={ContentCarts} />
        <Route path="/admin/dashboard" component={Dashboard} />

      </Switch>
    </React.Fragment>
  )
}

export default RoutersAdmin