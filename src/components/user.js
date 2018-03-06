import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import userAction from '../actions/user_action'

class UserComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentWillMount() {
		let {
			params: {
				username
			}
		} = this.props
		this.props.getDetailUser(username)
	}
	componentDidMount() {
	}
	_onBackListUser() {
		this.props.clearDetail();
		this.context.router.push('/')
	}
	render() {
		let { data } = this.props;
		return(
			<div>
				<div>
					<a className="back-btn" onClick={this._onBackListUser.bind(this)}>Back</a>
				</div>
				<ul className="list">
					<li className="">
						<a>
							<span className="avatar"><img src={data.avatar_url}/></span>
							<span className="list-content">
								<span className="list-name">{data.name}</span>
								<span className="list-address">{data.location}</span>
							</span>
						</a>
					</li>
				</ul>
			</div>
		)
	}
}

UserComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		data: state.users.data 
	}
}

export default connect(mapStateToProps, userAction)(UserComponent)