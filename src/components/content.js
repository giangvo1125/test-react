import React, { Component } from 'react'
import { connect } from 'react-redux'

class ContentComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentDidMount() {
		this.context.router.push('/home')
	}
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

ContentComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default (ContentComponent)