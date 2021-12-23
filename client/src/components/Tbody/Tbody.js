import React from 'react';
import { Bookitems } from '../Bookitems/Bookitems';
import { useState } from 'react';

export const Tbody = ({resdata, onItemClick}) => {
    let allitems = [];

    for (var i = 0; i < resdata.items.length; i++) {
        
        allitems.push(<Bookitems key={i} index={i} author={Array.isArray(resdata.items[i].volumeInfo.authors) ? resdata.items[i].volumeInfo.authors[0] : ""} title={resdata.items[i].volumeInfo.title} 
            publisheddate = {resdata.items[i].volumeInfo.publishedDate} onItemClick={onItemClick} selfurl={resdata.items[i].selfLink}
        />);
    }
    return <tbody>{allitems}</tbody>;
}
