import Link from 'next/link';
import React from 'react';
import { IPost } from '../store/interfaces';

const Post = ({post}: any) => {
    return (
        <Link href='posts/[id]' as={`/posts/${post.id}`} prefetch>
            <li key={post.id}>
                <div>{post.title}</div>
                <div>{post.body}</div>
            </li>
        </Link>
    );
};

export default Post;