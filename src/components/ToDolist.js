import React, { Component } from "react";

class ToDOList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: []
    };
  }

  addToList(input) {
    let listArray = this.state.list;
    listArray.push(input);

    this.setState({
      list: listArray,
      userInput: ""
    });
  }

  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }

  render() {
    return (
      <div className="to-do-list-main">
        <input
          onChange={e => this.changeUserInput(e.target.value)}
          value={this.state.userInput}
          type="text"
        />
        <button onClick={() => this.addToList(this.state.userInput)}>
          press me
        </button>

        <ul>
          {this.state.list.map((val, i) => (
            <li key={i}>{val}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDOList;
