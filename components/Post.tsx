import React, {FC} from 'react';
import Link from 'next/link';
import styled from "styled-components";
import {Item, Title} from '../styles/components';

const Post: FC = ({post}: any) => {
    return (
        <Link href='posts/[id]' as={`/posts/${post.id}`}>
            <Item key={post.id}>
                <Title>{post.title}</Title>
                <div>{post.body}</div>
            </Item>
        </Link>
    );
};

export default Post;