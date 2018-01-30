const addNewItem = () => {
	return (dispatch, getState) => {
		let {
			demo: {
				listItem
			}
		} = getState()
		let newListItem = JSON.parse(JSON.stringify(listItem))
		newListItem.push(Math.random());
		dispatch({
			type: types.ADD_NEW_ITEM,
			payload:{ listItem : newListItem }
		})
	}
}

const removeItem = (index) => {
	return (dispatch, getState) => {
		let {
			demo: {
				listItem
			}
		} = getState()
		let newListItem = JSON.parse(JSON.stringify(listItem))
		if(Helper.checkData(newListItem[index])) {
			newListItem.splice(index, 1)
		}
		dispatch({
			type: types.REMOVE_ITEM,
			payload:{ listItem : newListItem }
		})
	}
}

module.exports = {
	addNewItem, 
	removeItem, 
}