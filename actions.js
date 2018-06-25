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
