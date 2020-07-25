import React, { useContext } from 'react'
import Useritem from './Useritem'
import GithubContext from '../../context/github/githubContext'


function Users(){

    const githubContext=useContext(GithubContext);
    const {users}=githubContext;

    return (
        <div style={userStyle}>
            {users.map(user=>(
                <Useritem key={user.id} user={user}/>
            ))}
            
        </div>
    )
}
    
const userStyle={
    display:"grid",
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:"1rem"
}

export default Users
