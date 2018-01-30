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
                <span className="entry-date"><span className="entry-meta-date"><time dateTime="2013-07-12T19:25:18+00:00">5 years ago</time></span></span>
                <div className="hentry-box">
                    <div className="entry-status clearfix">
                        <img alt='' src='https://secure.gravatar.com/avatar/b072b98e9b6b76648e6506077a44c85a?s=60&#038;d=mm&#038;r=g' srcSet='https://secure.gravatar.com/avatar/b072b98e9b6b76648e6506077a44c85a?s=120&#038;d=mm&#038;r=g 2x' className='avatar avatar-60 photo' height='60' width='60' />
                        <p>I've been using @Trello for the last two weeks to organise my personal & work tasks and it's been great. A real game changer for me.</p>
                    </div>
                </div>
                <footer className="entry-footer">
                    <ul>
                        <li><i className="fa fa-comment"></i><a href="https://demo.herothemes.com/scopic/status-post-format-custom/#respond">Add Comment</a></li>
                    </ul>
                </footer>
            </article>
		)
	}
}

NoteComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default (NoteComponent)