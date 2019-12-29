import React from 'react';
import './Results.css';

//control
import DB from '../../../control/firebase';

function Name(props) {
    function deleteOption() {
        console.log(props.name);
        DB.collection('groups')
            .doc('0nWDzSq0oFoqBXTQJJ6w')
            .collection('questions')
            .doc('AhNnQ5GMhN3xMCFYwQp9')
            .collection('subQuestions')
            .doc('79awrIGoQqrJVmo7p0LO')
            .collection('options')
            .doc(props.name.id)
            .delete();

    }
    return (
        <div className='name'>
            <div>{props.name.name}</div>
            <div>ניקוד: {props.name.averageSelections.toFixed(3)}</div>
            <div>ע״י: {props.name.userName}</div>
            <div className='button delete' onClick={deleteOption}>מחיקה</div>
        </div>
    )
}
export default Name;