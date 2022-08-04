import React from "react";
import Home from "./Home";
import ToDoPages from "./ToDoPages";

import { BrowserRouter, Switch, Route } from 'react-router-dom';


// landing page 
class App extends React.Component {
    render(){
        return(
            <>
                <BrowserRouter>
                    <Switch>
                        <Route path="/todo/" component={ToDoPages}/>            
                        <Route path="/" component={Home}/> 
                    </Switch>
                </BrowserRouter>  
            </>   
        )
    }
}

export default App;