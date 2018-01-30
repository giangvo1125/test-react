import * as types from '../constants'
import _ from 'lodash'
const initState = {
	listItem: [],
}

function demo(state = initState, action) {
	switch(action.type) {
		case types.ADD_NEW_ITEM:
			return {...state, ...action.payload}
		case types.REMOVE_ITEM:
			return {...state, ...action.payload}
		default:
			return state;

	}
	return state;
}

module.exports = demo;
