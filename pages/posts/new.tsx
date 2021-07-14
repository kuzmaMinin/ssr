import React, {FC, useState} from 'react';
import {addPost} from "../store/postsSlice";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {Button, Wrapper, Input, Textarea} from '../../styles/components';
import Router from 'next/router'

const NewPost: FC = () => {
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

        // @ts-ignore
        dispatch(addPost(data));
        Router.push('/');

        setTitle('');
        setBody('');
    }

    return (
        <Wrapper>
            <h2>Добавьте нoвый пост!</h2>
            <Input type="text" id='title' onChange={handleChange} value={title} placeholder='Введите название'/>
            <Textarea id='body' onChange={handleChange} value={body} placeholder='Введите текст'/>
            <Button onClick={handleAddPost}>Добавить</Button>
        </Wrapper>
    );
};

export default NewPost;