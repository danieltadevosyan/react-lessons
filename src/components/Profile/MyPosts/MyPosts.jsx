import React from 'react';
import s from './MyPosts.module.css'; 
import Post from './Post/Post';

const MyPosts =  (props) => {
  let posts = [
    {id:1, messege:"hi , how are you",likesCount:15},
    {id:2, messege:"It's my firs post",likesCount:20},
    {id:3, messege:"asfasf",likesCount:10},
    {id:4, messege:"asfasfasfsfaf",likesCount:9},
  ]

  let postsElements = posts.map ((p) => <Post messege = {p.messege} likesCount= {p.likesCount} />)

    return (
        <div className={s.postsBlock}>
          <h3>my posts</h3>
          <div>
            <div>
            <textarea></textarea>
            </div>
            <div> 
            <button>Add post</button>
            </div>  
          </div>
        <div className={s.posts}>
          {postsElements}
        </div>
        </div>
    );
}

export default MyPosts;