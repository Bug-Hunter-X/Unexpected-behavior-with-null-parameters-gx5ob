# Unexpected behavior with null parameters

This repository demonstrates a common error in JavaScript when handling null values as function parameters.

The `foo` function is designed to add two numbers. However, it incorrectly handles null values, returning 0 even if only one of the parameters is null.

The solution demonstrates a more robust approach that either explicitly checks for null values or uses a more robust null-coalescing method.
