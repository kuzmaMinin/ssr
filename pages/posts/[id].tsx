import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {IPost, IState} from '../store/interfaces';
import {useRouter} from "next/router";
import {Title} from '../../styles/components';
import {Container} from '../../styles/components';
import {Item, Comment, Comments} from '../../styles/components';
import styled from "styled-components";

const Post: FC = () => {
    const router = useRouter();
    const {id} = router.query;

    const post: IPost | undefined = useSelector((state: IState) => state.posts.posts.find(i => i.id === Number(id)));

    return (
        <Container>
            <Title>{post?.title}</Title>
            <div>{post?.body}</div>
            <Comments>
                {
                    post?.comments.map(comment => <Item>{comment.body}</Item>)
                }
            </Comments>
        </Container>
    );
}

export default Post;