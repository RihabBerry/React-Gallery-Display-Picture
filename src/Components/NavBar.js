import { Component } from "react";
import Search from "./Search";
import { NavLink } from 'react-router-dom'


class NavBar extends Component
{
    render()
    {

        return (<header>

            <Search performSearch={this.props.performSearch} />
            <nav className="main-nav">
                <ul>
                    <li><NavLink to='/cats'>Cats</NavLink></li>
                    <li><NavLink to='/dogs'>Dogs</NavLink></li>
                    <li><NavLink to='/birds'>Birds</NavLink></li>
                </ul>
            </nav>
        </header>)
    }



}
export default NavBar;