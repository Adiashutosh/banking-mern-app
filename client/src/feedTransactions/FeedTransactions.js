import React ,{useState,useEffect} from 'react'
import PostTransaction from '../components/postTransaction/PostTransaction'
import "./FeedTransactions.css"
import axios from "axios"

const FeedTransactions = () => {
    const [posts,setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async() => {
    const res = await axios.get('/api/user/allTransactions')
    setPosts(res.data)  
    }
    fetchPosts()
  },[])
    return (
        <div className = "feedTransactions">
            <div className="feedTransactionsWrapper">
                
                {posts.map((p)=>(  
              <PostTransaction key = {p._id} post={p} />
            ))}
                
            </div>
            
        </div>
    )
}
export default FeedTransactions
