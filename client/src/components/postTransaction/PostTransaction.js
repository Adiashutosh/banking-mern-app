import React from 'react'
import "./PostTransaction.css"
import moment from 'moment'

const PostTransaction = ({post}) => {
    const d = new Date(post.createdAt)
    var date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
    
    return (
        <div className = "postTransaction">
            <div className="postTransactionWrapper">
                <div className="postTransactionLeft">
                    <span>From:</span>
                    <span className = "result">{post.from}</span>
                </div>
                <div className="postTransactionCenter">
                    <span>To:</span>
                    <span className = "result">{post.to}</span>
                </div>
                <div className="postTransactionRight">
                    <span>Amount:</span>
                    <span className = "result">{post.amount}</span>
                </div>
                <div className="postTransactionRightMost">
                    <span>Date:</span>
                    <span className = "result">{date}</span>
                </div>
            </div>
            
        </div>
    )
}

export default PostTransaction
