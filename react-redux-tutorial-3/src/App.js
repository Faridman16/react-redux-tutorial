import React from 'react';
import Header from './components/Layout/Header';
import Body from './components/Layout/Body';
import Footer from './components/Layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <Body  />
        <Footer />
      </div>
    );
  }
}

export default App;



