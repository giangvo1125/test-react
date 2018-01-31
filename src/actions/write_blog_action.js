var Dropbox = require('dropbox').Dropbox;
const uuidv1 = require('uuid/v1');

var dbx = new Dropbox({ accessToken: '5PWsLfRTL8AAAAAAAAAAYT8Jo3peXlCJvylaiGgxvEs2cxsaLNcLZC5w9GuNVphK' });
const onBeginWriteBlog = (id, isShowWriteBlog = true) => (dispatch) => {
	dispatch({
		type: types.ON_BEGIN_WRITE_BLOG, 
		payload: {
			isShowWriteBlog: isShowWriteBlog, 
			writeBlogType: id, 
		}
	})
}

const updateValueContent = (value) => (dispatch) => {
	dispatch({
		type: types.UPDATE_VALUE_CONTENT, 
		payload: {
			valueContent: value, 
		}
	})
}

const onSubmitContent = (files) => (dispatch, getState) => {
	let { writeBlogType, valueContent } = getState().write_blog;
	console.log('dbx ',dbx)
	// dbx.filesUpload({path: '/'+files[0].name, contents: files[0]})
	// .then(function(response) {
	// 	console.log(response);
	// })
 //  	.catch(function(error) {
 //    	console.log(error);
 //  	});

 // 	dbx.sharingCreateSharedLink({path:"/search_01.png"})
 // 	.then(function(response) {
	// 	console.log(response);
	// })
 //  	.catch(function(error) {
 //    	console.log(error);
 //  	});

 	var obj = {blog: {content: '', link: ''}}
 	function getShareLink(file) {
 		var p = new Promise((a, b) => {
 			dbx.filesUpload({path: '/'+file.name, contents: file})
	 		.then((response) => {
	 			dbx.sharingCreateSharedLink({path:response.path_display})
	 			.then((link) => {
	 				var l = link.url.replace('www.dropbox.com', 'dl.dropboxusercontent.com')
	 				a(l);
	 			})
	 			.catch((err) => {
	 				b(err);
	 			})
	 		})
	 		.catch((err) => {
	 			b(err)
	 		})
 		});
 		return p;
 	}
 	switch(writeBlogType) {
 		case 1:
 			var promise = []
 			if(files && files.length > 0) {
 				for(var i = 0; i < files.length; i++) {
 					promise.push(getShareLink(files[i]))
 				}
 			}
 			Promise.all(promise)
 			.then((uploaded) => {
 				var filesUpload = []
 				if(uploaded.length > 0) {
 					for(var i = 0; i < uploaded.length; i++) {
 						filesUpload.push({path: uploaded[i]})
 					}
 				}
 				obj.files = filesUpload;
 				obj.blog.content = valueContent;
 				obj.blog.type = writeBlogType;
 				axios.post('https://blogs-ibcurt.herokuapp.com/create-blog', obj)
 				.then((response) => {
 					if(response.data.status == 0) {
 						alert('Create Successfully');
 						dispatch({
 							type: types.CREATE_BLOG, 
 							payload: {
 								writeBlogType: '', 
								valueContent: '', 
								isShowWriteBlog: false,
 							}
 						})
 					}
 				}, (err) => {
 					console.log('err ',err)
 				})
 			},(err) => {
 				console.log('err ',err)
 			})
 		break;
 	}
}

const getBlogs = () => (dispatch) => {
	axios.get('https://blogs-ibcurt.herokuapp.com/get-blog')
	.then((response) => {
		// console.log('response ',response)
		let {data} = response
		dispatch({
			type: types.GET_BLOG, 
			payload: {blogs: data}
		})
	}, (err) => {
		console.log('err ',err)
	})
}

module.exports = {
	onBeginWriteBlog,  
	updateValueContent, 
	onSubmitContent, 
	getBlogs, 
}