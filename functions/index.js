const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

exports.addSelected = functions.firestore
	.document('/groups/{groupId}/questions/{questionId}/subQuestions/{subQuestionId}/selections/{selectionId}')
	.onCreate((snap, context) => {
		// Grab the current value of what was written to the Realtime Database.

		let selectedId = snap.data().selected.id;
		let unSelectedId = snap.data().unselected.id;

		const optionRef = db
			.collection('groups')
			.doc(context.params.groupId)
			.collection('questions')
			.doc(context.params.questionId)
			.collection('subQuestions')
			.doc(context.params.subQuestionId)
			.collection('options');

		const optionSelectedRef = optionRef.doc(selectedId);
		const optionUnselectedRef = optionRef.doc(unSelectedId);

		//selected option
		return db.runTransaction((transaction) => {
			return transaction.get(optionSelectedRef).then((optionDoc) => {
				let totalSelectionsVotes = optionDoc.data().totalSelectionsVotes || 1;
				let totalSelections = optionDoc.data().totalSelections || 0;
				totalSelectionsVotes++;
				totalSelections++;
				let averageSelections = totalSelections / totalSelectionsVotes;

				// setUnselected();

				return transaction.update(optionSelectedRef, {
					totalSelectionsVotes,
					totalSelections,
					averageSelections
				});
			});
		});
	});

exports.addUnSelected = functions.firestore
	.document('/groups/{groupId}/questions/{questionId}/subQuestions/{subQuestionId}/selections/{selectionId}')
	.onCreate((snap, context) => {
		// Grab the current value of what was written to the Realtime Database.

		let unSelectedId = snap.data().unselected.id;

		const optionRef = db
			.collection('groups')
			.doc(context.params.groupId)
			.collection('questions')
			.doc(context.params.questionId)
			.collection('subQuestions')
			.doc(context.params.subQuestionId)
			.collection('options');

		const optionUnselectedRef = optionRef.doc(unSelectedId);

		//selected option
		return db.runTransaction((transaction) => {
			return transaction.get(optionUnselectedRef).then((optionDoc) => {
				let totalSelectionsVotes = optionDoc.data().totalSelectionsVotes || 1;
				let totalSelections = optionDoc.data().totalSelections || 0;
				totalSelectionsVotes++;

				let averageSelections = totalSelections / totalSelectionsVotes;

				// setUnselected();

				return transaction.update(optionUnselectedRef, {
					totalSelectionsVotes,
					totalSelections,
					averageSelections
				});
			});
		});
	});
