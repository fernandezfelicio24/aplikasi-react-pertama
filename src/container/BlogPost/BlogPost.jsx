import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import PostComp from '../../component/PostComp/PostComp';
import axios from 'axios';
class BlogPost extends Component {


    state = {
        post : []
    }
    componentDidMount(){

        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // // .then(json => console.log(json))
        // .then(json => {
        //     this.setState({
        //         post : json
        //     })
        // })
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((hasil) => {
            // console.log(hasil);
            // console.log(hasil.data);
            this.setState({
                post: hasil.data
            })
        })

    }

        render(){
            return(
                <Fragment>
                    <p className="section-title">Blog Post</p>
                    {
                        this.state.post.map(
                            post => {
                                
                                return    <PostComp key={post.id} title={post.title} desc={post.body}/>
                            })
                    }
            
                </Fragment>
                
            )
        }
}

export default BlogPost;