import React from 'react';
import './SelectNames.css';

//component
import Card from './Card';


function Series(props) {
    console.log(props.series.series)
   
    return (
        <div className='namesSelect'>
            {
                props.series.series.map((name, index) => {
                    console.dir(name)
                    return (
                        <Card key={index} number={index} name={name} names={props.series.series} getRandomNames={props.getRandomNames} />
                    )
                })
            }
        </div>
    )
}
export default Series;