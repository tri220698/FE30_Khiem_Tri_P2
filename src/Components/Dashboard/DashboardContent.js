import React, { useState } from 'react';
import avatarImg from '../../img/admin-ui.svg';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import RoutersAdmin from './RouterAdmin'
import LeftItem from './LeftItem'

const DashboardContent = () => {

  return (
    <React.Fragment>
      <LeftItem/>
      <div className="content-dashboard">
        {<RoutersAdmin />}
      </div>
    </React.Fragment >
  )
}

export default DashboardContent;