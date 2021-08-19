import React from 'react'
import "./Transactions.css"
import Topbar from '../../components/Topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import FeedTransactions from '../../feedTransactions/FeedTransactions'

const Transactions = () => {
    return (
        <>
            <Topbar/>
            <div className="transactionsContainer">
                <Leftbar />
                <FeedTransactions />
                <Rightbar />
            </div>         
        </>
    )
}

export default Transactions
