import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header> 
            <ul className="line">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/todo-insert">TodoInset</Link>
                </li>
                <li>
                    <Link to="/todo-list">TodoList</Link>
                </li>
                <li>
                    <Link to="/git-info">Github</Link>
                </li>
                <li>
                    <Link to="/tour-plan">tour</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
