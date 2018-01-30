import React, { Component } from 'react'
import { connect } from 'react-redux'

class FooterComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentDidMount() {
	}
	render() {
		return (
			<footer id="site-footer" className="clearfix">
	            <div id="footer-widgets" className="clearfix">
	                <div className="container">
	                    <div className="ht-grid ht-grid-stacked">
	                        <div id="text-2" className="ht-column ht-col-third widget widget_text">
	                            <h4 className="widget-title"><span>About Scopic.</span></h4>
	                            <div className="textwidget">
	                                <p>Scopic is a personal tumblog style WordPress blogging theme perfect for creatives. With built-in rich media post formats you can share your images, photos, videos, music and more.</p>
	                            </div>
	                        </div>
	                        <div id="ht_flickr_widget-2" className="ht-column ht-col-third widget ht_flickr_widget">
	                            <h4 className="widget-title"><span>My Photostream.</span></h4>
	                            <div id="flickr_badge_wrapper" className="clearfix">
	                                <script type="text/javascript" src="http://www.flickr.com/badge_code_v2.gne?count=6&amp;display=latest&amp;size=s&amp;layout=x&amp;source=user&amp;user=52617155@N08"></script> 
	                            </div>
	                        </div>
	                        <div id="tag_cloud-2" className="ht-column ht-col-third widget widget_tag_cloud">
	                            <h4 className="widget-title"><span>Tags.</span></h4>
	                            <div className="tagcloud"><a href="https://demo.herothemes.com/scopic/tag/announcement/" className="tag-cloud-link tag-link-5 tag-link-position-1" style={{fontSize: '8pt'}} aria-label="Announcement (1 item)">Announcement</a> <a href="https://demo.herothemes.com/scopic/tag/audio/" className="tag-cloud-link tag-link-6 tag-link-position-2" style={{fontSize: '13pt'}} aria-label="audio (7 items)">audio</a> <a href="https://demo.herothemes.com/scopic/tag/gallery/" className="tag-cloud-link tag-link-7 tag-link-position-3" style={{fontSize: '12.583333333333pt'}} aria-label="gallery (6 items)">gallery</a> <a href="https://demo.herothemes.com/scopic/tag/hero/" className="tag-cloud-link tag-link-8 tag-link-position-4" style={{fontSize: '12pt'}} aria-label="hero (5 items)">hero</a> <a href="https://demo.herothemes.com/scopic/tag/image/" className="tag-cloud-link tag-link-9 tag-link-position-5" style={{fontSize: '8pt'}} aria-label="image (1 item)">image</a> <a href="https://demo.herothemes.com/scopic/tag/instagram/" className="tag-cloud-link tag-link-10 tag-link-position-6" style={{fontSize: '8pt'}} aria-label="instagram (1 item)">instagram</a> <a href="https://demo.herothemes.com/scopic/tag/media/" className="tag-cloud-link tag-link-11 tag-link-position-7" style={{fontSize: '8pt'}} aria-label="media (1 item)">media</a> <a href="https://demo.herothemes.com/scopic/tag/photo/" className="tag-cloud-link tag-link-12 tag-link-position-8" style={{fontSize: '9.5pt'}} aria-label="photo (2 items)">photo</a> <a href="https://demo.herothemes.com/scopic/tag/post-format/" className="tag-cloud-link tag-link-13 tag-link-position-9" style={{fontSize: '9.5pt'}} aria-label="post format (2 items)">post format</a> <a href="https://demo.herothemes.com/scopic/tag/post-formats/" className="tag-cloud-link tag-link-14 tag-link-position-10" style={{fontSize: '12pt'}} aria-label="post formats (5 items)">post formats</a> <a href="https://demo.herothemes.com/scopic/tag/quotes/" className="tag-cloud-link tag-link-15 tag-link-position-11" style={{fontSize: '9.5pt'}} aria-label="quotes (2 items)">quotes</a> <a href="https://demo.herothemes.com/scopic/tag/responsive/" className="tag-cloud-link tag-link-16 tag-link-position-12" style={{fontSize: '12pt'}} aria-label="responsive (5 items)">responsive</a> <a href="https://demo.herothemes.com/scopic/tag/status/" className="tag-cloud-link tag-link-17 tag-link-position-13" style={{fontSize: '8pt'}} aria-label="Status (1 item)">Status</a> <a href="https://demo.herothemes.com/scopic/tag/themes/" className="tag-cloud-link tag-link-18 tag-link-position-14" style={{fontSize: '12pt'}} aria-label="themes (5 items)">themes</a> <a href="https://demo.herothemes.com/scopic/tag/twitter/" className="tag-cloud-link tag-link-19 tag-link-position-15" style={{fontSize: '8pt'}} aria-label="Twitter (1 item)">Twitter</a> <a href="https://demo.herothemes.com/scopic/tag/video/" className="tag-cloud-link tag-link-20 tag-link-position-16" style={{fontSize: '13pt'}} aria-label="video (7 items)">video</a> <a href="https://demo.herothemes.com/scopic/tag/wordpress-2/" className="tag-cloud-link tag-link-21 tag-link-position-17" style={{fontSize: '13pt'}} aria-label="wordpress (7 items)">wordpress</a></div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <div id="footer-bottom" className="clearfix">
	                <div className="container"> <small id="copyright" role="contentinfo">© Copyright A Hero Theme.</small></div>
	            </div>
	        </footer>
		)
	}
}

FooterComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default (FooterComponent)