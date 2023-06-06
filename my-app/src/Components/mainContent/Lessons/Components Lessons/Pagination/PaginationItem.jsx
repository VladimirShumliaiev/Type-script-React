import React from 'react';

const PaginationItem = ({countriesPerPage,totalCounties, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCounties / countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            {
                pageNumbers.map(e => (
                    <button key={e}>
                        <a onClick={() => paginate(e)}>
                            {e}
                        </a>
                    </button>
                ))
            }
        </div>
    );
};

export default PaginationItem;