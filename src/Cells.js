import React from "react";

let props = "O";
if (props === "X") {
  props = "O";
} else {
    props = "X";
}

class Cells extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
    render() {
      return (
        <div className="cell-wrapper">

          <div className="cell" onClick={() => this.setState({value: props})}>{this.state.value}</div>

          <div className="cell" onClick={() => this.setState({value: props})}>{this.state.value}</div>

          <div className="cell" onClick={() => this.setState({value: props})}>{this.state.value}</div>

        </div>
      );
    }
  }

  export default Cells;