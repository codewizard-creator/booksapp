import React from 'react';
import '../../tachyons.css';
import './details.css';

export const Details = ({previewLink ,category, page, title, subtitle, description, explainmodeoff}) => {
    description = description.toString().replace( /(<([^>]+)>)/ig, '');
    return (
        <div className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb5 middle">
            
            <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">{title}</h1>
            <h2 className='"fw2 f4 lh-copy mt0 mb3"'>{subtitle}</h2>

            <div className='scrollbar'>
            <p className="desc fw1 f5 mt0 mb3">
            {description}
            </p>
            </div>
            <div className='flex mb4'><p className='mr6'>Page: {page}</p>
            <p>{category}</p>
            </div>
            <div className='flex'>
            <button className='f6 br4 dark-green no-underline ba grow pv2 ph3 dib' onClick={explainmodeoff}>Back</button>

            <a className='preview' rel='noopener noreferrer' target='_blank' href={previewLink}>View on Google Books</a>
            </div>
        </div>

    )
}
