/**
 * Copyright (c) 2020 Anthony Li
 *
 * This source code is licensed under the MIT license (see LICENSE for details)
 */

"use strict";

import React, {Component} from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1 id="header">diffr</h1>
    );
  }
}