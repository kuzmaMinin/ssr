import React, {FC} from 'react';
import Link from 'next/link';
import styled from "styled-components";
import {Item, Title} from '../styles/components';
import { IPost } from '../interfaces';

const Post: FC = ({post}: any) => {
    return (
        <Link href='posts/[id]' as={`/posts/${post.id}`}>
            <Item key={post.id}>
                <Title>Заголовок поста: {post.title}</Title>
                <div>Текст поста: {post.body}</div>
            </Item>
        </Link>
    );
};

export default Post;