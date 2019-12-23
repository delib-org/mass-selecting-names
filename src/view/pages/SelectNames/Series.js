import React, {useState} from 'react';
import './SelectNames.css';

//component
import Card from './Card';


function Series(props) {
   
    

    return (
        <div className={props.series[0].isNew ? 'namesSelectSeries newSeries' : 'namesSelectSeries'}>

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
                            getRandomNames={props.getRandomNames}
                           
                        />
                    )
                })
            }
        </div>
    )
}
export default Series;