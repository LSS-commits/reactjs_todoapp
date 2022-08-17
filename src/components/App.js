import React from 'react';
import Home from './Home';
import ToDoPages from './ToDoPages';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {initialData} from '../shared/Data';

// to set margin bottom on page content on page load
import {changeLayout} from '../shared/Functions';


// landing page 
class App extends React.Component {

    state = {
        tasks: initialData
    }

    render(){
        return(
            <>
                <BrowserRouter>
                    <Switch>
                        <Route path="/todo/" component={ToDoPages} changeLayout={changeLayout()}/>            
                        <Route path="/" component={Home}/> 
                    </Switch>
                </BrowserRouter>  
            </>   
        )
    }
}

export default App;