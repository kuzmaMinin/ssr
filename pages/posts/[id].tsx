import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {IPost, IState} from '../store/interfaces';
import {useRouter} from "next/router";


const Post: FC = () => {
    const router = useRouter();
    const {id} = router.query;

    const post: IPost | undefined = useSelector((state: IState) => state.posts.posts.find(i => i.id === Number(id)));

    return (
        <div>
            <div>{post?.title}</div>
            <div>{post?.body}</div>
            <ul>
                {
                    post?.comments.map(comment => <li>{comment.body}</li>)
                }
            </ul>
        </div>
    );
}

export default Post;