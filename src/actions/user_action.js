const getListUser = () => (dispatch) => {
	axios.get('https://api.github.com/users')
	.then((response) => {
		var { data } = response || []
		dispatch({
			type: types.GET_LIST_USER, 
			payload: {list: data}
		})
	}, (err) => {
		console.log('err ',err)
	})
}

const getDetailUser = (username) => (dispatch) => {
	axios.get(`https://api.github.com/users/${username}`)
	.then((response) => {
		var { data } = response || {}
		dispatch({
			type: types.GET_DETAIL_USER, 
			payload: {data: data}
		})
	}, (err) => {
		console.log('err ',err)
	})
} 

const getDetailUserForCondition = () => (dispatch, getState) => {
	let {conditionUserName} = getState().users
	const makePromise = (name) => {
		var p = new Promise((a, b) => {
			axios.get(`https://api.github.com/users/${name}`)
			.then((response) => {
				var { data } = response || {}
				a(data)
			}, (err) => {
				b(err)
			})
		})
		return p;
	}
	let arr_promise = []
	for(var i = 0; i < conditionUserName.length; i++) {
		arr_promise.push(makePromise(conditionUserName[i]))
	}
	Promise.all(arr_promise)
	.then((response) => {
		dispatch({
			type: types.GET_LIST_USER_WITH_CONDITION, 
			payload: {list: response}
		})
	}, (err) => {
		console.log('err ',err)
	})
} 

const clearDetail = () => (dispatch) => {
	dispatch({
		type: types.CLEAR_DETAIL_DATA, 
		payload: {data: {}}
	})
} 

module.exports = {
	getListUser, 
	getDetailUser, 
	clearDetail, 
	getDetailUserForCondition, 
}