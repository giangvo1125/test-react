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
	render() {
		return (
			<div id="site-container" className="clearfix">
	            <section id="primary" className="sidebar-off clearfix">
	                <div id="content" role="main">
	                    <ul id="timeline" className="clearfix">
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

export default (BodyComponent)