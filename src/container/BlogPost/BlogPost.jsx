import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import PostComp from '../../component/PostComp/PostComp';
import axios from 'axios';
class BlogPost extends Component {


    state = {
        post : []
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts')
        .then((hasil) => {
            // console.log(hasil);
            // console.log(hasil.data);
            this.setState({
                post: hasil.data
            })
        })
    }
    handleRemove = (data) => {
        console.log(data);
        axios.delete(`http://localhost:3004/posts/${data}`);
        this.getPostAPI();
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
        this.getPostAPI();

    }

        render(){
            return(
                <Fragment>
                    <p className="section-title">Blog Post</p>
                    {
                        this.state.post.map(
                            post => {
                                
                                return    <PostComp key={post.id} data={post} remove={this.handleRemove}/>
                            })
                    }
            
                </Fragment>
                
            )
        }
}

export default BlogPost;