import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/Featured/Featured'
import Chart from '../../components/Chart/Chart'
import Table from '../../components/table/Table'

function Home() {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <div className="chartOuter">
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> <Chart/>
          </div>
        </div>

        <div className="listContainer">
          <div className="listTitle">
            Latest Transactions
          </div>

          <Table/>
        </div>
      </div>

    </div>
  )
}

export default Home