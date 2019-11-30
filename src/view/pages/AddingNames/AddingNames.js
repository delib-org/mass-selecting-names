import React from 'react';
import './AddingNames.css';

//control
import DB from '../../../control/firebase';
import {simpleName} from '../../../control/general';

function AddingNames(props){

    function addName(e){
        e.preventDefault();
        const name = e.target.elements.newname.value;
        const searchString = simpleName(name);
        e.target.elements.newname.value = '';

        

        console.log(name, searchString)

        DB.collection('groups').doc('0nWDzSq0oFoqBXTQJJ6w')
        .collection('questions').doc('AhNnQ5GMhN3xMCFYwQp9')
        .collection('subQuestions').doc('79awrIGoQqrJVmo7p0LO')
        .collection('options').add({
            name,
            searchString,
            time: new Date().getTime()
        }).then(docDB=>{
            console.log('docment added')
        })
    }

    return(
        <div className='page'> 
            <div className='addMessage'>
                אנא הוסיפו שמות חדשים לשכונות הקרוואנים
            </div>
            <form onSubmit={addName}>
                <input type='text' name='newname' required placeholder='הוסיפו שם חדש' />
                <input type='submit' value='הוספה' />
            </form>
        </div>
    )
}

export default AddingNames;