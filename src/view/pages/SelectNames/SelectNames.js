import React, { useState, useEffect } from 'react';
import './SelectNames.css';

//components
import Series from './Series';
import Spinner from '../../components/nav/Spinner';

//control
import DB from '../../../control/firebase';
import { getRandomNames } from '../../../control/general';

function SelectNames(props) {
	const [names, setNames] = useState([]);
	const [isSpinner, setIsSpinner] = useState(false);
	const [isSeriesNew, setIsSeriesNew] = useState(true);
	let numberOfNames = 6;

	useEffect(() => {
		

		getRnadomNamesFromDB()
	}, []);

	return (
		<div className="page">
			<div className="questionTitle">מתוך השמות הללו, איזה שם תעדיפו?</div>

			<div className="">
				{isSpinner ? <Spinner /> : <div />}
				{names.map((series, index) => {
					return (
						<div className="namesSelect" key={index}>
							<Series
								series={series}
								key={index}
								seriesIndex={index}
								getRnadomNamesFromDB={getRnadomNamesFromDB}
								names={names}
								setNames={setNames}
								isSeriesNew={isSeriesNew}
								setIsSeriesNew={setIsSeriesNew}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);


	function getRnadomNamesFromDB() {

		getRandomNames(window.allNames,6);

	
		setIsSpinner(true);
	
		let newNames = new Set();
		let newNamesArr = [];
		let counter = 0;
		
	
		function getName(countUpTo){
			let random = Math.random() * 110;
	
		
			DB.collection('groups')
				.doc('0nWDzSq0oFoqBXTQJJ6w')
				.collection('questions')
				.doc('AhNnQ5GMhN3xMCFYwQp9')
				.collection('subQuestions')
				.doc('79awrIGoQqrJVmo7p0LO')
				.collection('options')
				.orderBy('random', 'desc')
				.where('random', '<=', random)
				.limit(1)
				.get()
				.then(namesDB => {
					counter++;
					
					//if result ok, add to names
					if (!namesDB.empty) {
						namesDB.forEach(nameDB => {
							let previous = newNames.size;
							newNames.add(nameDB.data().random)
						
	
							//if a name was added then add to the array
							if(previous<newNames.size && newNames.size <= numberOfNames){

								 let tempName = nameDB.data();
								tempName.id = nameDB.id;
								tempName.isNew = true;

								newNamesArr.push(tempName)
							
							}
	
							if (newNames.size >= numberOfNames) {
								setIsSpinner(false);
								setNames([newNamesArr,...names]);
								
								return
							} else if(counter === countUpTo){console.log(counter, countUpTo);
								counter = 0;
							
								for (let i = 0; i < numberOfNames; i++) {
									
									getName(numberOfNames);
									
								}
							}
							
						})
					} 
				});
		}
	
		for (let i = 0; i < numberOfNames; i++) {
			getName(numberOfNames);
			
		}
	
		
	}
}

export default SelectNames;




// getName();



	// DB.collection('groups')
	// 	.doc('0nWDzSq0oFoqBXTQJJ6w')
	// 	.collection('questions')
	// 	.doc('AhNnQ5GMhN3xMCFYwQp9')
	// 	.collection('subQuestions')
	// 	.doc('79awrIGoQqrJVmo7p0LO')
	// 	.collection('options')
	// 	.orderBy('averageSelections', 'desc')
	// 	.where('random')
	// 	.get()
	// 	.then(namesDB => {
	// 		let namesTmpArr = []
	// 		namesDB.forEach(nameDB => {
	// 			let nameTmpObj = nameDB.data();
	// 			nameTmpObj.isNew = true;
	// 			nameTmpObj.id = nameDB.id;
	// 			namesTmpArr.push(nameTmpObj);
	// 		});
	// 		console.log(namesTmpArr);
	// 		let tempRandNames = getRandomNames(namesTmpArr, 6);
	// 		console.log(tempRandNames);
	// 		setIsSpinner(false);
	// 		setNames([tempRandNames, ...names]);

	// 		setIsSeriesNew(true)
	// 	})


