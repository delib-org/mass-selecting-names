import React,{useEffect, useState} from 'react';
import './SelectNames.css';

import DB from '../../../control/firebase';

let ref = DB.collection('groups').doc('0nWDzSq0oFoqBXTQJJ6w')
    .collection('questions').doc('AhNnQ5GMhN3xMCFYwQp9')
    .collection('subQuestions').doc('79awrIGoQqrJVmo7p0LO')

function SelectNames(props){

    const [names, setNames] = useState([])

    function getRandomNames(e){
        console.log('ff')
        let maxNumber;
        let resultsNumber = 3
        ref.collection('maxNumber').doc('maxNumber').get().then(numberDB=>{
            maxNumber = numberDB.data().maxNumber || 0;
            console.log(maxNumber)
            let randomNames = new Set();
            let i = 0;
            while(randomNames.size <= resultsNumber && i<20){
                console.log(randomNames.size,i)
                randomNames.add(Math.ceil(Math.random()*maxNumber))
                i++
            }
            let rndNumbers = [...randomNames];
            let namesArr = []
            console.log(rndNumbers)
            rndNumbers.forEach(rndNumber=>{
                ref.collection('options').where('number', '==', rndNumber).limit(1).get().then(namesDB=>{
                    namesDB.forEach(nameDB=>{
                        namesArr.push(nameDB.data())
                        console.log(namesArr)
                        if(namesArr.length == resultsNumber+1){
                            setNames(namesArr)
                        }
                    })
                    
                })

            })
            
        })
    }

    return(
        <div className='page'>
            <div className='buttons' onClick={getRandomNames} >הצג עוד שמות</div>
            <div className='namesSelect'>
            {
                names.map((name,index)=>{
                    return(<div className='nameSelect' key={index}>{name.name}</div>)
                })
            }
            </div>
        </div>
    )
}

export default SelectNames;