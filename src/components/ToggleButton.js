// Component Code Goes Here
import React from "react";
 export default class ToggleButton extends React.Componenet  
{
  constructor(props)
  {
    super(props);
    state = {
      isEnabled:false
    }
  }
  
  render()
  {
    return (
      <button className="toggle-button">I am toggled {this.state.isEnabled?"on":"off"}</button>
      )
  }
}