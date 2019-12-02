import React, { useEffect, useState } from 'react';
import './SelectNames.css';

//components
import Series from './Series';

//control
import DB from '../../../control/firebase';

let ref = DB.collection('groups').doc('0nWDzSq0oFoqBXTQJJ6w')
    .collection('questions').doc('AhNnQ5GMhN3xMCFYwQp9')
    .collection('subQuestions').doc('79awrIGoQqrJVmo7p0LO')
let namesSeriess = [];
function SelectNames(props) {

    const [names, setNames] = useState([])

    function getRandomNames(e) {
        console.log('ff')
        let maxNumber;
        let resultsNumber = 2
        ref.collection('maxNumber').doc('maxNumber').get().then(numberDB => {
            maxNumber = numberDB.data().maxNumber || 0;
            console.log(maxNumber)
            let randomNames = new Set();
            let i = 0;
            while (randomNames.size < resultsNumber && i < 20) {
                console.log(randomNames.size, i)
                randomNames.add(Math.ceil(Math.random() * maxNumber))
                i++
            }
            let rndNumbers = [...randomNames];
            let namesArr = []
            console.log(rndNumbers)
            rndNumbers.forEach(rndNumber => {
                ref.collection('options').where('number', '==', rndNumber).limit(1).get().then(namesDB => {
                    namesDB.forEach(nameDB => {
                        let tempNameObj = nameDB.data();
                        tempNameObj.id = nameDB.id;
                        namesArr.push(tempNameObj)
                        console.log(namesArr)
                        if (namesArr.length === resultsNumber) {
                            let namesSeries ={ series: namesArr, selected: [], unSelected: [] };
                            console.dir(namesSeries)
                            setNames([namesSeries, ...names])
                        }
                    })

                })

            })

        })
    }



    return (
        <div className='page'>
            <div className='buttons' onClick={getRandomNames} >הצג עוד שמות</div>
            <div className='questionTitle'>איזה מהשמות עדיף?</div>
            <div className=''>
                {
                    names.map((series, index)=>{
                        console.log('index', index);
                        console.dir(names)
                        return(<Series series={series} key={index}/>)
                    })
                }

            </div>
        </div>
    )
}

export default SelectNames;