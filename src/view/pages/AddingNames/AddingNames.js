import React from 'react';
import './AddingNames.css';

import DB from '../../../control/firebase';

function AddingNames(props){

    function addName(e){
        e.preventDefault();
        const name = e.target.elements.newname.value;
        e.target.elements.newname.value = '';

        let simpleName = name.replace(/ו/g,'');
        simpleName = simpleName.replace(/ה/g,'');
        simpleName = simpleName.replace(/י/g,'');
        simpleName = simpleName.replace(/א/g,'');
        simpleName = simpleName.replace(/ /g,'');

        console.log(name, simpleName)

        // DB.collection('groups').doc('0nWDzSq0oFoqBXTQJJ6w')
        // .collection('questions').doc('AhNnQ5GMhN3xMCFYwQp9')
        // .collection('subQuestions').doc('79awrIGoQqrJVmo7p0LO')
        // .collection('options').add({
        //     name,
        //     time: new Date().getTime()
        // }).then(docDB=>{
        //     console.log('docment added')
        // })
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