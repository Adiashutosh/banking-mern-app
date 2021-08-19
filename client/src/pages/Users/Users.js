import React from 'react'
import "./Users.css"
import Topbar from '../../components/Topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

const Users = () => {
    return (
        <>
            <Topbar/>
            <div className="usersContainer">
                <Leftbar />
                <Feed />
                <Rightbar />
            </div>         
        </>
    )
}

export default Users
