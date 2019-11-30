import React, { useEffect } from 'react';
import './AddingNames.css';

//control
import DB from '../../../control/firebase';
import { simpleName } from '../../../control/general';

let lastNumber = 0;
function AddingNames(props) {


    useEffect(() => {
        DB.collection('groups').doc('0nWDzSq0oFoqBXTQJJ6w')
            .collection('questions').doc('AhNnQ5GMhN3xMCFYwQp9')
            .collection('subQuestions').doc('79awrIGoQqrJVmo7p0LO')
            .collection('options').orderBy('time', 'desc').limit(1).onSnapshot(namesDB => {
                namesDB.forEach(nameDB => {
                    console.log('snapshot')
                    console.log(nameDB.data().number);
                    lastNumber = nameDB.data().number || 0;
                })
            })
    }, [])


    function addName(e) {
        e.preventDefault();
        const name = e.target.elements.newname.value;
        const searchString = simpleName(name);

        if (!props.userName) {
            var userName = prompt('אנא ציינו את שמכם  כדי נידע מי הציע')
            props.setUserName(userName);
        }
        e.target.elements.newname.value = '';



        console.log(name, searchString)

        DB.collection('groups').doc('0nWDzSq0oFoqBXTQJJ6w')
            .collection('questions').doc('AhNnQ5GMhN3xMCFYwQp9')
            .collection('subQuestions').doc('79awrIGoQqrJVmo7p0LO')
            .collection('options').add({
                userName: userName || props.userName,
                name,
                searchString,
                time: new Date().getTime(),
                number: lastNumber + 1
            }).then(docDB => {
                DB.collection('groups').doc('0nWDzSq0oFoqBXTQJJ6w')
                    .collection('questions').doc('AhNnQ5GMhN3xMCFYwQp9')
                    .collection('subQuestions').doc('79awrIGoQqrJVmo7p0LO')
                    .collection('maxNumber').doc('maxNumber')
                    .set({ maxNumber: lastNumber+1 })

                alert('השם שרשמתם הוסף בהצלחה, ומחכה לדרוג על ידי תושבים אחרים')
            })
    }

    return (
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