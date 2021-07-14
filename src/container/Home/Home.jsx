import React, {Component, Fragment} from 'react';
import BlogPost from '../BlogPost/BlogPost';
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
import LifeCycleCop from '../LifeCycleComp/LifeCycleCop';
import Product from '../Product/Product';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './Home.css';
class Home extends Component {

    state = {
        showComponent :true
    }
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({
    //             showComponent :false
    //         })
    //     }, 15000)
    
    // }

    render(){
        return(
            <BrowserRouter>
            {/* <div>
                <p>Youtube Component</p>
                <hr/>
                <YoutubeComp 
                time="7.12" 
                title="Video Wik-wik Juan Matheus"
                desc="1.850.000x ditonton. 1 hari yang lalu"/>
                <YoutubeComp
                time="8.02" 
                title="Video Gelion Smoke Mariyuna"
                desc="850.000x ditonton. 4 hari yang lalu"/>
                <YoutubeComp
                time="5.04" 
                title="Video Philps Gambek"
                desc="9.000x ditonton. 9 hari yang lalu"/>
                <YoutubeComp 
                time="4.12" 
                title="Video YAFET main bola"/>
                <YoutubeComp /> 

                <p>Counter</p>
                <hr/>
                <Product /> 


                <p>Life Cycle Component</p>
                <hr/>
                {
                    this.state.showComponent
                    ?
                    <LifeCycleCop/>
                    :null 
                }
                

                <p>Blog Post</p>
                <hr/>
                <BlogPost/>
            </div>   */}
            <Fragment>
                <div className="navigation">
                    <Link to="/" >Blog Post</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/lifecycle">LifeCycle</Link>
                </div>
            <Route path="/" exact component={BlogPost}/>   
            <Route path="/product" component={Product} />
            <Route path="/lifecycle" component={LifeCycleCop} />
            </Fragment>
            
            </BrowserRouter>
        )  
        
    }
}

export default Home;