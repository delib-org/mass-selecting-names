import React from 'react';
import './Results.css';

//component
import Name from './Name';

function Results(props) {
    return(<div className='resultsWrapper'>
        {props.names.map((name, index)=>{
            return(<Name name={name} key={index} />)
        })}
    </div>)
}

export default Results;