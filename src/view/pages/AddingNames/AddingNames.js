import React, { useState } from 'react';
import './AddingNames.css';

//control
import DB from '../../../control/firebase';
import { simpleName } from '../../../control/general';


let foundNames = new Set();
let ref = DB.collection('groups').doc('0nWDzSq0oFoqBXTQJJ6w')
    .collection('questions').doc('AhNnQ5GMhN3xMCFYwQp9')
    .collection('subQuestions').doc('79awrIGoQqrJVmo7p0LO')

function AddingNames(props) {

    const [names, setNames] = useState([]);

    

    function addName(e) {
        e.preventDefault();
        const name = e.target.elements.newname.value;
        const searchString = simpleName(name);

        if (!props.userName) {
            var userName = prompt('אנא ציינו את שמכם  כדי נידע מי הציע')
            props.setUserName(userName);
        }

        //check if the name allready in database
        if(names.includes(name)){
            console.log('all ready here!!!!!!!');
            return;
        }

        e.target.elements.newname.value = '';


        ref.collection('options').add({
            userName: userName || props.userName,
            name,
            searchString,
            time: new Date().getTime(),
            random: Math.random()*100
        }).then(doc=>{
            alert('השם שרשמתם הוסף בהצלחה')
        }).catch(err=>{
            alert(err.message)
        })
    }

    function searchName(e) {
        let name = e.target.value;


        if (name.length > 2) {
            let shortName = simpleName(name);

            let searchConstrain = searchTermStartEnd(shortName);
            console.dir(searchConstrain)
            ref.collection('options').where("searchString", "==", shortName)
                .where("searchString", ">=", searchConstrain.start)
                .where("searchString", "<=", searchConstrain.end)
                .limit(6)
                .get()
                .then(namesDB => {

                    namesDB.forEach(nameDB => {
                        console.log(nameDB.data())
                        foundNames.add(nameDB.data().name);
                        let tempNames = [...foundNames];
                        console.dir(tempNames)
                        setNames(tempNames.slice(-5))
                    })
                })
        }
    }

    return (
        <div className='page'>
            <div className='addMessage'>
                אנא הוסיפו שמות חדשים לשכונות הקרוואנים
            </div>
            <div className='bottomBox'>
                <div className='foundNames'>
                    {names.length > 0 ? <div>שמות דומים</div> : <div />}
                    {
                        names.map((nameElm, index) => {
                            return (<div className='foundName' key={index}>{nameElm}</div>)
                        })
                    }
                </div>
                <form autoComplete="off" onSubmit={addName}>

                    <input type='text' name='newname' required placeholder='הוסיפו שם חדש' onKeyUp={searchName} />
                    <input type='submit' value='הוספה' />
                </form>
            </div>
        </div>
    )
}

export default AddingNames;

function searchTermStartEnd(name) {
    let lastLetter = name.slice(-1);
    lastLetter = nextChar(lastLetter);
    let nameUp = name.slice(0, -1) + lastLetter;
    return { start: name, end: nameUp };
}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}