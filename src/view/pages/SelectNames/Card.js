import React from 'react';
import './SelectNames.css';

function Card (props){
    return(
        <div className='nameSelect' >
        <div>{props.name.name}</div>
        <div />
        <div />
        <div>
            <i className="material-icons">
                check_circle
            </i>
        </div>
    </div>
    )
}

export default Card;