/**
 * Copyright (c) 2020 Anthony Li
 *
 * This source code is licensed under the MIT license (see LICENSE for details)
 */

"use strict";

import React, {Component} from "react";

export default class TextBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="textbox-container">
        <p class="textbox-caption">{this.props.caption}</p>
        <textarea class="textbox"></textarea>
      </div>
    );
  }
}