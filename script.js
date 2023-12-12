// script.js
function stringChop(str, size) {
  if (!str) {
    return []; // Return an empty array if the input string is null
  }

  const chunks = [];
  let index = 0;

  while (index < str.length) {
    // Slice the string into chunks of the specified size
    chunks.push(str.slice(index, index + size));
    index += size;
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
