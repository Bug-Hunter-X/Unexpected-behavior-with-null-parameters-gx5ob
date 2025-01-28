function foo(a, b) {
  // Handle null values appropriately
  a = a ?? 0; // Use nullish coalescing operator
  b = b ?? 0; // Use nullish coalescing operator

  return a + b;
}

console.log(foo(null, 5)); // Output 5
console.log(foo(5, null)); // Output 5
console.log(foo(5, 5)); // Output 10
console.log(foo(null, null)); // Output 0