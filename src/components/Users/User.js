import React, { useEffect, Fragment,useContext } from 'react'
import {Link} from "react-router-dom"
import Repos from "../repos/Repos"
import GithubContext from '../../context/github/githubContext'

const User =({match})=> {
    const githubContext= useContext(GithubContext);
    const {user ,repos}=githubContext;
    useEffect(() => {
        githubContext.getUser(match.params.login);
        githubContext.getUserRepos(match.params.login);
        //eslint-disable-next-line
    },[]);
    
    
        const {
            name,avatar_url,location,bio,blog,login,company,html_url,followers,following,public_repos,hireable,public_gists}

        =user;
        return (
            <Fragment>
                <Link to='/' className="btn btn-light">
                    Back to Search
                </Link>
                Hireable:{' '}
                {hireable?<span>Yes</span>:<span>No</span>}
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} alt="img" className="round-img" style={{width:"150px"}}/>
                        <h1>{name}</h1>
                         <p>Location:{location}</p>
                    </div>
                    <div>
                        {bio&& <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                            </Fragment>
                        }
                        <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                        <ul>
                            <li>
                                {login && <Fragment>
                                <strong>Username:</strong>{login}
                                    </Fragment>}
                            </li>
                            <li>
                                {blog && <Fragment>
                                <strong>Blog:</strong>{blog}
                                    </Fragment>}
                            </li>
                            <li>
                                {company && <Fragment>
                                <strong>Company:</strong>{company}
                                    </Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers:{followers}</div>
                    <div className="badge badge-success">Following:{following}</div>
                    <div className="badge badge-light">Public Repos:{public_repos}</div>
                    <div className="badge badge-dark">Public Gists:{public_gists}</div>
                </div>
                <Repos repos={repos}/>
            </Fragment>
        )
    
}

export default User
