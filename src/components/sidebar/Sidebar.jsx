import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className='sideBar'>
      <div className="top">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="logo">Abdul Rehman</span>
      </Link>
      </div>
      <hr />
      <div className="center">
        <ul>

          <p className="title">MAIN</p>

          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          </Link>

          <p className="title">LISTS</p>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PermIdentityIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <Inventory2Icon className="icon" />
              <span>Products</span>
            </li>
          </Link>

          <li>
            <CardTravelIcon className='icon'/>
            <span>Order</span>
          </li>
          <li>
            <LocalShippingIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className='icon'/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <CardTravelIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Sidebar