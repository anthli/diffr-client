/**
 * Copyright (c) 2020 Anthony Li
 *
 * This source code is licensed under the MIT license (see LICENSE for details)
 */

"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Content from "./components/content/Content";
import Header from "./components/header/Header";

ReactDOM.render(
  <div id="diffr">
    <Header/>
    <Content/>
  </div>,
  document.getElementById("app")
);