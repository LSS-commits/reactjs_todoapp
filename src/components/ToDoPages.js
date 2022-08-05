import React from 'react';
import Header from './todo-components/Header';
import Footer from './todo-components/Footer';
import ToDoList from './todo-components/ToDoList';
import AddTask from './todo-components/AddTask'

// to use react router dom v5.3.0 (v6 doesn't work for this tutorial)
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// to import my dynamic data
import {categoryData, taskData} from '../shared/DynamicData';
// to import custom functions
import {changeLayout} from '../shared/Functions';

// to set margin bottom on page content on page load
changeLayout();

class ToDoPages extends React.Component {
    render(){
        return(
            <section id="todo">
                {/* REACT STRICT MODE 18 IS INCOMPATIBLE WITH REACT 5, PB WITH NAVIGATION */}
                {/* <React.StrictMode> */}
                    <BrowserRouter>
                        <Header />
                        <div id="pageContent">
                            <Switch>
                                <Route path="/todo/add-task" render={(props) => <AddTask {...props} titles={categoryData} />}/>
                                {/* <Route path="/add-task" component={AddTask}/> */}
                                {/* /:filter? to display only tasks that match the completed filter (Props > match > params > filter ) after click on button Completed. DOESN'T WORK WITH react-router-dom v6, with v5.3 ok */}
                                <Route path="/todo/:filter?" render={(props) => <ToDoList {...props} tasks={taskData}/>}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </BrowserRouter>
                {/* </React.StrictMode> */}
            </section>   
        )
    }
}

export default ToDoPages;