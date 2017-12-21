import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import { postColumn } from '../util/spreadsheet';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      body: '',
      house: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    postColumn(this.state);
    
  }

  handleInput(type) {
    return (e) => {
      this.setState({
        [type]: e.target.value
      });
    };
  }


  render() {
    return (
      <div>
        <form>
          <label>
            House
          </label>
          <input 
            type="text"
            value={this.state.house}
            onChange={this.handleInput('house')}
            spellCheck="false"
            />
          <label>
            Message
          </label>
          <input
            type="text"
            value={this.state.body}
            onChange={this.handleInput('body')}
            spellCheck="false"
          />
          <button onClick={this.handleSubmit}>Login</button>
        </form>
      </div>
    );
  }
}

export default withRouter(App);
