import React from 'react';
import { Link } from 'react-router';
// import { withRouter } from 'react-router';
import { postColumn } from '../util/spreadsheet';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      body: '',
      house: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
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

  handleRadio(house) {
    this.setState({
      house: house
    });
  }


  render() {
    return (
      <div>
        <RadioGroup onChange={ this.handleRadio } horizontal>
          <RadioButton value="Berry">
            Berry
          </RadioButton>
          <RadioButton value="B2">
            B2
          </RadioButton>
          <RadioButton value="Snap">
            Snap
          </RadioButton>
          <RadioButton value="L7">
            L7
          </RadioButton>
          <RadioButton value="HQ">
            HQ
          </RadioButton>
        </RadioGroup>
        <form>
          <label>
            Message
          </label>
          <input
            type="text"
            value={this.state.body}
            onChange={this.handleInput('body')}
            spellCheck="false"
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
