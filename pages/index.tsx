import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IPost, IState} from '../interfaces';
import Post from '../components/Post';
import Link from 'next/link';
import {Container, List} from '../styles/components';
import axios from "axios";
import {wrapper} from "../store/store";
import {selectValidLastPosts, setIndex} from "../store/indexSlice";


const Posts = () => {
    const posts: IPost[] = useSelector(selectValidLastPosts);

    return (
        <Container>
            <Link href='/posts/new'>Добавить</Link>
            {
                posts.length &&
                    <List>
                        {
                            posts.map(post => <Post key={post.id} {...post}/>)
                        }
                    </List>
            }
        </Container>
    );
}

Posts.getInitialProps = wrapper.getInitialPageProps(store => async() => {
    console.log(' Page.getInitialProps uses the store to dispatch things');
    try {
        const posts = await axios
            .get('https://simple-blog-api.crew.red/posts')
            .then(res => res.data);

        const result = await Promise.all(
            posts.map(async (post: IPost) => {
                return await axios
                    .get(`https://simple-blog-api.crew.red/posts/${post.id}?_embed=comments`)
                    .then(res => res.data);
            })
        ).then(res => res);

        store.dispatch(setIndex(result));

        return result;

    } catch (e) {
        console.log(e);
    }
});

export default Posts;