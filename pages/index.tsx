import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IPost, IState} from './store/interfaces';
import {fetchPosts} from './store/postsSlice';
import Post from './posts/post';
import Link from 'next/link';

export default function Posts() {
    const dispatch = useDispatch();
    const postStatus = useSelector((state: IState) => state.posts.status);
    const posts: IPost[] = useSelector((state: IState) => state.posts.posts);

    useEffect(() => {
        String(postStatus) === 'idle' && dispatch(fetchPosts());
    }, [postStatus, dispatch]);

    return (
        <div>
            <Link href='/posts/new'>Добавить</Link>
            <ul>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </ul>
        </div>
    );
}
