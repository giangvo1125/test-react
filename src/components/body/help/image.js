import React, { Component } from 'react'
import { connect } from 'react-redux'
class ImageComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentDidMount() {
	}
	render() {
		return (
			<article id={this.props.id || Math.random()} className="post-21 post type-post status-publish format-image hentry category-category-trio tag-audio tag-gallery tag-hero tag-post-formats tag-responsive tag-themes tag-video tag-wordpress-2 post_format-post-format-image clearfix">
                <span className="entry-date"><span className="entry-meta-date"><time dateTime="2013-07-12T19:24:05+00:00">5 years ago</time></span></span>
                <div className="hentry-box">
                    <figure className="entry-image">
                        <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/bTJRNWOKwP/" data-instgrm-version="8" style={{background:'#FFF', border:'0', borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth:'600px', padding:'0', width:'99.375%', width:'-webkit-calc(100% - 2px)', width:'calc(100% - 2px)'}}>
                            <div style={{padding:"8px"}}>
                                <div style={{background: '#F8F8F8', lineHeight: 0, marginTop:'40px', padding:'50% 0', textAlign:'center', width:'100%'}} >
                                    <div style={{background:'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC)', display:'block', height:'44px', margin:'0 auto -44px', position:'relative', top:'-22px', width:'44px'}}></div>
                                </div>
                                <p style={{color:'#c9c8cd', fontFamily:'Arial,sans-serif', fontSize:'14px', lineHeight:'17px', marginBottom:'0', marginTop:'8px', overflow:'hidden', padding:'8px 0 7px', textAlign:'center', textOverflow:'ellipsis', whiteSpace:'nowrap'}}><a href="https://www.instagram.com/p/bTJRNWOKwP/" style={{color:'#c9c8cd', fontFamily:'Arial,sans-serif', fontSize:'14px', fontStyle:'normal', fontWeight:'normal', lineHeight:'17px', textDecoration:'none'}} target="_blank">A post shared by Chris Mooney (@chrismooney)</a> on <time style={{fontFamily:'Arial,sans-serif', fontSize:'14px', lineHeight:'17px'}} dateTime="2013-07-03T09:41:13+00:00">Jul 3, 2013 at 2:41am PDT</time></p>
                            </div>
                        </blockquote>
                        <script async defer src="//platform.instagram.com/en_US/embeds.js"></script> 
                    </figure>
                </div>
                <footer className="entry-footer">
                    <ul>
                        <li><i className="fa fa-comment"></i><a href="https://demo.herothemes.com/scopic/image-post-format-instagram/#respond">Add Comment</a></li>
                    </ul>
                </footer>
            </article>
		)
	}
}

ImageComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default (ImageComponent)