import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
	type: ADD_COMMENT,
	id: 1,
	text: 'My first comment!' 
}

{
	type: EDIT_COMMENT,
	id: 2,
	text: 'Edit text'
}

{
	type: REMOVE_COMMENT,
	id: 19,
}

{
	type: THUMB_UP_COMMENT,
	id: 13,
	text: 'Add like'
}

{
	type: THUMB_DOWN_COMMENT,
	id: 14,
	text: 'Add unlike'
}

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
        id: uuid.v4()
	}
}

function editComment(text) {
	return {
		type: EDIT_COMMENT,
		text,
        id: uuid.v4()
	}
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id
	}
}

function thumbUpComment(text) {
	return {
		type: THUMB_UP_COMMENT,
		text,
		id: uuid.v4()
	}
}

function thumbDownComment(text) {
	return {
		type: THUMB_DOWN_COMMENT,
		text,
		id: uuid.v4()
	}
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = text => dispatch(editComment(text)); 
const boundRemoveComment = text => dispatch(removeComment(text));
const boundThumbUpComment = text => dispatch(thumbUpComment(text));
const boundThumbDownComment = text => dispatch(thumbDownComment(text));

boundAddComment('New comment!');