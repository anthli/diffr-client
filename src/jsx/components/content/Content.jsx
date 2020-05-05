/**
 * Copyright (c) 2020 Anthony Li
 *
 * This source code is licensed under the MIT license (see LICENSE for details)
 */

"use strict";

import React, {Component} from "react";

import Diff from "./Diff";
import Form from "./Form";

/**
 * Contains the content of the entire page.
 */
export default class Content extends Component {
  constructor(props) {
    super(props);

    this.setDiffs = this.setDiffs.bind(this);

    this.state = {
      diffs: []
    };
  }

  /**
   * Sets the diffs to the state.
   *
   * @param {*} diffs
   *   The diffs to be set to the state.
   */
  setDiffs(diffs) {
    this.setState({
      diffs: diffs
    });
  }

  render() {
    return (
      <>
        <p>
          A diff takes in two bodies of text, old and new, and computes the differences.
        </p>
        <Form setDiffs={this.setDiffs}/>
        <Diff diffs={this.state.diffs}/>
      </>
    );
  }
}