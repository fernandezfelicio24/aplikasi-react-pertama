import React from 'react';


const PostComp = (props) => {

    

    return(
        <div className="post">
        <div className="img-thumb">
            <img src="https://picsum.photos/id/1/200/300" alt=""/>
        </div>
        <div className="content">
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    </div>
    )
}

export default PostComp;