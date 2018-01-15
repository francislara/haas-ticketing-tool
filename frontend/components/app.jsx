import React from 'react';
import { Link } from 'react-router';
// import { withRouter } from 'react-router';
import { postColumn } from '../util/spreadsheet';
// import RadioButton from './radio_button';
import { RadioButton, RadioGroup } from 'react-radio-buttons';
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
    postColumn(this.state).then(() => {
      this.alert.show('Message sent!', {
        time: 5000,
        type: 'success'
      });
      this.setState({
        body: ''
      });
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
      <div className="app-container">
        <img className="haas-logo" src="http://res.cloudinary.com/lara-cloud1/image/upload/v1513991438/haas_logo.jpg"/>
        <AlertContainer ref={a => this.alert = a} {...this.alertOptions} />
        <div className="description-container">
          <p>
            This ticketing tool is a means to provide a safe space for all members to express their honest, anonymous feedback to the Haas team. Whether it’s about frustrations regarding your current stay or positive shout-outs, we welcome all thoughts! For the sake of transparency, these messages will be sent over to Peter, and only he will have access to the information. 
          </p>
          <p>

            Click on the house you currently reside in, and leave us a message below!

          </p>
          
        </div>
        <div className="radio-group">
          {/* <div
            onClick={() => {
              this.handleRadio('Berry');
            }}>
            <RadioButton 
              house="Berry" 
              selected={this.state.house} />
          </div>
          <div
            onClick={() => {
              this.handleRadio('B2');
            }}>
            <RadioButton
              house="B2"
              selected={this.state.house} />
          </div>
          <div
            onClick={() => {
              this.handleRadio('Snap');
            }}>
            <RadioButton
              house="Snap"
              selected={this.state.house} />
          </div>
          <div
            onClick={() => {
              this.handleRadio('L7');
            }}>
            <RadioButton
              house="L7"
              selected={this.state.house} />
          </div>
          <div
            onClick={() => {
              this.handleRadio('HQ');
            }}>
            <RadioButton
              house="HQ"
              selected={this.state.house} />
          </div> */}
        <RadioGroup onChange={ this.handleRadio } horizontal>
          <RadioButton value="Anonymous" rootColor="#cccccc" pointColor="#000000">
              Anonymous
          </RadioButton>
          <RadioButton value="Berry" rootColor="#cccccc" pointColor="#FF005C">
            Berry
          </RadioButton>
          <RadioButton value="B2" rootColor="#cccccc" pointColor="#D500FF">
            B2
          </RadioButton>
          <RadioButton value="Snap" rootColor="#cccccc" pointColor="#00E3FF">
            Snap
          </RadioButton>
          <RadioButton value="L7" rootColor="#cccccc" pointColor="#96FF00">
            L7
          </RadioButton>
          <RadioButton value="HQ" rootColor="#cccccc" pointColor="#FF9F00">
            HQ
          </RadioButton>
        </RadioGroup>
        </div>
        <form className="message-form">
          <textarea
            type="text"
            value={this.state.body}
            onChange={this.handleInput('body')}
            spellCheck="false"
            placeholder="Leave a message!"
          />
        </form>
        <div className="submit-button">
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
