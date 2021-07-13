import React, {FC, useState} from 'react';
import {addPost} from "../store/postsSlice";
import {useDispatch} from "react-redux";
import styled from "styled-components";

const NewPost: FC = () => {
    const Button = styled.button`
        padding: '20px 30px',
        background: 'blue',
        color: 'white'
    `;

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const dispatch = useDispatch();

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {id, value} = e.target;

        id === 'title' && setTitle(value);
        id === 'body' && setBody(value);
    }

    function handleAddPost() {
        const data = {title, body};

        dispatch(addPost(data));

        setTitle('');
        setBody('');
    }

    return (
        <div>
            <label htmlFor="title">
            <input type="text" id='title' onChange={handleChange} value={title}/>
            </label>
            <label htmlFor="body">
                <textarea id='body' onChange={handleChange} value={body}/>
            </label>
            <Button onClick={handleAddPost}>Добавить</Button>
        </div>
    );
};

export default NewPost;