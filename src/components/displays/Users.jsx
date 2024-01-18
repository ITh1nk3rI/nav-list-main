import React from 'react';

const Users = ({data}) => {
    return (
        <div>
            {data.map((item) => <div className='users-card'>
                <p>{item.name}</p>
                <p>{item.username}</p>
                <p>{item.email}</p>
                <p>{item.adress}</p>
            </div>)}
        </div>
    );
};

export default Users;