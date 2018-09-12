import React from "react";
import Watch from './Watch';
import '../assets/css/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <h5>This Is Footer</h5>
        <Watch />
      </div>
    );
  }
}

export default Footer;
