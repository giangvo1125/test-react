import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import userAction from '../actions/user_action'

import { getTopUsers } from './selector'

class ContentComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentWillMount() {
		// this.props.getListUser()
		this.props.getDetailUserForCondition()
	}
	componentDidMount() {
	}
	_onViewDetail(username) {
		this.context.router.push(`/detail/${username}`)
	}
	render() {
		let { list_user } = this.props;
		var list = list_user.map((item, index) => {
			return (
				<a 
					key={`user-${item.login}-${index}`}
	        		className="btn btn-primary"  
	        		role="button"
	        		onClick={this._onViewDetail.bind(this, item.login)}>
	        		{item.login}
	        	</a>
			)
		})
		return (
			<div className="jumbotron">
		    	<h1>Top 5 GitHub Users</h1>
		        <p>Tab the username to see more information</p>
		        <p>
		        	{list}
		        </p>
      		</div>
		)
	}
}

ContentComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		list_user: getTopUsers(state), 
	}
}

export default connect(mapStateToProps, userAction)(ContentComponent)