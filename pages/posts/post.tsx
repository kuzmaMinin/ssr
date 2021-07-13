import React, {FC} from 'react';
import Link from 'next/link';

const Post: FC = ({post}: any) => {
    return (
        <Link href='posts/[id]' as={`/posts/${post.id}`}>
            <li key={post.id}>
                <div>{post.title}</div>
                <div>{post.body}</div>
            </li>
        </Link>
    );
};

export default Post;