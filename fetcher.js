const request = require('request');
const fs = require('fs')
let url = process.argv[2];
let fileName = process.argv[3];

request(url, (urlError, __, body) => {
  if (urlError) {
    console.log('url results in error')
    process.exit();
  }
  
  fs.writeFile(fileName, body, (error) => {
    if (error) throw error;
    fs.stat(fileName, (err, stats) => {
      if (err) throw err;
      console.log(`Downloaded and saved ${stats.size} bytes to ${fileName} `);
    });
  })
  
});
