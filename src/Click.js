import React from "react";
import Cells from "./Cells";

class Click extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      return (
        <button className="square" onClick={() => this.setState({value: 'X'})}>
          {this.state.value}
        </button>
      );
    }
  }

  export default Click;