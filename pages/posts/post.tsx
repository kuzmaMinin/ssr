import React, {FC} from 'react';
import Link from 'next/link';
import styled from "styled-components";
import {Item} from '../../styles/components';

const Post: FC = ({post}: any) => {


    const Title = styled.div`
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: bold;
    `;

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