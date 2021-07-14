import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {IPost, IState} from '../../interfaces';
import {useRouter} from "next/router";
import {List, Title} from '../../styles/components';
import {Container} from '../../styles/components';
import {CommentItem, Comment, Comments} from '../../styles/components';
import styled from "styled-components";
import Link from 'next/dist/client/link';
import { IComments } from '../../interfaces';

const Post: FC = () => {
    const router = useRouter();
    const {id} = router.query;

    const post: IPost | undefined= useSelector((state: IState) => state.posts.posts.find((i: IPost) => i.id === Number(id)));

    return (
        <Container>
                <Link href='/'>Назад</Link>
            <List>
                <Title>Заголовок поста: {post?.title}</Title>
                <div>Текст поста: {post?.body}</div>
                {
                    post?.comments.length ?
                        <Comments>
                            <div>Комментарии:</div>
                            {
                                post?.comments.map((comment: IComments) => <CommentItem>{comment.body}</CommentItem>)
                            }
                        </Comments> :
                        <div>Пока нет комментариев...</div>
                }

            </List>
        </Container>
    );
}

export default Post;