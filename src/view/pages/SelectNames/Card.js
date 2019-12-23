import React, {useState} from 'react';
import './SelectNames.css';
import DB from '../../../control/firebase';


function Card(props) {    

    const [selected, setSelected] = useState(false);

    function selectName(name, number) {

        // setSelected(true)
        console.log(name, number)
        let names = props.names;

        //remove new
        props.names[props.seriesIndex].map((element, index) => {
            props.names[props.seriesIndex][index].isNew = false;
        })
        


        //set unselected
        let unselected = []
        names[props.seriesIndex].map((nameObj, index) => {
            if (index !== number) {
                unselected.push(nameObj)
            }
        })
        
        const selectedNames = { selected: [names[props.seriesIndex][number]], unselected: unselected };
        
        
        
        console.log(selectedNames)
        
        //change to who is slelected
        // selectedNames.selected = props.name;
        // names[props.seriesIndex][0].isNew = false;
        //  names[props.seriesIndex][1].isNew = false;
        
        // if (props.number === 0) {           
        //     names[props.seriesIndex][0].selected = true
        //     names[props.seriesIndex][1].selected = false

        //     selectedNames.unselected = props.couple[1]
            
        // } else {           
        //      names[props.seriesIndex][1].selected = true
        //     names[props.seriesIndex][0].selected = false
            
        //     selectedNames.unselected = props.couple[0]
        // }

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
