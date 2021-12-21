import React from 'react';
import '../../tachyons.css';
import './Bookitems.css';
export const Bookitems = ({author, title, publisheddate, onItemClick, selfurl}) => {
        return (
        <tr onClick={() => onItemClick(selfurl)}>
          <td className="pa3 fw8 bg-mid-gray white">{author}</td>
          <td className="pa3 bg-white black">{title}</td>
          <td className="pa3 bg-mid-gray white">{publisheddate}</td>
        </tr>
        ) 
    }

