import React from 'react';
import avatarImg from '../../img/admin-ui.svg';
import UserForm from '../Commons/userForm';
import TableForm from '../Commons/tableForm';

const ContentUsers = () => {
  return(
    <React.Fragment>
      <div className="content-dashboard">
        <TableForm></TableForm>
        <UserForm submitHandler={() => {}} user={JSON.parse(sessionStorage.getItem('userData'))} setConfirm={() => {}} handleChange={() => {}} confirm={null}></UserForm>
      </div>
    </React.Fragment>
  )
}

export default ContentUsers;