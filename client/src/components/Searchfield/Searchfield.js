import React from 'react';
import '../../tachyons.css';

export const Searchfield = ({onSelectChange, onInputChange, onButtonClick, handleKeyDown}) => {

    return (
        <div className='mt5 tc pb1 pt1'>
            <select onChange={onSelectChange}>
                <option value="author">Author</option>
                <option value="title">Title</option>
            </select>
            <input onKeyDown={handleKeyDown} onChange={onInputChange} className='ml3' type="text" placeholder="enter your search"/>
            <button className='f6 br-pill bg-dark-blue no-underline washed-blue ba b--dark-green grow pv2 ph3 dib mr3 ml2' onClick={onButtonClick}>Search</button>
        </div>
    )
}
