import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RichTextEditor from 'react-rte';

import WriteBlogAction from '../../actions/write_blog_action'
import Dropzone from 'react-dropzone'

const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
    INLINE_STYLE_BUTTONS: [
      {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
      {label: 'Italic', style: 'ITALIC'},
      {label: 'Underline', style: 'UNDERLINE'}
    ],
    BLOCK_TYPE_DROPDOWN: [
      {label: 'Normal', style: 'unstyled'},
      {label: 'Heading Large', style: 'header-one'},
      {label: 'Heading Medium', style: 'header-two'},
      {label: 'Heading Small', style: 'header-three'}
    ],
    BLOCK_TYPE_BUTTONS: [
      {label: 'UL', style: 'unordered-list-item'},
      {label: 'OL', style: 'ordered-list-item'}
    ]
}

class WriteBlogComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
        this.state = {
        	value: RichTextEditor.createEmptyValue(), 
        	files: [],
        }
	}
	componentDidMount() {
	}
	_onWriteContent(value) {
		this.setState({value});
		this.props.updateValueContent(value.toString('markdown'))
	}
	_onCancelWriteContent() {
		this.props.onBeginWriteBlog('', false)
	}
	_onDrop(file) {
		let files = this.state.files
		files.push(file[0])
    	this.setState({
      		files
    	});
  	}
  	_onSubmitContent() {
  		let {files} = this.state;
  		this.props.onSubmitContent(files);
  	}
  	_onWriteLink(e) {
  		var value = e.target.value;
  		this.props.updateLink(value)
  	}
	_renderContent() {
		let {writeBlogType, link} = this.props;
		
		if(writeBlogType == 1 || writeBlogType == 2 || writeBlogType == 3) {
			return(
				<div>
					<RichTextEditor
				        value={this.state.value}
				        onChange={this._onWriteContent.bind(this)}
				        toolbarConfig={toolbarConfig}
				        className="rich-text"
			      	/>
			      	<section style={{marginLeft: '10%', marginRight: '10%', marginTop: '15px'}}>
    					<div className="dropzone">
      						<Dropzone 
      							accept="image/png, image/jpeg, image/jpg" 
      							onDrop={this._onDrop.bind(this)} 
      							style={{
								    height: '200px',
								    borderWidth: '2px',
								    borderColor: 'rgb(102, 102, 102)',
								    borderStyle: 'dashed',
								    borderRadius: '5px',
      							}}
      						>
        						<p>Try dropping some files here, or click to select files to upload.</p>
      						</Dropzone>
    					</div>
    					<aside>
      						<h2>Dropped files</h2>
  							<ul>
					            {
					              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
					            }
  							</ul>
    					</aside>
  					</section>
				</div>
			)
		}
		else if (writeBlogType == 4) {
			return(
				<div>
					<div style={{marginLeft: '10%', marginRight: '10%', marginTop: '15px', marginBottom: '15px'}}>
						<label>Link: </label><input value={link || ''} className="form-control" style={{width: '50%'}} onChange={this._onWriteLink.bind(this)} />
					</div>
					<RichTextEditor
				        value={this.state.value}
				        onChange={this._onWriteContent.bind(this)}
				        toolbarConfig={toolbarConfig}
				        className="rich-text"
			      	/>
				</div>
			)
		}
	}
	render() {
		return (
			<div>
				<div style={{marginTop: '100px'}}>
					<div>
						<a className="dot" onClick={this._onCancelWriteContent.bind(this)}>
							<i className="fa fa-times"/>
						</a>
						<a className="dot-next" onClick={this._onSubmitContent.bind(this)}>
							<i className="fa fa-check"/>
						</a>						
					</div>
					{this._renderContent()}
					<br/>
				</div>
			</div>
		)
	}
}

WriteBlogComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		writeBlogType: state.write_blog.writeBlogType, 
		valueContent: state.write_blog.valueContent, 
		link: state.write_blog.link, 
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		...WriteBlogAction,
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteBlogComponent)