import React from 'react'
import "./Home.css"
import Topbar from '../../components/Topbar/Topbar'

const Home = () => {
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <h2>
                <span>W</span>ELCOME 
                <span> T</span>O
                <span> B</span>ASIC
                <span> B</span>ANKING 
                <span> W</span>EBSITE 
                </h2>
            </div>         
        </>
    )
}

export default Home
