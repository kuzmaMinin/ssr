import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from './store/interfaces';
import { fetchPosts } from './store/postsSlice';

export default function Posts() {
    const dispatch = useDispatch();
    const postStatus = useSelector((state: IState) => state.posts.status);

    useEffect(() => {
        String(postStatus) === 'idle' && dispatch(fetchPosts());
    }, [postStatus, dispatch]);

    return (
        <ul>
            Next baby
        </ul>
    )
}
