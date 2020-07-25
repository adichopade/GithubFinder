/* eslint-disable no-template-curly-in-string */
import React, { Fragment,useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Users from "./components/Users/Users";
import User from "./components/Users/User"
import Search from './components/Users/Search';
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import GithubState from './context/github/GithubState'



const App =()=>{

  const [alert ,setalert]=useState(null);



  

  // async componentDidMount(){
  //   this.setState({loading:true});
  //   const res=await Axios.get('https://api.github.com/users');
  //   this.setState({users:res.data,loading:false})
  // }

  
  const setAlert=(msg,type)=>{
    setalert({msg,type})
    setTimeout(()=>setalert(null),5000)
  }

  
  
  


  
    return(
      <GithubState>
      <Router>
    <div>
      <Navbar/>
      <div className="container">
        <Alert alert={alert}/>
        <Switch>
          <Route exact path='/' render={props=>(
            <Fragment>
              <Search  
              setAlert={setAlert}
              />
              <Users />

            </Fragment>
          )}>
          </Route>
          <Route exact path='/about' component={About}/>
          <Route exact path='/user/:login' component={User}/>
        </Switch>
        
      </div>
      
    </div>
    </Router>
    </GithubState>) 
}

export default App;


