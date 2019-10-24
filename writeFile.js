var fs = require('fs');
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question(`What's up? `, (up) => {
  fs.writeFile('up.txt', up, err => {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved.");
  })
  rl.close();
})

