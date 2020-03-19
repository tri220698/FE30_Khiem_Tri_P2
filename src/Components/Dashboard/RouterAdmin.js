import React from 'react';
import { Switch, Route } from "react-router-dom";
import AdminForm from './AdminForm';
import ContentUsers from './Users/ContentUsers';

const RoutersAdmin = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/admin/users" component={ContentUsers} exact />
        <Route path="/admin/account" component={AdminForm} exact />
      </Switch>
    </React.Fragment>
  )
}

export default RoutersAdmin