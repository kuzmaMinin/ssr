import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IPost, IState} from './store/interfaces';
import {fetchPosts} from './store/postsSlice';
import Post from '../components/Post';
import Link from 'next/link';
import styled from "styled-components";
import {Container, List} from '../styles/components';
import Preloader from '../components/Preloader';

export default function Posts() {
    const dispatch = useDispatch();
    const postStatus = useSelector((state: IState) => state.posts.status);
    const posts: IPost[] = useSelector((state: IState) => state.posts.posts);

    useEffect(() => {
        String(postStatus) === 'idle' && dispatch(fetchPosts());
    }, [postStatus, dispatch]);
    
    
    return (
        <Container>
            <Link href='/posts/new'>Добавить</Link>
            {
                posts.length ?
                    <List>
                        {
                            // @ts-ignore
                            posts.map(post => <Post key={post.id} post={post}/>)
                        }
                    </List>:
                    <Preloader/>
            }
            <List>
                {
                    // @ts-ignore
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </List>
        </Container>
    );
}
