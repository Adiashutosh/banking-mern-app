import React,{useEffect,useState} from 'react'
import "./PostUser.css"
import axios from 'axios'

const PostUser = ({post}) => {
    const [names,setNames] = useState([])

    const [money, setAmount] = useState()  
    const [cName, setClientName]= useState("")
    
    
    const submitHandler = async(e) =>{
        
        e.preventDefault();
        
        if(cName===''){
            window.alert('please select a name')
            return
        }

        const body = {
            userId: post._id,
            clientName: cName,
            amount: money
        }
        console.log(body)
        try{
            await axios.put('/api/user/transferAmount',body)
            window.alert('transaction successful')
        }catch(err){
            console.log(err);
        }

    }

  useEffect(()=>{
    const fetchPosts = async() => {
        const res = await axios.get('/api/user/allUsers')
        setNames(res.data)       
    }
  
    fetchPosts()


    // const filterData = names.filter((x)=> {
    //     return (x.name !== post.name) 
        
    // })
    // setFilteredNames(filterData)

    // post.name==='Aditya' && console.log(filteredNames)

  },[])

  
    return (
        <div className= "postUser">
            <div className="postUserWrapper">
                <form onSubmit={submitHandler}>

                <div className="postUserTop">
                    <div className="postUserTopLeft">
                        <span>Name: </span>
                        <span>{post.name}</span>
                       
                    </div>
                    <div className="postUserTopRight">
                        <span>Email:</span>
                        <span>{post.email}</span>
                    </div>
                </div>
                <div className="postUserCenter">
                    <div className="postUserCenterLeft">
                        <span>Balance: </span>
                        <span>{post.balance}</span>
                    </div>
                    <div className="postUserCenterRight">
                        <span>Transfer Money</span>
                        <button type = "submit" id = {post._id} >Send</button>
                    </div>
                </div>
                <div className="postUserBottom">
                    <div className="postUserBottomLeft">
                        <span>To: </span>
                        <select className = "select" id ="clientList" onChange={(e)=> setClientName(e.target.value)} >
                        <option value="" selected disabled hidden>Choose here</option>
                        
                            {names.map((p)=> 
                                
                                (p.name!==post.name && <option key = {p._id} value ={p.name} className = "option">{p.name}</option>) 
                            )}
                            
                        </select>
                    </div>
                    <div className="postUserBottomRight">
                        <span>Amount</span>
                        <input type="number" required name = "amount" id ="amount"
                        value ={money}
                        onChange = {(e)=> setAmount(e.target.value)}  />
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default PostUser
