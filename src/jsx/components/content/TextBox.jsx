/**
 * Copyright (c) 2020 Anthony Li
 *
 * This source code is licensed under the MIT license (see LICENSE for details)
 */

"use strict";

import React, {Component} from "react";

/**
 * A textbox component that allows for user input and a caption to briefly
 * describe it.
 */
export default class TextBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="textbox-container">
        <p className="textbox-caption">{this.props.caption}</p>
        <textarea
          className="textbox"
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}