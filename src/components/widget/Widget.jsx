import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Widget({type}) {

    let data;

    //temporary

    const amount=100;
    const diff=30;
    // const account=100;

    switch (type) {
        case 'user':
            data = {
                title: "USER",
                isMoney : false,
                link: "See you all",
                icon: <PersonIcon className='icon' style={{
                    backgroundColor: "rgb(245, 112, 92)",
                    color: "rgb(121, 35, 22)"
                }}/>,
            };
            break;
        case 'order':
            data = {
                title: "ORDERS",
                isMoney : false,
                link: "View all orders",
                icon: <ShoppingBagIcon className='icon' style={{
                    backgroundColor: "rgb(86, 165, 230)",
                    color: "rgb(10, 24, 102)"
                }}/>,
            };
            break;
        case 'earning':
            data = {
                title: "EARNING",
                isMoney : true,
                link: "View net earnings",
                icon: <MonetizationOnIcon className='icon' style={{
                    backgroundColor: "rgb(111, 219, 87)",
                    color: "rgb(24, 67, 14)"
                }}/>,
            };
            break;
        case 'balance':
            data = {
                title: "BALANCE",
                isMoney : true,
                link: "View details",
                icon: <AccountBalanceIcon className='icon' style={{
                    backgroundColor: "rgb(219, 87, 182)",
                    color: "rgb(102, 10, 76)"
                }}/>,
            };
            break;

            default:
                break;


    }






  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>

        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon/>
                {diff} %
            </div>
            {data.icon}
        </div>
      
    </div>
  )
}

export default Widget
