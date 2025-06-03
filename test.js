const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');

try {
  assert(html.includes('<div id="root"></div>'), 'index.html should contain root div');
  assert(html.includes('Typeahead Search Box'), 'index.html should render the Typeahead component');
  console.log('All tests passed.');
} catch (err) {
  console.error('Test failed:', err.message);
  process.exit(1);
}
