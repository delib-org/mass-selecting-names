import React, { useState, useEffect } from 'react';
import './SelectNames.css';

//components
import Series from './Series';
import Spinner from '../../components/nav/Spinner';

//control
import DB from '../../../control/firebase';
import { getRandomNames } from '../../../control/general';

function SelectNames(props) {
	const [nameSelections, setNameSelections] = useState([]);
	const [isSpinner, setIsSpinner] = useState(false);
	const [isSeriesNew, setIsSeriesNew] = useState(true);

	useEffect(() => {
		console.log('useEffect....')

		getRnadomNamesFromDB(6, setIsSpinner, nameSelections, setNameSelections, setIsSeriesNew)
	}, []);

	return (
		<div className="page">
			<div className="questionTitle">מתוך השמות הללו, איזה שם תעדיפו?</div>

			<div className="">
				{isSpinner ? <Spinner /> : <div />}
				{nameSelections.map((series, index) => {
					return (
						<div className="namesSelect" key={index}>
							<Series
								series={series}
								key={index}
								seriesIndex={index}
								getRandomNames={getRandomNames}
								names={nameSelections}
								setNames={setNameSelections}
								isSeriesNew={isSeriesNew}
								setIsSeriesNew={setIsSeriesNew}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default SelectNames;

function getRnadomNamesFromDB(numberOfNames, setIsSpinner, nameSelections, setNameSelections, setIsSeriesNew) {



	console.log('getNamesFromDB')
	setIsSpinner(true);

	let newNames = new Set();
	let newNamesArr = [];
	let counter = 0;
	

	function getName(countUpTo){
		let random = Math.random() * 110;

		console.log(random)
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
				console.log('counter:', counter)
				//if result ok, add to names
				if (!namesDB.empty) {
					namesDB.forEach(nameDB => {
						let previous = newNames.size;
						newNames.add(nameDB.data().random)
						if(previous<newNames.size){
							newNamesArr.push(nameDB.data())
							console.log(newNamesArr)
						}

						if (newNames.size >= numberOfNames) {
							setIsSpinner(false);
							setNameSelections([newNamesArr,...nameSelections]);
							console.dir(nameSelections);
							return
						} else if(counter == countUpTo){
							console.log(counter, countUpTo);
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

	// let previousSize = newNames.size;
	// 				newNames.add(nameDB.data().random)

	// 				//if new name added add to the array
	// 				if (previousSize < newNames.size) {
	// 					newNamesArr.push(nameDB.data())
	// 				}

	// 				console.log(nameDB.data());
	// 				console.dir(newNames)
	// 				console.dir(newNamesArr)

					



}


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
	// 		setNameSelections([tempRandNames, ...nameSelections]);

	// 		setIsSeriesNew(true)
	// 	})


