import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from './header/header_page'
import Body from './body/body_page'
import Footer from './footer/footer_page'
import WriteBlog from './write_blog/write_blog'

import WriteBlogAction from '../actions/write_blog_action'

class ContentComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentWillMount() {
		this.props.getBlogs()
	}
	componentDidUpdate() {
		if(this.props.isShowWriteBlog == false) {
			this.props.getBlogs()
		}
	}
	componentDidMount() {
	}
	render() {
		let {isShowWriteBlog} = this.props;
		return (
			<div>
				<Header/>
				{
					isShowWriteBlog == false ? 
		        	<Body/> : <WriteBlog/>
				}
		        <Footer/>
			</div>
		)
	}
}

ContentComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		isShowWriteBlog: state.write_blog.isShowWriteBlog
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		...WriteBlogAction,
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent)