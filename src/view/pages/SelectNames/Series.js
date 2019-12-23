import React from 'react';
import './SelectNames.css';

//component
import Card from './Card';


function Series(props) {
    console.dir(props)
    return (
        <div className='namesSelectSeries'>

            {
                props.series.map((name, index) => {

                    return (
                        <Card
                            key={index}
                            number={index}
                            seriesIndex={props.seriesIndex}
                            name={name} names={props.names}
                            setNames={props.setNames}
                            couple={props.series}
                            getRandomNames={props.getRandomNames} />
                    )
                })
            }
        </div>
    )
}
export default Series;