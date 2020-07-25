import React,{useState, useContext} from 'react'
import GithubContext from '../../context/github/githubContext'


const Search =(props)=> {
    const githubContext=useContext(GithubContext);

    const [text,setText]=useState("");

    
    const handleChange=(event)=>{
        
        setText(event.target.value)
        //console.log(this.state.text);

    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(text===''){
            props.setAlert('Please Enter Something','light');
        }
        else{
            githubContext.searchUsers(text);
            setText("");
            
        }
        
    }
    
        return (
            <div>
                <form className="form" onSubmit={handleSubmit}>
                    <input type="text" value={text} name="text" placeholder="Search users.." onChange={handleChange}/>
                    <input type="submit" name="search" className="btn btn-dark btn-block" />
                </form>
                {githubContext.users.length>0&&<button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}
                
            </div> 
        )
    
}


export default Search
