/**
 * Copyright (c) 2020 Anthony Li
 *
 * This source code is licensed under the MIT license (see LICENSE for details)
 */

"use strict";

import React, {Component} from "react";
import TextBox from "./TextBox";

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form id="form">
        <TextBox caption="Old Text"></TextBox>
        <TextBox caption="New Text"></TextBox>
      </form>
    );
  }
}