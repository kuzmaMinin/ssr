import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IPost, IState} from './store/interfaces';
import {fetchPosts} from './store/postsSlice';
import Post from './posts/post';
import Link from 'next/link';
import styled from "styled-components";
import {Container} from '../styles/components';

export default function Posts() {

    const List = styled.div`
        margin-top: 50px;
        padding: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 15px;
    `;


    const dispatch = useDispatch();
    const postStatus = useSelector((state: IState) => state.posts.status);
    const posts: IPost[] = useSelector((state: IState) => state.posts.posts);

    useEffect(() => {
        String(postStatus) === 'idle' && dispatch(fetchPosts());
    }, [postStatus, dispatch]);

    return (
        <Container>
            <Link href='/posts/new'>Добавить</Link>
            <List>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </List>
        </Container>
    );
}
