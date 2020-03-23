import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, getUserCart, getProducts } from '../../../action/action'
import MenuLogo from './menu__logo'
import Header from './header'
import MainMenu from './main__menu'
import { getByUser } from '../../../database/db.js'

const MenuMaster = () => {

  const SaveUser = JSON.parse(sessionStorage.getItem('userData'))
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const [Bool, setBool] = useState(false)

  useEffect(() => {
    if (SaveUser) {
      const getUser = async () => {
        const up = await getByUser(SaveUser)
        dispatch(getUserData(up))
        dispatch(getUserCart(up.cart))
        dispatch(getProducts(null))
        setBool(true)
      }
      getUser()
    }
    else {
      dispatch(getProducts(null))
      dispatch(getUserData(null))
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      {Bool ? <Header user={user} /> : <Header />}
      <MenuLogo />
      <MainMenu />
    </React.Fragment>
  )


}

export default MenuMaster