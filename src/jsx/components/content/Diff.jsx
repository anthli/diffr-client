/**
 * Copyright (c) 2020 Anthony Li
 *
 * This source code is licensed under the MIT license (see LICENSE for details)
 */

"use strict";

import React, {Component} from "react";

/**
 * Contains and visualizes the diff.
 */
export default class Diff extends Component {
  constructor(props) {
    super(props);

    this.processDiffs = this.processDiffs.bind(this);
    this.buildTextGroupingElement = this.buildTextGroupingElement.bind(this);
  }

  /**
   * Processes the diffs by grouping them into texts based on their op
   * (operation). Each diff will be grouped with the previous diff if the op
   * matches. For example:
   *
   * {op: EQUAL, text: A}, {op: INSERT, text: B}, {op: INSERT, text: C},
   * {op: EQUAL, text: D}
   *
   * will be processed as:
   *
   * A
   * BC
   * D
   *
   * @param {*} diffs
   *   The diffs that will be processed into elements of text groupings.
   * @returns
   *   The diffs procssed into elements of text groupings.
   */
  processDiffs(diffs) {
    let elements = [];
    if (diffs.length === 0) {
      return elements;
    }

    let currentOp = "";
    let textGrouping = "";
    if (diffs.length > 1) {
      for (let i = 0; i < diffs.length; i++) {
        let diff = diffs[i];
        if (i === 0) {
          currentOp = diff.op;
        }

        // Group this diff with the previous diff
        if (currentOp === diff.op) {
          textGrouping += diff.text;
        }
        // Reset the grouping. On the last diff, the op and text grouping will
        // be captured, but needs to be processed outside of the loop
        else {
          let element = this.buildTextGroupingElement(
            elements.length,
            currentOp,
            textGrouping
          );
          elements.push(element);

          currentOp = diff.op;
          textGrouping = diff.text;
        }
      }
    }

    // This is to process either the only or last diff
    let element = this.buildTextGroupingElement(
      elements.length,
      currentOp,
      textGrouping
    );
    elements.push(element);

    return elements;
  }

  /**
   * Builds and returns a span of the text grouping with the class based on the
   * current op.
   *
   * @param {*} index
   *   The unique index of the text grouping.
   * @param {*} currentOp
   *   The current op of the text grouping.
   * @param {*} textGrouping
   *   The text grouping to add to the span.
   * @returns
   *   The span of the text grouping with the class based on the current op.
   */
  buildTextGroupingElement(index, currentOp, textGrouping) {
    return (
      <span
        key={index}
        className={"diff-" + currentOp.toLowerCase()}
      >
        {textGrouping}
      </span>
    );
  }

  render() {
    let diffs = this.props.diffs;
    let processedDiffs = this.processDiffs(diffs);

    return (
      <>
        {processedDiffs}
      </>
    );
  }
}