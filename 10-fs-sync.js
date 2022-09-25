const { readFileSync, writeFileSync } = require('fs')//methods from the module 
//const h = require('fs)
// h.readFileSync('');
console.log('start')
const first = readFileSync('./content/first.txt','ascii')
console.log(first);
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')
