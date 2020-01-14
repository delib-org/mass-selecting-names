import React from 'react';
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
                            randNames={props.randNames}
                            setSerieses={props.setSerieses}
                            serieses={props.serieses}
                            series={props.series}
                            name={name}
                            names={props.names}
                            couple={props.series}
                        />
                    )
                })
            }
        </div>
    )
}
export default Series;