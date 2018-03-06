const initState = {
	list: [], 
	data: {}, 
	conditionUserName: ["GrahamCampbell","fabpot","weierophinney","rkh","josh"], 
}

function writeBlog(state = initState, action) {
	switch(action.type) {
		case types.GET_LIST_USER:
			return {...state, ...action.payload}
		case types.GET_DETAIL_USER:
			return {...state, ...action.payload}
		case types.CLEAR_DETAIL_DATA:
			return {...state, ...action.payload}
		case types.GET_LIST_USER_WITH_CONDITION:
			return {...state, ...action.payload}
		case types.GET_DETAIL_USER_WITH_CONDITION:
			return {...state, ...action.payload}
		default:
			return state;

	}
	return state;
}

module.exports = writeBlog;
