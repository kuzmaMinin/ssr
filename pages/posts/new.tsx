import React, {FC, useState} from 'react';
import {addPost} from "../store/postsSlice";
import {useDispatch} from "react-redux";
import styled from "styled-components";

const NewPost: FC = () => {
    const Wrapper = styled.div`
        width: 450px;
        margin: 50px auto 0;
        padding: 10px 30px 30px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        background: white;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    `;

    const Button = styled.button`
        width: 100%;
        padding: 15px 15px;
        background: #00bfff;
        color: white;
        border: none;
        border-radius: 10px;
        outline: none;
        font-size: 14px;
        
        :hover {
            cursor: pointer;
        }
        
        :active {
            background: #00bfff80;
        }
    `;

    const Input = styled.input`
        width: 100%;
        padding: 10px 15px;
        border: 2px solid #ccc;
        border-radius: 10px;
        background-color: #f8f8f8;
        font-size: 14px;
        
        :focus {
            outline: none;
        }
    `;

    const Textarea = styled.textarea`
        width: 100%;
        height: 160px;
        padding: 10px 15px;
        border-radius: 10px;
        border: 2px solid #ccc;
        background-color: #f8f8f8;
        resize: none;
        font-size: 14px;
        
        :focus {
            outline: none;
        }
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
        <Wrapper>
            <h2>Добавьте нoвый пост!</h2>
            <Input type="text" id='title' onChange={handleChange} value={title} placeholder='Введите название'/>
            <Textarea id='body' onChange={handleChange} value={body} placeholder='Введите текст'/>
            <Button onClick={handleAddPost}>Добавить</Button>
        </Wrapper>
    );
};

export default NewPost;