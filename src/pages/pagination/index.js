import React from 'react';

import { Link } from 'react-router-dom';

import { Pages } from './styles';

const Pagination = ({ reposPerPage, totalRepos, paginate, username }) => {
    const numberPages = [];

    for(let i = 1; i <= Math.ceil(totalRepos / reposPerPage ); i++) {
        numberPages.push(i);
    }
    
    return (
        <div className="skin-primary-color">
                <Pages className="pagination">
                    {numberPages.map(number => (
                        <li key={number} className="page-item">
                            <Link onClick={() => paginate(number)} to={`/main/${username}`} className="page-link">
                                {number}
                            </Link>
                    </li>
                ))}
            </Pages>
        </div>

    )
}

export default Pagination;