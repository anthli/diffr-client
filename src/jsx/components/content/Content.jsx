/**
 * Copyright (c) 2020 Anthony Li
 *
 * This source code is licensed under the MIT license (see LICENSE for details)
 */

"use strict";

import Form from "./Form";
import React, {Component} from "react";

export default class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <p>A diff takes in two bodies of text and computes the differences.</p>
        <Form/>
      </>
    );
  }
}