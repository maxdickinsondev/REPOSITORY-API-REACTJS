import React, { Component } from 'react';
import { FaGithubAlt, FaSearch } from 'react-icons/fa';

import { Container, Header, Form, User } from './styles';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <FaGithubAlt color="#000" size={30} />
                    <h1>GitAPI</h1>
                </Header>

                <Form>
                    <input type="text" placeholder="Insira um usuário do github..."/>
                    <button type="submit">
                        <FaSearch color="#000" size={22} />
                    </button>
                </Form>

                <User>
                    <img src="https://avatars3.githubusercontent.com/u/59968647?s=460&u=81b334046950db301a9c5a3cb0fe9b264a00c8d9&v=4" alt="Perfil"/>
                    <span>Max Dickinson</span>
                </User>
            </Container>
        );
    }
}