import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {IPost, IState} from '../../interfaces';
import {useRouter} from "next/router";
import {List, Title} from '../../styles/components';
import {Container} from '../../styles/components';
import {CommentItem, Comments} from '../../styles/components';
import Link from 'next/dist/client/link';
import {IComments} from '../../interfaces';

const Post: FC = () => {
    const router = useRouter();
    const {id} = router.query;

    const post: IPost = useSelector((state: IState) => state.index.posts.find((i: IPost) => i.id === Number(id))) as IPost;

    return (
        <Container>
            <Link href='/'>Назад</Link>
            <List>
                <Title>Заголовок поста: {post.title}</Title>
                <div>Текст поста: {post.body}</div>
                {
                    post.comments?.length ?
                        <Comments>
                            <div>Комментарии:</div>
                            {
                                post.comments.map((comment: IComments) =>
                                    <CommentItem key={comment.id}>{comment.body}</CommentItem>)
                            }
                        </Comments> :
                        <div>Пока нет комментариев...</div>
                }
            </List>
        </Container>
    );
}

export default Post;