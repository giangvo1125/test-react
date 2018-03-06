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
		var { data } = response || []
		dispatch({
			type: types.GET_DETAIL_USER, 
			payload: {data: data}
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
	clearDetail
}