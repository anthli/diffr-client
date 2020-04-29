/**
 * Copyright (c) 2020 Anthony Li
 *
 * This source code is licensed under the MIT license (see LICENSE for details)
 */

"use strict";

import axios from "axios";
import React, {Component} from "react";

import TextBox from "./TextBox";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.oldStringAreaOnChange = this.oldStringAreaOnChange.bind(this);
    this.newStringAreaOnChange = this.newStringAreaOnChange.bind(this);
    this.calculateButtonOnClick = this.calculateButtonOnClick.bind(this);

    this.state = {
      oldString: "",
      newString: ""
    };
  }

  oldStringAreaOnChange(event) {
    this.setState({
      oldString: event.target.value
    });
  }

  newStringAreaOnChange(event) {
    this.setState({
      newString: event.target.value
    });
  }

  calculateButtonOnClick(event) {
    let params = {
      params: this.state
    };
    axios.get("http://localhost:8080/diff", params)
      .then(res => {

      });

    event.preventDefault();
  }

  render() {
    return (
      <form>
        <div id="textbox-area">
          <TextBox
            caption="Old Text"
            onChange={this.oldStringAreaOnChange}
          >
          </TextBox>
          <TextBox
            caption="New Text"
            onChange={this.newStringAreaOnChange}
          >
          </TextBox>
        </div>

        <div>
          <input
            type="button"
            onClick={this.calculateButtonOnClick}
            value="Calculate"
          >
          </input>
        </div>
      </form>
    );
  }
}