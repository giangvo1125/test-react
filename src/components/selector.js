import { createSelector } from 'reselect'

const userListSelector = (state) => state.users.list

const conditionUserNameSelector = (state) => state.users.conditionUserName

export const getTopUsers = createSelector (
	userListSelector, 
	conditionUserNameSelector, 
	(list_user, condition) => {
		let selector = []
		if(Helper.checkArray(list_user)) {
			selector = list_user
		}
		return selector;
	}
)