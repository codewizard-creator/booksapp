import '../../tachyons.css';
import './Bookitems.css';
import React, { Component } from 'react';





export class Bookitems extends Component  {
  constructor(props) {
    super(props);
  }



 componentDidMount ()  {
    if(this.props.author=== "") {
    fetch(`http://localhost:8000/titles?title=${this.props.title}`).then((res) => res.json()).then(data => {
      if(Array.isArray(data.items) && Array.isArray(data.items[0].volumeInfo.authors))
      document.getElementById(this.props.index).textContent = data.items[0].volumeInfo.authors[0];
      else if(Array.isArray(data.items) && Array.isArray(data.items[1].volumeInfo.authors))
      document.getElementById(this.props.index).textContent = data.items[1].volumeInfo.authors[0];
      else if(Array.isArray(data.items) && Array.isArray(data.items[2].volumeInfo.authors)) {
      document.getElementById(this.props.index).textContent = data.items[2].volumeInfo.authors[0];
    } else document.getElementById(this.props.index).textContent = "";
    }
    )
    
  }

  }

  
    render() {
      return (
        <tr onClick={() => this.props.onItemClick(this.props.selfurl)}>
          <td id={this.props.index} className="pa3 fw8 bg-mid-gray white">{this.props.author}</td>
          <td className="pa3 bg-white black">{this.props.title}</td>
          <td className="pa3 bg-mid-gray white">{this.props.publisheddate}</td>
        </tr>
      )
    }

    
    }

