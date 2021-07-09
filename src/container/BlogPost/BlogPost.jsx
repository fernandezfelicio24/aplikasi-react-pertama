import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import PostComp from '../../component/PostComp/PostComp';
class BlogPost extends Component {
        render(){
            return(
                <Fragment>
                    <p className="section-title">Blog Post</p>
                
                    <PostComp title="title" desc="desc"/>
                </Fragment>
                
            )
        }
}

export default BlogPost;