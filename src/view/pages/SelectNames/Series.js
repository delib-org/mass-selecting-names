import React from 'react';
import './SelectNames.css';

//component
import Card from './Card';

function Series(props) {
    return (
        <div className='namesSelect'>
            {
                props.series.series.map((name, index) => {
                    console.dir(name)
                    return (
                        <Card key={index} name={name} />
                    )
                })
            }
        </div>
    )
}
export default Series;