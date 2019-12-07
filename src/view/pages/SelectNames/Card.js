import React, {useState} from 'react';
import './SelectNames.css';
import DB from '../../../control/firebase';


function Card(props) {

    const [selected, setSelected] = useState(false);

    function setName() {

        setSelected(true)
        console.log('seelcted')
        const selectedNames = { selected: undefined, unselected: undefined };
      
        
        //change to who is slelected
        selectedNames.selected = props.name;
        
        if (props.number === 0) {           
            selectedNames.unselected = props.names[1]
        } else {           
            selectedNames.unselected = props.names[0]
        }

       

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
		<div className="nameSelect" onClick={setName}>
			<div>{props.name.name}</div>
			<div />
			<div />
			<div>
                {!selected ? <div /> : <i className="material-icons">check_circle</i>}
			</div>
		</div>
	);
}

export default Card;
