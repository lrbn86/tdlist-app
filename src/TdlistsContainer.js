import React, { Component } from "react";
import axios from "axios";

class TdlistsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tdlists: [],
    };
  }

  loadTdlists() {
    axios
      .get("/api/v1/tdlists")
      .then((res) => {
        this.setState({ tdlists: res.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.loadTdlists();
  }

  render() {
    return (
      <div>
        <div className="taskContainer">
          <input
            className="newTask"
            type="text"
            placeholder="Input a New Task and Press Enter"
            maxLength="75"
            onKeyPress={this.createTodo}
          />
        </div>
        <div className="wrapItems">
          <ul className="listItems">
            {this.state.tdlists.map((tdlist) => {
              return (
                <li className="item" tdlist={tdlist} key={tdlist.id}>
                  <input className="itemCheckbox" type="checkbox" />
                  <label className="itemDisplay">{tdlist.title}</label>
                  <span className="removeItemButton">x</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default TdlistsContainer;
