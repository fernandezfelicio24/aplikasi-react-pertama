import React from 'react';


const PostComp = (props) => {
    return(
        <div className="post">
        <div className="img-thumb">
            <img src="https://placeimg.com/200/150/tech" alt=""/>
        </div>
        <div className="content">
            <p className="title">Dummy Title</p>
            <p className="desc">Dummy Body Here</p>
        </div>
    </div>
    )
}

export default PostComp;