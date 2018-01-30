import React, { Component } from 'react'
import { connect } from 'react-redux'
class StatusPublishComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentDidMount() {
	}
	render() {
		return (
			<article id={this.props.id || Math.random()} className="post-78 post type-post status-publish format-quote has-post-thumbnail hentry category-category-trio tag-post-format tag-quotes post_format-post-format-quote has_thumb clearfix">
	            <span className="entry-date"><span className="entry-meta-date"><time dateTime="2013-07-13T11:20:34+00:00">5 years ago</time></span></span>
	            <div className="hentry-box">
	                <figure className="entry-quote-image">
	                    <img width="800" height="533" src="https://mk0herothemesdek9380.kinstacdn.com/wp-content/uploads/sites/11/2013/07/Bay-Bridge-102224_4350170444_l-800x533.jpg" className="attachment-post size-post wp-post-image" alt="" srcSet="https://mk0herothemesdek9380.kinstacdn.com/wp-content/uploads/sites/11/2013/07/Bay-Bridge-102224_4350170444_l-800x533.jpg 800w, https://mk0herothemesdek9380.kinstacdn.com/wp-content/uploads/sites/11/2013/07/Bay-Bridge-102224_4350170444_l-300x200.jpg 300w, https://mk0herothemesdek9380.kinstacdn.com/wp-content/uploads/sites/11/2013/07/Bay-Bridge-102224_4350170444_l.jpg 1024w" sizes="(max-width: 800px) 100vw, 800px" />
	                    <figcaption className="entry-quote-caption">
	                        <div className="caption-content">
	                            <blockquote className="entry-quote">
	                                <p>Hard times don't create heroes. It is during the hard times when the 'hero' within us is revealed.</p>
	                                <cite>Bob Riley</cite>
	                            </blockquote>
	                        </div>
	                    </figcaption>
	                </figure>
	            </div>
	            <footer className="entry-footer">
	                <ul>
	                    <li><i className="fa fa-link"></i><a href="https://demo.herothemes.com/scopic/quote-post-format-with-image/">View Post</a></li>
	                </ul>
	            </footer>
	        </article>
		)
	}
}

StatusPublishComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default (StatusPublishComponent)