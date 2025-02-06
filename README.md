# MongoDB $inc Operator Error: Using String Instead of Number

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations: using a string instead of a number for the increment value.

## Bug Description
The `$inc` operator is used to increment a numeric field in a MongoDB document.  However, passing a string value to `$inc` results in an error or unexpected behavior.

## Bug Reproduction
The `bug.js` file contains the erroneous code. Run this code using a MongoDB shell or driver, and you'll observe the incorrect behavior.

## Bug Solution
The `bugSolution.js` file provides a corrected version of the code, demonstrating how to properly use the `$inc` operator with a numeric increment value.

## How to Use
1.  Make sure you have a MongoDB instance running.
2.  Create a collection named `myCollection` (or use an existing one).
3.  Insert at least one document into the `myCollection` with a numeric field called `counter`.
4.  Run the `bug.js` script to observe the error.
5.  Run the `bugSolution.js` script to see the corrected behavior.
