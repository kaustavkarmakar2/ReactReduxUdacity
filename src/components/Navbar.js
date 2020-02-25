
import React , { Component}  from 'react';


class Navbar extends Component {

    constructor(props){
       super(props);
       this.state = {
           name:'Would You Rather Project'
       }
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <h1 className="navbar">Would You Rather Project</h1>
                </nav>
            </div>
        );
    }
}

export default Navbar;