import React from 'react';
import logoutImg from '../../img/logout.svg';

var Boolean = false;

function contentDb(left, width) {
  document.querySelector('.menu-dashboard').style.left = left;
  for(let i = 0 ; i < document.getElementsByClassName("content-dashboard").length;i++) {
    document.getElementsByClassName("content-dashboard")[i].style.flex = '0 0 '+width;
    document.getElementsByClassName("content-dashboard")[i].style.maxWidth = width;
  }
  Boolean=!Boolean
}

function showAdmin() {
  if (Boolean) {
    contentDb("-22%","100%")
  }
  else {
    contentDb("0","80%")
  }
}

const logOut = () => {
  sessionStorage.removeItem('userData')
  window.location.pathname = ('/')
}

const TopMenu = () => {
  return(
    <header className="header-dashboard">
      <span className="header-dashboard__logo">
        <a href="#" onClick={(e) => {
          e.preventDefault();
          showAdmin();
        }}>Admin</a>
      </span>
      <span className="header-dashboard__logout">
        <img src={logoutImg} alt="logo" onClick={logOut}/>
      </span>
    </header>
  )
}

export default TopMenu;