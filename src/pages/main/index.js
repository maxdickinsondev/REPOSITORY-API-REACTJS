import React, { Component } from 'react';
import { FaGithubAlt, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Pagination from '../pagination';

import api from '../../services/api';

import { Container, Header, User, UserInfo, RepoInfo } from './styles';

export default class Main extends Component {
    state = {
        username: '',
        userData: [],
        reposData: [],

        currentPage: 1,
        reposPerPage: 4
    }

    async componentDidMount() {
        const { match } = this.props;
        
        const [user, repositories] = await Promise.all([
            api.get(`users/${match.params.username}`),
            api.get(`users/${match.params.username}/repos`)
        ]);

        this.setState({
            userData: user.data,
            reposData: repositories.data,
            username: match.params.username
        });
    }

    render() {
        const { match } = this.props;
        const { userData, reposData, currentPage, reposPerPage, username } = this.state;

        const indexOfLastRepos = currentPage * reposPerPage;
        const indexOfFirstPost = indexOfLastRepos - reposPerPage;
        const currentRepos = reposData.slice(indexOfFirstPost, indexOfLastRepos);

        const paginate = (number) => this.setState({ currentPage: number });

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
                        {currentRepos.map(repositories => (
                            <li key={repositories.id}>
                                <span> {repositories.name} </span>
                                <a href={repositories.html_url}>Detalhes</a>
                            </li>
                        ))}
                    </RepoInfo>
                </User>

                <Pagination 
                    reposPerPage={reposPerPage} 
                    totalRepos={reposData.length} 
                    paginate={paginate} 
                    username={username} 
                />
            </Container>
        );
    }
}