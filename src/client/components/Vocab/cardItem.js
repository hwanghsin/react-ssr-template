import React from 'react';

const VocabCardItem = ({ word, desc, clickEvent }) => {
    return (
        <div className='card vocab-card m-3'>
            <div className='card-body'>
                <h5 className='card-title'>{word}</h5>
                <p className='card-text'>{desc}</p>
                <a href='#' className='card-link' onClick={clickEvent}>詳解</a>
            </div>
        </div>
    )
}

export default VocabCardItem;