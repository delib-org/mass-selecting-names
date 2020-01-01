import React, { useState, useEffect } from 'react';
import './SelectNames.css';

//components
import Series from './Series';
import Spinner from '../../components/nav/Spinner';

//control
import DB from '../../../control/firebase';

function SelectNames(props) {
	const [names, setNames] = useState([]);
	const [isSpinner, setIsSpinner] = useState(false);
	const [isSeriesNew, setIsSeriesNew] = useState(true);



	function getRandomNames() {
		setIsSpinner(true);


		//maxNumber is the number of options to select from

		//got number of options from app

		let maxNumber = props.names.length;
		if (maxNumber === 0) {
			setTimeout(() => {
				getRandomNames();
				console.log('waiting', props.x)
			}, 1000);
		} else {
			console.log('maxNumber', maxNumber)
			let resultsNumber = 6;
			let ref = DB.collection('groups')
				.doc('0nWDzSq0oFoqBXTQJJ6w')
				.collection('questions')
				.doc('AhNnQ5GMhN3xMCFYwQp9')
				.collection('subQuestions')
				.doc('79awrIGoQqrJVmo7p0LO');


			console.log('maxNumber', maxNumber)

			let randomNames = new Set();
			let i = 0;
			while (randomNames.size < resultsNumber && i < 20) {
				randomNames.add(Math.floor(Math.random() * maxNumber));
				i++;
			}
			let rndNumbers = [...randomNames];
			console.dir(rndNumbers)
			let namesArr = [];

			rndNumbers.forEach((rndNumber) => {
				ref.collection('options').where('number', '==', rndNumber).limit(1).get().then((namesDB) => {
					namesDB.forEach((nameDB) => {
						let tempNameObj = nameDB.data();
						tempNameObj.id = nameDB.id;
						tempNameObj.isNew = true;
						namesArr.push(tempNameObj);

						//update to dom, after all calls from DB returend
						if (namesArr.length === resultsNumber) {
							setIsSpinner(false);
							setNames([namesArr, ...names]);

							setIsSeriesNew(true)
						}
					});
				});
			});
		}
	}

	useEffect(() => {
		getRandomNames();
		setInterval(() => {
			console.log('x',props.x)
		}, 1000);
	}, []);
	useEffect(()=>{
		console.dir(props.x)
	})

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
								getRandomNames={getRandomNames}
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
}

export default SelectNames;
