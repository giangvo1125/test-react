import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './header/header_page'
import Body from './body/body_page'
import Footer from './footer/footer_page'
class ContentComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentDidMount() {
	}
	render() {
		return (
			<div>
				<Header/>

		        <Body/>

		        <Footer/>
			</div>
		)
	}
}

ContentComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default (ContentComponent)