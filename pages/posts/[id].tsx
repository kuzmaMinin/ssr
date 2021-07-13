import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ISinglePost } from '../store/interfaces';
import { fetchPost } from '../store/postSlice';

const Post = (props: any) => {
   // const dispatch = useDispatch();
    //const postStatus = useSelector((state: IState) => state.posts.status);
    //const post: ISinglePost = useSelector((state: IState) => state.posts.posts);

    useEffect(() => {
        //String(postStatus) === 'idle' && dispatch(fetchPost());
        console.log(props)
    }, []);
    
    return (
        <div>
            Post
        </div>
    );
};

    export default Post;