import React, { Component } from 'react'
import { connect } from 'react-redux'
class GaleryComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentDidMount() {
	}
	render() {
        let {files, content} = this.props || {}
        let elem = []
        if(files && files.length > 0) {
            elem = files.map((item, index) => {
                return (
                    <li key={`gallery-${item.blog_id}-${item.id}`}>
                        <figure className="entry-thumb">
                            <img 
                                src={item.path}
                                width="800" height="532" alt=""
                            />
                            <figcaption className="entry-thumb-caption">
                                <div className="caption-content">
                                    <a 
                                        target="_blank"
                                        className="caption-link" 
                                        href={item.path}
                                        rel="nofollow" title={index == 0 ? content : ''}
                                    >
                                        <i className="fa fa-search"></i>
                                    </a>
                                    <h3 className="caption-title">{index == 0 ? content : ''}</h3>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                )
            })
        }
		return (
			<article id={this.props.id || Math.random()} className="post-51 post type-post status-publish format-gallery hentry category-category-uno category-uncategorized tag-gallery tag-image tag-photo post_format-post-format-gallery clearfix">
                <span className="entry-date"><span className="entry-meta-date"><time dateTime={this.props.time|| ''}>{this.props.time || ''}</time></span></span>
                <div className="hentry-box">
                    <div className="entry-gallery">
                        <ul className="clearfix">
                            {elem}
                        </ul>
                    </div>
                </div>
                {/*<footer className="entry-footer">
                    <ul>
                        <li><i className="fa fa-link"></i><a href="https://demo.herothemes.com/scopic/gallery-post-format/">View Post</a></li>
                        <li><i className="fa fa-comment"></i><a href="https://demo.herothemes.com/scopic/gallery-post-format/#comments">3 Comments</a></li>
                    </ul>
                </footer>*/}
            </article>
		)
	}
}

GaleryComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default (GaleryComponent)