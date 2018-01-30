import React, { Component } from 'react'
import { connect } from 'react-redux'

class HeaderComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentDidMount() {
	}
	render() {
		return (
			<header id="site-header" className="clearfix" role="banner">
	            <div id="logo">
	                <div className="container"> <a title="Scopic" href="https://demo.herothemes.com/scopic"> <img alt="Scopic" src="https://mk0herothemesdek9380.kinstacdn.com/wp-content/themes/scopic/images/logo.png" /> </a></div>
	            </div>
	            <nav id="nav-primary-mobile" className="clearfix">
	                <a className="menu-toggle" ><i className="fa fa-bars"></i>Menu</a>
	                <ul id="mobile-menu" className="clearfix">
	                    <li id="menu-item-104" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-104"><a href="http://demo.herothemes.com/scopic/">Home</a></li>
	                    <li id="menu-item-113" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"><a href="https://demo.herothemes.com/scopic/sample-page/">Sample Page</a></li>
	                    <li id="menu-item-71" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-71"><a href="https://demo.herothemes.com/scopic/contact/">Contact</a></li>
	                </ul>
	            </nav>
	            <div id="header-bottom" role="navigation" className="clearfix">
	                <div className="container">
	                    <nav id="nav-primary">
	                        <ul>
	                            <li>
	                                <a ><i className="fa fa-reorder"></i>Menu</a>
	                                <ul id="menu-primary-nav" className="nav clearfix">
	                                    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home menu-item-104"><a href="http://demo.herothemes.com/scopic/">Home</a></li>
	                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"><a href="https://demo.herothemes.com/scopic/sample-page/">Sample Page</a></li>
	                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-71"><a href="https://demo.herothemes.com/scopic/contact/">Contact</a></li>
	                                </ul>
	                            </li>
	                        </ul>
	                    </nav>
	                    <ul id="social-icons" className="clearfix">
	                        <li className="rss"> <a href="https://demo.herothemes.com/scopic/feed/"><i className="fa fa-rss"></i></a></li>
	                        <li className="twitter"> <a href="https://twitter.com/herothemes" target="_blank"><i className="fa fa-twitter"></i></a></li>
	                        <li className="facebook"> <a href="https://facebook.com/herothemes" target="_blank"><i className="fa fa-facebook"></i></a></li>
	                    </ul>
	                    <img width="95" height="95" className="avatar" src="https://mk0herothemesdek9380.kinstacdn.com/wp-content/uploads/sites/11/2013/07/avatar.png" alt=""/>
	                </div>
	            </div>
	        </header>
		)
	}
}

HeaderComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default (HeaderComponent)