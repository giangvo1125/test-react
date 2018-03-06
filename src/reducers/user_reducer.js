const initState = {
	list: [], 
	data: {}, 
}

function writeBlog(state = initState, action) {
	switch(action.type) {
		case types.GET_LIST_USER:
			return {...state, ...action.payload}
		case types.GET_DETAIL_USER:
			return {...state, ...action.payload}
		case types.CLEAR_DETAIL_DATA:
			return {...state, ...action.payload}
		default:
			return state;

	}
	return state;
}

module.exports = writeBlog;
