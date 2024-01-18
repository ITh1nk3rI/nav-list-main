import React from 'react';

const Comments = ({data}) => {
    return (
        <div>
            {data.map((item) => <div className='comments-card'>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.body}</p>
            </div>)}
        </div>
    );
};

export default Comments;