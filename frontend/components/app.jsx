import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import { postColumn } from '../util/spreadsheet';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    postColumn();
    
  }

  render() {
    return (
      <div>
        <div onClick={postColumn}>Test</div>
      </div>
    );
  }
}

export default withRouter(App);
