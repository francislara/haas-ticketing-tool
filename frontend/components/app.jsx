import React from 'react';
import { Link } from 'react-router';
// import { withRouter } from 'react-router';
import { postColumn } from '../util/spreadsheet';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import AlertContainer from 'react-alert';

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
    this.alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };
  }

  

  handleSubmit(e) {
    e.preventDefault();
    postColumn(this.state);
    this.alert.show('Message sent!', {
      time: 5000,
      type: 'success'
    });
    this.setState({
      body: ''
    });

    
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
        <AlertContainer ref={a => this.alert = a} {...this.alertOptions} />
        <RadioGroup onChange={ this.handleRadio } horizontal>
          <RadioButton value="Berry" rootColor="#333333" pointColor="#0043ff">
            Berry
          </RadioButton>
          <RadioButton value="B2" rootColor="#333333" pointColor="#0043ff">
            B2
          </RadioButton>
          <RadioButton value="Snap" rootColor="#333333" pointColor="#0043ff">
            Snap
          </RadioButton>
          <RadioButton value="L7" rootColor="#333333" pointColor="#0043ff">
            L7
          </RadioButton>
          <RadioButton value="HQ" rootColor="#333333" pointColor="#0043ff">
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
