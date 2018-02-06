import React, { Component } from 'react'
import { connect } from 'react-redux'
class NoteComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentDidMount() {
	}
	render() {
		return (
			<article id={this.props.id || Math.random()} className="post-43 post type-post status-publish format-status hentry category-category-duo tag-announcement tag-status tag-twitter post_format-post-format-status clearfix">
                <span className="entry-date"><span className="entry-meta-date"><time dateTime={this.props.time|| ''}>{this.props.time || ''}</time></span></span>
                <div className="hentry-box">
                    <div className="entry-status clearfix">
                        {
                            this.props.src ? 
                            <img 
                                alt='' 
                                src={this.props.src || ''} 
                                srcSet={this.props.src || ''} 
                                className='avatar avatar-60 photo' 
                                height='60' 
                                width='60' /> : ''
                        }
                        <p style={{textShadow: '-0.25px 0 black, 0 0.25px black, 0.25px 0 black, 0 -0.25px black'}}>{this.props.content || ''}</p>
                    </div>
                </div>
            </article>
		)
	}
}

NoteComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default (NoteComponent)