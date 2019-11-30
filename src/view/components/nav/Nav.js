

import React from 'react';
import './Nav.css';

import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function Nav(props) {
    let { pathname } = useLocation();
    console.log(pathname)
    return (
        <nav>

            <a href='http://delib.org/he' className='navButton' target='_blank' rel="noopener noreferrer">Delib.org</a>

            <Link to="/add">
                <div className={(pathname === '/add') ? 'navButton navButtonSelected' : 'navButton'}>
                    
                    <i className="material-icons">
                        add_circle
                    </i>
                    הוספת שמות
                </div>
            </Link>


            <Link to="/vote">
                <div className={(pathname === '/vote') ? 'navButton navButtonSelected' : 'navButton'}>
                   
                    <i className="material-icons">
                        check_circle
                    </i> 
                    בחירת שמות   
                </div>
            </Link>

        </nav>
    )
}

export default Nav;