import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Navbar extends Component {

  static defaultProps={
    title:"Github-Finder"
  }



  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>{this.props.title}</h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>

      </nav>
    )
  }
}

export default Navbar
