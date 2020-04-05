import React from 'react';

import { Link } from 'react-router-dom';

const Pagination = ({ reposPerPage, totalRepos, paginate }) => {
    const numberPages = [];

    for(let i = 1; i <= Math.ceil(totalRepos / reposPerPage ); i++) {
        numberPages.push(i);
    }
    
    return (
        <nav>
            <ul className="pagination">
                {numberPages.map(number => (
                    <li key={number} className="page-item">
                        <Link onClick={() => paginate(number)} to="!#" className="page-link">
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;