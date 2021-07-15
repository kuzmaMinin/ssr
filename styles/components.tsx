import styled from "styled-components";

export const Comments = styled.ul`
  list-style-type: none;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #f8f8f8;
  font-size: 16px;

  ::-webkit-input-placeholder {
    font-size: 16px;
  }

  :focus {
    outline: none;
    border: 2px solid #00bfff;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 160px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 2px solid #ccc;
  background-color: #f8f8f8;
  resize: none;
  font-size: 16px;

  ::-webkit-input-placeholder {
    font-size: 16px;
  }

  :focus {
    outline: none;
    border: 2px solid #00bfff;
  }
`;

export const Wrapper = styled.div`
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
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  a {
    width: 200px;
    text-align: center;
    display: block;
    margin-top: 30px;
    padding: 15px 15px;
    background: #00bfff;
    color: white;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 16px;

    :hover {
      cursor: pointer;
    }

    :active {
      background: #00bfff80;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px 15px;
  background: #00bfff;
  color: white;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 16px;

  :hover {
    cursor: pointer;
    background: #00bfff90;
  }

  :active {
    background: #00bfff70;
  }
`;

export const Title = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px 150px;

  a {
    width: 200px;
    text-align: center;
    display: block;
    margin-top: 30px;
    padding: 15px 15px;
    background: #00bfff;
    color: white;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 16px;

    :hover {
      cursor: pointer;
    }

    :active {
      background: #00bfff80;
    }
  }
`;

export const Item = styled.li`
  width: 70%;
  padding: 25px;
  border-radius: 15px;
  border: 1px solid black;

  :hover {
    cursor: pointer;
  }
`;

export const CommentItem = styled.div`
  margin: 0 auto;
  padding: 20px;
  border-bottom: 1px solid black;
`;

export const List = styled.div`
  margin-top: 50px;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;