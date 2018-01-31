import React, { Component } from 'react'
import { connect } from 'react-redux'
import Audio from './help/audio'
import Gallery from './help/gallery'
import Image from './help/image'
import Note from './help/note'
import Status from './help/status-publish'
class BodyComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentDidMount() {
	}
	_renderItem(item) {
		switch(item.blog.type) {
			case "1":
				return (
					<li className="animated fadeInUp" key={item.blog.content}>
						<Note 
							id={item.blog.content}
							time={moment(item.blog.createdAt).format('DD/MM/YYYY')}
							src={item.files[0].path}
							content={item.blog.content}
						/>
            		</li>
				)
			break;
		}
	}
	render() {
		let {blogs} = this.props;
		console.log('blogs ',blogs)
		let elem = blogs.map((item, index) => {
			return this._renderItem(item)
			
		})
		console.log('elem ',elem)
		return (
			<div id="site-container" className="clearfix">
	            <section id="primary" className="sidebar-off clearfix">
	                <div id="content" role="main">
	                    <ul id="timeline" className="clearfix">
	                    	{elem}
	                    	<li className="animated fadeInUp">
	                    		<Audio/>
	                    	</li>
	                    	<li className="animated fadeInUp">
	                    		<Gallery/>
	                    	</li>
	                    	<li className="animated fadeInUp">
	                    		<Image/>
	                    	</li>
	                    	<li className="animated fadeInUp">
	                    		<Note/>
	                    	</li>
	                    	<li className="animated fadeInUp">
	                    		<Status/>
	                    	</li>

	                    </ul>
	                    <nav role="navigation" id="nav-below" className="site-navigation paging-navigation clearfix">
	                        <ul className="clearfix">
	                            <li className="nav-next"><a><i className="fa fa-chevron-right"></i></a></li>
	                        </ul>
	                    </nav>
	                </div>
	            </section>
	        </div>
		)
	}
}

BodyComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		blogs: state.write_blog.blogs, 
	}
}

export default connect(mapStateToProps, null)(BodyComponent)

