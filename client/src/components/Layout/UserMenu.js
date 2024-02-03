import React from 'react'
import { NavLink } from 'react-router-dom'
//import Dashboard from './../../pages/user/Dashboard';

const UserMenu = () => {
  return (
    <div>
       <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
           Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
         
         
          {/* <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink> */}
        </div>
      </div>
    </div>
  )
}

export default UserMenu
