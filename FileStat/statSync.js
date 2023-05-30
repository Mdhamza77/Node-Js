const fs = require('fs');

try {
  const stats = fs.statSync('/Users/joe/test.txt');
  console.log(stats)
} catch (err) {
  console.error(err);
}