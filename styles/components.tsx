import styled from "styled-components";

export const Title = styled.div`
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: bold;
    `;

export const Container = styled.div`
        margin: 0 auto;
        padding: 30px 150px;
        
        a {
            display: block
            margin-top: 30px;
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
        } 
    `;

export const Item = styled.li`
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);  
    `;