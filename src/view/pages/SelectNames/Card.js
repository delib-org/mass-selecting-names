import React, {useState} from 'react';
import './SelectNames.css';
import DB from '../../../control/firebase';


function Card(props) {

    const [selected, setSelected] = useState(false);

    function selectName() {

        // setSelected(true)
        
        const selectedNames = { selected: undefined, unselected: undefined };
        
        let names = [...props.names];
        
        
        //change to who is slelected
        selectedNames.selected = props.name;
        names[props.seriesIndex][0].isNew = false;
         names[props.seriesIndex][1].isNew = false;
        
        if (props.number === 0) {           
            names[props.seriesIndex][0].selected = true
            names[props.seriesIndex][1].selected = false

            selectedNames.unselected = props.couple[1]
            
        } else {           
             names[props.seriesIndex][1].selected = true
            names[props.seriesIndex][0].selected = false
            
            selectedNames.unselected = props.couple[0]
        }

        props.setNames(names);

       

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
                props.getRandomNames();

            })
	}

	return (
		<div className={props.name.isNew?"new nameSelect":'nameSelect'} onClick={selectName}>
			<div>{props.name.name}</div>
			<div />
			<div />
			<div>
                {!props.name.selected ? <div /> : <i className="material-icons">check_circle</i>}
			</div>
		</div>
	);
}

export default Card;
