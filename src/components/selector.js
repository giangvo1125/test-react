import { createSelector } from 'reselect'

const userListSelector = (state) => state.users.list

export const getTopUsers = createSelector (
	userListSelector, 
	(list_user) => {
		let selector = []
		if(Helper.checkArray(list_user)) {
			for(let i = 0; i < 5; i++) {
				selector.push(list_user[i])
			}
		}
		return selector;
	}
)