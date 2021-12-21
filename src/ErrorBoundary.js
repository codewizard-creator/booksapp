import React from 'react';
import './tachyons.css';


class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Bir sonraki render'da son çare arayüzünü göstermek için
      // state'i güncelleyin.
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        // İstediğiniz herhangi bir son çare arayüzünü render edebilirsiniz.
        return <h1 className="f2 pt5 red">Sorry, we can't find the book you are looking for.</h1>;
      }
  
      return this.props.children;
    }
  }

  export default ErrorBoundary;