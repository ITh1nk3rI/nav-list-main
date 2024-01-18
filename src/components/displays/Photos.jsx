import React from 'react';

const Photos = ({data}) => {
    return (
        <div>
            {data.map((item) => <div className='photos-card'>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.url}</p>
                <p>{item.thumbnailUrl}</p>
            </div>)}
        </div>
    );
};

export default Photos;