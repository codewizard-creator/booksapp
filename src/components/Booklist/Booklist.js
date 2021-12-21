import React from 'react'
import { Tbody } from '../Tbody/Tbody';
import '../../tachyons.css';

export const Booklist = ({resdata, onItemClick}) => {
    return (
        <div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center" cellSpacing="0">
      <thead>
        <tr className="">
          <th className="fw6 tc pa3 bg-white">Author</th>
          <th className="fw6 tc pa3 bg-white">Title</th>
          <th className="fw6 tc pa3 bg-white">Published Date</th>
        </tr>
      </thead>
      <Tbody resdata={resdata} onItemClick={onItemClick} />
    </table>
  </div>
</div>
    )
}
