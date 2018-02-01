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
	            <span className="entry-date"><span className="entry-meta-date"><time dateTime={this.props.time|| ''}>{this.props.time || ''}</time></span></span>
	            <div className="hentry-box">
	                <figure className="entry-quote-image">
	                	<img 
	                    	width="800" 
	                    	height="533" 
	                    	className="attachment-post size-post wp-post-image" 
	                    	alt="" 
	                    	src={this.props.src || '/assets/images/background.png'} 
                            srcSet={this.props.src || '/assets/images/background.png'} 
	                    	sizes="(max-width: 800px) 100vw, 800px" /> 
	                    <figcaption className="entry-quote-caption" style={!this.props.src ? {background: 'none'}: {}}>
	                        <div className="caption-content">
	                            <blockquote className="entry-quote">
	                            	<p>{this.props.content || ''}</p>
	                                {/*<cite>Bob Riley</cite>*/}
	                            </blockquote>
	                        </div>
	                    </figcaption>
	                </figure>
	            </div>
	            {/*<footer className="entry-footer">
	                <ul>
	                    <li><i className="fa fa-link"></i><a href="https://demo.herothemes.com/scopic/quote-post-format-with-image/">View Post</a></li>
	                </ul>
	            </footer>*/}
	        </article>
		)
	}
}

StatusPublishComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default (StatusPublishComponent)