import React from 'react';
import './SelectNames.css';
import DB from '../../../control/firebase';

import {getRandomNames} from '../../../control/general';


function Card(props) {    
   
    function selectName(name, number) {
       

        let serieses = [...props.serieses];
        console.log(serieses)
        // setSelected(true)
        serieses[props.seriesIndex][number].selected = true;

        

        //remove new form series
        serieses[props.seriesIndex].map((element, index) => {
           return props.serieses[props.seriesIndex][index].isNew = false;
        })
        
        //set unselected
        let unselected = []
        serieses[props.seriesIndex].map((nameObj, index) => {
            if (index !== number) {
                unselected.push(nameObj)
            }
            return true;
        })

        // props.setSerieses(serieses);
        
        const selectedNames = { selected: [serieses[props.seriesIndex][number]], unselected: unselected };
        console.log(selectedNames)

        props.setSerieses([getRandomNames(props.names, 6), ...props.serieses])
        
        
	}

	return (
        <div className={props.name.isNew?"new nameSelect":'nameSelect'} onClick={(e)=>{
            if(props.seriesIndex === 0){selectName(props.name.id, props.number)}
            }}>
			<div>{props.name.name}</div>			
			<div>
                {!props.name.selected ? <div /> : <i className="material-icons">check_circle</i>}
			</div>
		</div>
	);
}

export default Card;
