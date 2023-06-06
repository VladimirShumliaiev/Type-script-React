import React from 'react';
import style from "./Pagination.module.css";

const Countries = ({countries, loading}) => {

    if (loading) {
        return <h3>Loading...</h3>
    }
    return (
        <div>
            {
                countries.map((e, index) => (
                    <div key={index}>
                        {e.name.common}
                        <img className={style.item} src={e.flags.png} alt=""/>
                        <hr/>
                    </div>
                ))
            }
        </div>
    );
};

export default Countries;