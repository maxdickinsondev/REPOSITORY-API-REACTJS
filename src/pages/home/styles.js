import styled from 'styled-components';

export const Container = styled.div`

`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    flex-direction: row;
    background: #534949;
    border-radius: 4px;
    padding: 0px;
    margin: 6px;

    svg {
        margin-right: 8px;
    }

    h1 {
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 22px;
        color: #DBD5D5;
    }
`;

export const Form = styled.form`
    max-width: 700px;
    margin: 80px auto;
    display: flex;
    justify-content: center;

    input {
        font-size: 16px;
        width: 500px;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        
    }

    button {
        width: 45px;
        margin-left: 10px;
        border-radius: 4px;
        border: 1px solid #eee;
    }
`;

export const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #534949;
    max-width: 555px;
    margin: 80px auto;
    border-radius: 8px;

    img {
        width: 220px;
        border-radius: 110px;
        margin-top: 20px;
    }

    span {
        margin-top: 35px;
        font-size: 20px;
        color: #CDBFBF;
    }
`;