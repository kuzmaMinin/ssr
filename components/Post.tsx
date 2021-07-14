import React, {FC} from 'react';
import Link from 'next/link';
import {Item, Title} from '../styles/components';
import { IPost } from '../interfaces';

const Post: FC<IPost> = (props) => {
    return (
        <Link href='posts/[id]' as={`/posts/${props.id}`}>
            <Item key={props.id}>
                <Title>Заголовок поста: {props.title}</Title>
                <div>Текст поста: {props.body}</div>
            </Item>
        </Link>
    );
};

export default Post;