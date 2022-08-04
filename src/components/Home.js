import React from "react";
// to generate links compatible with React
import { NavLink } from "react-router-dom";

class Home extends React.Component{
    render(){
        return(
            <div id="homePage">
                <p className="lead fs-1">To stay focused, from work to play.</p>
                <NavLink to="/todo/" className="btn get-started" title="Go to list" type="button">Get started</NavLink>
            </div>
        )
    }
}

export default Home;