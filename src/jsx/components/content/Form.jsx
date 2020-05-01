/**
 * Copyright (c) 2020 Anthony Li
 *
 * This source code is licensed under the MIT license (see LICENSE for details)
 */

"use strict";

import axios from "axios";
import React, {Component} from "react";

import TextBox from "./TextBox";

/**
 * Contains the form that allows users to input two bodies of texts and calcuate
 * the diff.
 */
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

  /**
   * Sets the old string in the state.
   */
  oldStringAreaOnChange(event) {
    this.setState({
      oldString: event.target.value
    });
  }

  /**
   * Sets the new string in the state.
   */
  newStringAreaOnChange(event) {
    this.setState({
      newString: event.target.value
    });
  }

  /**
   * Handles clicks on the Calculate button by taking the the old string and new
   * string in the state and pasing them to the API call to calculate the diff
   * between the two. The response data is then sent back to the Content to be
   * processed.
   */
  calculateButtonOnClick(event) {
    let params = {
      params: this.state
    };
    axios.get("http://localhost:8080/diff", params)
      .then(res => {
        this.props.setDiffs(res.data);
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
          />
          <TextBox
            caption="New Text"
            onChange={this.newStringAreaOnChange}
          />
        </div>

        <div>
          <input
            type="button"
            onClick={this.calculateButtonOnClick}
            value="Calculate"
          />
        </div>
      </form>
    );
  }
}