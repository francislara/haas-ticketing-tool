import React from 'react';

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    return (
      <div 
        onClick={this.props.radio}
        className={
        this.props.house === this.props.selected ?
        'radio-button selected' : 'radio-button'
      }>
        <p>{this.props.house}</p>
      </div>
    );
  }
}

export default RadioButton;