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
		return (
			<article id={this.props.id || Math.random()} className="post-51 post type-post status-publish format-gallery hentry category-category-uno category-uncategorized tag-gallery tag-image tag-photo post_format-post-format-gallery clearfix">
                <span className="entry-date"><span className="entry-meta-date"><time dateTime="2013-07-12T19:58:03+00:00">5 years ago</time></span></span>
                <div className="hentry-box">
                    <div className="entry-gallery">
                        <ul className="clearfix">
                            <li>
                                <figure className="entry-thumb">
                                    <img src="https://mk0herothemesdek9380.kinstacdn.com/wp-content/uploads/sites/11/2013/07/MG_40018_2125579117_l-800x532.jpg" width="800" height="532" alt="" />
                                    <figcaption className="entry-thumb-caption">
                                        <div className="caption-content">
                                            <a className="caption-link" href="https://mk0herothemesdek9380.kinstacdn.com/wp-content/uploads/sites/11/2013/07/MG_40018_2125579117_l.jpg" rel="nofollow" title="Gallery Photo Caption."><i className="fa fa-search"></i></a>
                                            <h3 className="caption-title">Gallery Photo Caption.</h3>
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure className="entry-thumb">
                                    <img src="https://mk0herothemesdek9380.kinstacdn.com/wp-content/uploads/sites/11/2013/07/Flight-91025_3645022109_l-800x532.jpg" width="800" height="532" alt="" />
                                    <figcaption className="entry-thumb-caption">
                                        <div className="caption-content">
                                            <a className="caption-link" href="https://mk0herothemesdek9380.kinstacdn.com/wp-content/uploads/sites/11/2013/07/Flight-91025_3645022109_l.jpg" rel="nofollow" title="Fluttered."><i className="fa fa-search"></i></a>
                                            <h3 className="caption-title">Fluttered.</h3>
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure className="entry-thumb">
                                    <img src="https://mk0herothemesdek9380.kinstacdn.com/wp-content/uploads/sites/11/2013/07/IMG_19241_426386997_l-800x532.jpg" width="800" height="532" alt="" />
                                    <figcaption className="entry-thumb-caption">
                                        <div className="caption-content">
                                            <a className="caption-link" href="https://mk0herothemesdek9380.kinstacdn.com/wp-content/uploads/sites/11/2013/07/IMG_19241_426386997_l.jpg" rel="nofollow" title="Room with a view."><i className="fa fa-search"></i></a>
                                            <h3 className="caption-title">Room with a view.</h3>
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure className="entry-thumb">
                                    <img src="https://mk0herothemesdek9380.kinstacdn.com/wp-content/uploads/sites/11/2013/07/Silent-Night-71772_3137728868_l-800x532.jpg" width="800" height="532" alt="" />
                                    <figcaption className="entry-thumb-caption">
                                        <div className="caption-content"> <a className="caption-link" href="https://mk0herothemesdek9380.kinstacdn.com/wp-content/uploads/sites/11/2013/07/Silent-Night-71772_3137728868_l.jpg" rel="nofollow" title=""><i className="fa fa-search"></i></a></div>
                                    </figcaption>
                                </figure>
                            </li>
                            <li>
                                <figure className="entry-thumb">
                                    <img src="https://mk0herothemesdek9380.kinstacdn.com/wp-content/uploads/sites/11/2013/07/Sutro-Ruins-16990_4217569596_l-800x533.jpg" width="800" height="533" alt="" />
                                    <figcaption className="entry-thumb-caption">
                                        <div className="caption-content"> <a className="caption-link" href="https://mk0herothemesdek9380.kinstacdn.com/wp-content/uploads/sites/11/2013/07/Sutro-Ruins-16990_4217569596_l.jpg" rel="nofollow" title=""><i className="fa fa-search"></i></a></div>
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>
                    </div>
                </div>
                <footer className="entry-footer">
                    <ul>
                        <li><i className="fa fa-link"></i><a href="https://demo.herothemes.com/scopic/gallery-post-format/">View Post</a></li>
                        <li><i className="fa fa-comment"></i><a href="https://demo.herothemes.com/scopic/gallery-post-format/#comments">3 Comments</a></li>
                    </ul>
                </footer>
            </article>
		)
	}
}

GaleryComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default (GaleryComponent)