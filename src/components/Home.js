import React from 'react';
// to display images with webpack, via import statement
import todoLogo from '../assets/todo_logo.png';
import todoImg from '../assets/todo_img.png';
import { IconContext } from 'react-icons';
import { FaDiscord, FaTwitter, FaLinkedin } from 'react-icons/fa';

class Home extends React.Component{
    render(){
        return(
            <div id="homePage">
                <div id="homePageBanner">
                    <img src={todoLogo} alt="todo logo check" id="todoLogo"/>
                    <h1 id="todoTitle">my ToDo App</h1>
                    <img src={todoImg} alt="todo img people" id="todoImg"/>
                </div>
                <div id="homePageCTA">
                    <p className="lead fs-1">To stay focused, from work to play.</p>
                    <a href="/todo/" className="btn get-started" title="Go to list" type="button">Get started</a>
                </div>
                <footer className="fixed-bottom" id="homePageFooter">
                    <IconContext.Provider value={{ className: "homePageFooterIcons", color: "#3d3d3d", size: "20px" }}>
                        <FaDiscord />
                        <FaTwitter />
                        <FaLinkedin />
                    </IconContext.Provider>
                    <p className="small my-2">&copy; 2022 | myToDoApp by L$Dev</p>
                </footer>
            </div>
        )
    }
}

export default Home;