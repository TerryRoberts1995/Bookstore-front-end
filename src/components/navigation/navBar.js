import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
    constructor() {
        super();
    }


    render() {
        return <div className='nav-container'>
            <div className="nav-links-container">
                <div className = "nav-link">
                    <div className='nav-btns'><NavLink exact to="/" activeClassName='nav-active'>All Books</NavLink></div>
                </div>

                <div className = "nav-link">
                    <div className='nav-btns'><NavLink to="/add" activeClassName='nav-active'>Add a Book</NavLink></div>
                </div>
            </div> 
        </div>
    }
}