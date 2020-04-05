import React, { Component } from 'react';
import { FaGithubAlt, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, Header, User, UserInfo, RepoInfo } from './styles';

export default class Main extends Component {
    state = {
        userData: [],
        reposData: []
    }

    async componentDidMount() {
        const { match } = this.props;
        
        const [user, repositories] = await Promise.all([
            api.get(`users/${match.params.username}`),
            api.get(`users/${match.params.username}/repos`, {
                params: {
                    per_page: 5
                }
            })
        ]);

        this.setState({
            userData: user.data,
            reposData: repositories.data
        });
    }

    render() {
        const { userData, reposData } = this.state;

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
                        <img src={userData.avatar_url} alt="Perfil" />
                        <span> {userData.login} </span>
                    </UserInfo>

                    <RepoInfo>
                        {reposData.map(repositories => (
                            <li key={repositories.id}>
                                <span> {repositories.name} </span>
                                <a href={repositories.html_url}>Detalhes</a>
                            </li>
                        ))}
                    </RepoInfo>
                </User>
            </Container>
        );
    }
}