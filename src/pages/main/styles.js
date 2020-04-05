import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #534949;
    border-radius: 4px;
    padding: 10px;
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

export const User = styled.div`
    
    flex-direction: row;
    background: #534949;
    max-width: 700px;
    margin: 80px auto;
    align-items: center;
    border-radius: 8px;

    svg {
        margin-top: 20px;
        margin-left: 20px;
    }

    img {
        width: 110px;
        border-radius: 65px;
        margin-top: -25px;
    }

    span {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 700;
        font-size: 14px;
        margin-top: 15px;
        margin-bottom: 10px;
        color: #CBBFBF;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const RepoInfo = styled.ul`

    margin: 20px;

    li {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid #DBD5D5;
        margin-bottom: 20px;

        span {
            font-size: 14px;
            font-weight: 700;
            font-family: Arial, Helvetica, sans-serif;
        }

        a {
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 700;
            font-size: 14px;
            color: #CBBFBF;
            text-decoration: none;
        }
   }
`;
