import React, { useState } from 'react';
import './Results.css';

//control
import DB from '../../../control/firebase';

function Name(props) {

    const [showDelete, setShowDelete] = useState(false);

    function deleteOption() {

       
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
            <div>ניקוד: {(props.name.averageSelections*100).toFixed(2)}</div>
            <div>ע״י: {props.name.userName}</div>
            <div className='button delete' onClick={() => { setShowDelete(true) }}>מחיקה</div>
            {showDelete ?
                <div className='confirmDelete_background'>
                    <div className='confirmDelete'>
            <div>האם למחוק את השם ״{props.name.name}"?</div>
                        <div className='buttons_wrapper'>
                            <div className='button warning' onClick={() => { setShowDelete(false); deleteOption()} }>מחיקה</div>
                            <div className='button' onClick={() => { setShowDelete(false) }}>ביטול</div>
                        </div>
                    </div>
                </div>
                :
                <div />
            }
        </div>
    )
}
export default Name;