import React from 'react'
import MainNavbar from '../Landing/MainNavbar'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function Home() {

  // const {state} = useLocation();
  // const

  const location = useLocation();

  //const token = localStorage.getItem("token");
  const token = sessionStorage.getItem("token");
  console.log(token)
  //console.log(location.state.token

  return (
    <div>
      <div>
        <MainNavbar />
      </div>
      home
      <div>

        <ul>
          <NavLink to={"/order_details"}>
            <li>
              <a href='#' >
                order details
              </a>
            </li>
            </NavLink>
            <NavLink to={"/product"}>
            <li>
              <a href='#' >
                Products
              </a>
            </li>
            </NavLink>
            <NavLink to={"/addProduct"}>
            <li>
              <a href='#' >
                Add Products
              </a>
            </li>
            </NavLink>
            <NavLink to={"/userDetails"}>
            <li>
              <a href='#' >
                User Details
              </a>
            </li>
            </NavLink>
        </ul>
      </div>
      <p>{token}</p>
      {/* <p>{location.state.token}</p> */}
    </div>
  )
}
