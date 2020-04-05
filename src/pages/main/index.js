import React, { Component } from 'react';
import { FaGithubAlt, FaArrowLeft } from 'react-icons/fa';

import { Link } from 'react-router-dom';  

import { Container, Header, User, UserInfo, RepoInfo } from './styles';

export default class Main extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <FaGithubAlt color="#000" size={30} />
                    <h1>GitAPI</h1>
                </Header>

                <User>
                    <div>
                        <Link to="/">
                            <FaArrowLeft color="#000" size={30} />
                        </Link>
                    </div>
                    
                    <UserInfo>
                        <img src="https://avatars3.githubusercontent.com/u/59968647?s=460&u=81b334046950db301a9c5a3cb0fe9b264a00c8d9&v=4" alt="Perfil" />
                        <span>Max Dickinson</span>
                    </UserInfo>

                    <RepoInfo>
                        <li>
                            <span>be-the-hero-backend</span>
                            <a href="">Detalhes</a>
                        </li>

                        <li>
                            <span>gerenciador-de-series-react-native</span>
                            <a href="">Detalhes</a>
                        </li>

                        <li>
                            <span>gobarber-backend</span>
                            <a href="">Detalhes</a>
                        </li>

                        <li>
                            <span>medieval-adventure</span>
                            <a href="">Detalhes</a>
                        </li>        
                    </RepoInfo>
                </User>
            </Container>
        );
    }
}