import React, { Component } from 'react';
import { FaGithubAlt, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, Header, Form, User } from './styles';

export default class Home extends Component {
    state = {
        username: '',
        user: []
    };

    handleInput = e => {
        this.setState({ username: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { username } = this.state;

        const response = await api.get(`users/${username}`);

        const data = response.data;

        this.setState({
            user: data,
            username: ''
        });
    }

    render() {
        const photo = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
        const { username, user } = this.state;

        return (
            <Container>
                <Header>
                    <FaGithubAlt color="#000" size={30} />
                    <h1>GitAPI</h1>
                </Header>

                <Form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={username}
                        placeholder="Insira um usuário do github..."
                        onChange={this.handleInput}
                    />
                    <button type="submit">
                        <FaSearch color="#000" size={22} />
                    </button>
                </Form>

                <Link to={`/main/${user.login}`}>
                    <User>
                        <img src={user.avatar_url ? user.avatar_url : photo} alt="Perfil"/>
                        <span>{user.login}</span>
                    </User>
                </Link>

            </Container>
        );
    }
}