import React, { useState, useEffect } from 'react';
import './SelectNames.css';

//components
import Series from './Series';
import Spinner from '../../components/nav/Spinner';

//control
import DB from '../../../control/firebase';
import {getRandomNames} from '../../../control/general';

function SelectNames(props) {
	const [nameSelections, setNameSelections] = useState([]);
	const [isSpinner, setIsSpinner] = useState(false);
	const [isSeriesNew, setIsSeriesNew] = useState(true);



	


	useEffect(() => {
		console.log('useEffect....')
		getRandomNames2(setIsSpinner, nameSelections, setNameSelections,setIsSeriesNew)
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

function getRandomNames2(setIsSpinner,nameSelections, setNameSelections,setIsSeriesNew) {
	console.log('getRandomNames')
	setIsSpinner(true);

	DB.collection('groups')
		.doc('0nWDzSq0oFoqBXTQJJ6w')
		.collection('questions')
		.doc('AhNnQ5GMhN3xMCFYwQp9')
		.collection('subQuestions')
		.doc('79awrIGoQqrJVmo7p0LO')
		.collection('options')
		.orderBy('averageSelections', 'desc')
		.get()
		.then(namesDB => {
			let namesTmpArr = []
			namesDB.forEach(nameDB => {
				let nameTmpObj = nameDB.data();
				nameTmpObj.isNew = true;
				namesTmpArr.push(nameTmpObj);
			});
			console.log(namesTmpArr);
			let tempRandNames = getRandomNames(namesTmpArr, 6);
			console.log(tempRandNames);
			setIsSpinner(false);
			setNameSelections([tempRandNames, ...nameSelections]);

			setIsSeriesNew(true)
		})




};
