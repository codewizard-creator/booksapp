import React from 'react';
import { Bookitems } from '../Bookitems/Bookitems';
import { useState } from 'react';

export const Tbody = ({resdata, onItemClick}) => {
    let allitems = [];
    const [author, setauthor] = useState("");
    const findnewitems = (index) => {
       
                fetch(`https://safe-meadow-28955.herokuapp.com/titles?title=${resdata.items[index].volumeInfo.title}`).then((res) => res.json()).then(data => {
               if(Array.isArray(data.items[0].volumeInfo.authors)) {
               setauthor(data.items[0].volumeInfo.authors[0]);
               }
                
                });

            
            
        }

    for (var i = 0; i < resdata.items.length; i++) {
  
        allitems.push(<Bookitems key={i} author={Array.isArray(resdata.items[i].volumeInfo.authors) ? resdata.items[i].volumeInfo.authors[0] : author} title={resdata.items[i].volumeInfo.title} 
            publisheddate = {resdata.items[i].volumeInfo.publishedDate} onItemClick={onItemClick} selfurl={resdata.items[i].selfLink}
        />);
    }
    return <tbody>{allitems}</tbody>;
}
