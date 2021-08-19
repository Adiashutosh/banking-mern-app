import React from 'react'
import "./Topbar.css"
import { Link } from 'react-router-dom'

const Topbar = () => {
    return (
        <div className ="topbarContainer" >
            <div className="topbarLeft">
                <div className="logo">
                    <h2>
                        <span>B</span>ANKING
                        <span> A</span>PP
                    </h2>
                </div>
            </div>
            <div className="topbarCenter">
                <div className="routerLinks">
                    <Link to='/' className = 'link'>
                        <span className="topbarLink">Home</span>
                    </Link>
                    <Link to ='/users' className = 'link'>
                        <span className="topbarLink">Users</span>
                    </Link>
                    <Link to= '/transactions' className = 'link'>
                        <span className="topbarLink">Transactions</span>
                    </Link>
                    <Link to = '/about' className = 'link'>
                        <span className="topbarLink">About</span>
                    </Link>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <img src="/assets/facebook.png" alt="" />
                    </div>
                    <div className="topbarIconItem">
                        <img src="/assets/instagram.png" alt="" />
                    </div>
                    <div className="topbarIconItem">
                        <img src="/assets/github.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
