import React from 'react';
import './SelectNames.css';
import DB from '../../../control/firebase';


function Card(props) {    
    console.dir(props)
    function selectName(name, number) {
      

        let names = [...props.names];
        // setSelected(true)
        names[props.seriesIndex][number].selected = true;

        

        //remove new form series
        names[props.seriesIndex].map((element, index) => {
           return props.names[props.seriesIndex][index].isNew = false;
        })
        
        //set unselected
        let unselected = []
        names[props.seriesIndex].map((nameObj, index) => {
            if (index !== number) {
                unselected.push(nameObj)
            }
            return true;
        })

        props.setNames(names);
        
        const selectedNames = { selected: [names[props.seriesIndex][number]], unselected: unselected };

        // props.setNames(names);       

        DB.collection('groups')
            .doc('0nWDzSq0oFoqBXTQJJ6w')
            .collection('questions')
            .doc('AhNnQ5GMhN3xMCFYwQp9')
            .collection('subQuestions')
            .doc('79awrIGoQqrJVmo7p0LO')
            .collection('selections')
            .add(selectedNames)
            .then(doc => {
                console.log('update to db', doc.id);
                props.getRnadomNamesFromDB();

            })
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
