import React, {useState, useEffect} from 'react'
import PostUser from '../postUser/PostUser'
import "./Feed.css"
import axios from 'axios'

const Feed = () => {

  const [posts,setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async() => {
    const res = await axios.get('/api/user/allUsers')
    setPosts(res.data)  
    }
    fetchPosts()
  },[])
    return (
        <div className = "feed">
          <div className="feedWrapper">
            
            {posts.map((p)=>(
              
              <PostUser key = {p._id} post={p} />
            ))}
            
          </div> 
        </div>
    )
}

export default Feed
