import React from 'react'
import cl from './Post.module.css'

const Post = (props) => {
    return <div className={cl.item}>
        <img src={'https://www.ltutech.com/wp-content/uploads/2019/03/color-search-470x392.jpg'}/>
        {props.message}
        <div>
            <span>like {props.count}</span>
        </div>
    </div>
}

export default Post;