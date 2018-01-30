import React, { Component } from 'react'
import { connect } from 'react-redux'
class AudioComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentDidMount() {
	}
	render() {
		return (
			<article id={this.props.id || Math.random()} className="post-46 post type-post status-publish format-video hentry category-category-trio tag-audio tag-media tag-video post_format-post-format-video clearfix">
                <span className="entry-date"><span className="entry-meta-date"><time dateTime="2013-07-12T19:54:10+00:00">5 years ago</time></span></span>
                <div className="hentry-box">
                    <figure className="entry-video">
                        <iframe src="https://player.vimeo.com/video/68037726" width="450" height="199" frameBorder="0" title="Ladi6 &ndash; Shine On"   allowFullScreen data-rocket-lazyload="fitvidscompatible" data-lazy-src="https://player.vimeo.com/video/68037726"></iframe>
                        <noscript><iframe src="https://player.vimeo.com/video/68037726" width="450" height="199" frameBorder="0" title="Ladi6 &ndash; Shine On"   allowFullScreen></iframe></noscript>
                    </figure>
                </div>
                <footer className="entry-footer">
                    <ul>
                        <li><i className="fa fa-comment"></i><a href="https://demo.herothemes.com/scopic/video-post-format-embeded/#respond">Add Comment</a></li>
                    </ul>
                </footer>
            </article>
		)
	}
}

AudioComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default (AudioComponent)