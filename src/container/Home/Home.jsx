import React, {Component} from 'react';
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
import Product from '../Product/Product';
class Home extends Component {
    render(){
        return(
            <div>
                {/* <p>Youtube Component</p>
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
                <YoutubeComp /> */}
                <p>Counter</p>
                <hr/>
                <Product />
            </div>      
        )  
        
    }
}

export default Home;