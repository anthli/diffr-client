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
    this.processText = this.processText.bind(this);
    this.buildGroupingElement = this.buildGroupingElement.bind(this);
  }

  /**
   * Processes the diffs by grouping them into based on their op (operation).
   * Each diff will be grouped with the previous diff if the op matches.
   * For example:
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
   *   The diffs that will be processed into elements of groupings.
   * @returns
   *   The diffs procssed into elements of groupings.
   */
  processDiffs(diffs) {
    let elements = [];
    if (diffs.length === 0) {
      return elements;
    }

    let currentOp = "";
    let grouping = [];
    for (let i = 0; i < diffs.length; i++) {
      let diff = diffs[i];
      let op = diff.op;
      let processedText = this.processText(diff.text);
      if (i === 0) {
        currentOp = op;
      }

      // Group this diff with the previous diff
      if (currentOp === op) {
        grouping.push(processedText);
      }

      // The grouping stops here since the op changed
      if (currentOp !== op) {
        let element = this.buildGroupingElement(
          elements.length,
          currentOp,
          grouping
        );
        elements.push(element);

        currentOp = op;
        grouping = [processedText];
      }

      // The final diff will always result in the end of a grouping
      if (i === diffs.length - 1) {
        let element = this.buildGroupingElement(
          elements.length,
          currentOp,
          grouping
        );
        elements.push(element);
      }
    }

    return elements;
  }

  /**
   * Processes the text so that is will be dispalyed in a more human-readable
   * format.
   *
   * @param {*} text
   *   The text to be processed into a more human-readable format.
   */
  processText(text) {
    let processedText = text;
    // Newline characters should be represented with line break element
    if (text === "\n") {
      processedText = <br/>;
    }

    return processedText;
  }

  /**
   * Builds and returns a span of the grouping with the class based on the
   * current op.
   *
   * @param {*} index
   *   The unique index of the grouping.
   * @param {*} currentOp
   *   The current op of the grouping.
   * @param {*} grouping
   *   The grouping to add to the span.
   * @returns
   *   The span of the grouping with the class based on the current op.
   */
  buildGroupingElement(index, currentOp, grouping) {
    return (
      <span
        key={index}
        className={"diff-" + currentOp.toLowerCase()}
      >
        {grouping}
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