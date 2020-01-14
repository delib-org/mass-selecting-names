

import React from 'react';
import './Nav.css';

import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function Nav(props) {
    let { pathname } = useLocation();
   
    return (
        <nav>

            <a href='http://delib.org/he' className='navButton' target='_blank' rel="noopener noreferrer">Delib.org</a>

            <Link to="/add">
                <div className={(pathname === '/add' || pathname === '/') ? 'navButton navButtonSelected' : 'navButton'}>

                    <i className="material-icons">
                        add_circle
                    </i>
                    <div className='navText'>הוספת שמות</div>
                </div>
            </Link>
            <Link to="/vote">
                <div className={(pathname === '/vote') ? 'navButton navButtonSelected' : 'navButton'}>

                    <i className="material-icons">
                        check_circle
                    </i>
                    <div className='navText'>בחירת שמות</div>
                </div>
            </Link>
            <Link to="/results">
                <div className={(pathname === '/results') ? 'navButton navButtonSelected' : 'navButton'}>
                    <i className="material-icons">
                        donut_small
                    </i>
                    <div className='navText'>תוצאות</div>
                </div>
            </Link>

        </nav>
    )
}

export default Nav;