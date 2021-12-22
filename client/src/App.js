import './tachyons.css';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import { Searchfield } from './components/Searchfield/Searchfield';
import { Booklist } from './components/Booklist/Booklist';
import { useState } from 'react';
import { Details } from './components/Details/Details';
import axios from 'axios';

function App() {
  const [description, setDescription] = useState("There is no description for this book");
  const [subtitle, setSubtitle] = useState("");
  const [page, setPage] = useState("");
  const [kind, setKind] = useState("");
  const [title, setTitle] = useState("");
  const [previewLink, setPreviewLink] = useState("");
  const [explainmode, setExplainmode] = useState(false);
  const [resdata, setResdata] = useState({
    items: []
  });
  const [category, setCategory] = useState("author");
  const [input, setInput] = useState("");
  const convertstring = function(phrase) {
    var maxLength = 100;

    var returnString = phrase.toLowerCase();
    //Convert Characters
    returnString = returnString.replace(/ö/g, 'o');
    returnString = returnString.replace(/ç/g, 'c');
    returnString = returnString.replace(/ş/g, 's');
    returnString = returnString.replace(/ı/g, 'i');
    returnString = returnString.replace(/ğ/g, 'g');
    returnString = returnString.replace(/ü/g, 'u');  

    // if there are other invalid chars, convert them into blank spaces
    returnString = returnString.replace(/[^a-z0-9\s-]/g, "");
    // convert multiple spaces and hyphens into one space       
    returnString = returnString.replace(/[\s-]+/g, " ");
    // trims current string
    returnString = returnString.replace(/^\s+|\s+$/g,"");
    // cuts string (if too long)
    if(returnString.length > maxLength)
    returnString = returnString.substring(0,maxLength);
    // add hyphens
    returnString = returnString.replace(/\s/g, "-");  

    return returnString;
}

  const explainmodeoff = () => {
    setExplainmode(false);
  }

  const handleKeyDown = (e) => {
    if(e.key === "Enter")
     onButtonClick();

  }

  const onButtonClick = () => {
    if(category === "author") {
      const options = {
        method: 'GET',
        url: `https://safe-meadow-28955.herokuapp.com/authors?author=${convertstring(input).toUpperCase()}`
    }

    axios(options).then((response) => {
      setResdata(Array.isArray(response.data.items) ? response.data : {
        items: []
      });

    }).catch((error) => {
        console.error(error);
    })
  }

  if(category === "title") {

  fetch(`https://safe-meadow-28955.herokuapp.com/titles?title=${convertstring(input).toUpperCase()}`).then((res) => res.json()).then(data => {
    
    setResdata(Array.isArray(data.items) ? data : {
      items: []
    });
});

  
    }

  }
  const onInputChange = (e) => {
    setInput(e.target.value);
  }

  const onSelectChange = (e) => {
    setCategory(e.target.value);
  }

  const onItemClick = (url) => {
    fetch(url).then((res) => res.json()).then(data => {
      setDescription(typeof data.volumeInfo.description === "string" ? data.volumeInfo.description : "There is no description for this book");
      setSubtitle(data.volumeInfo.subtitle);
      setPage(data.volumeInfo.pageCount);
      setTitle(data.volumeInfo.title);
      setKind(Array.isArray(data.volumeInfo.categories) ? "Categories: " + data.volumeInfo.categories[0] : "Category info not specified");
      setPreviewLink(data.volumeInfo.previewLink);
      setExplainmode(true);
    })


  }
  
  return (

    <div className='app'>
      { explainmode === false ?
      <ErrorBoundary>
    <div className=" width br2 dark-gray b--black-100 w-100 w-50-m w-50-l center pb5">
      <h1 className='mt0 tc black fw4 f3'>Welcome to Googlebooks Search App </h1>
      <Searchfield handleKeyDown={handleKeyDown} onButtonClick={onButtonClick} onInputChange={onInputChange} onSelectChange={onSelectChange} />
      <Booklist onItemClick={onItemClick} resdata = {resdata} />
    </div>
    </ErrorBoundary> :<><h1 className='mt0 tc black fw4 f3'>Welcome to Googlebooks Search App </h1> <Details previewLink={previewLink} category={kind} title={title} page={page} explainmodeoff={explainmodeoff} description={description} subtitle={subtitle} 
    />
    </>
}
    </div>
  );
}



export default App;
