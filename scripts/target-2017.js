if (process.version.startsWith('v6')) {
  const exec = require('child_process').exec;
  const cmd = "sed -i -e \"s/\"ES2016\"/\"ES2017\"/g\" tsconfig.json";

  exec(cmd, function(error, stdout) {
    console.log("Output: "+stdout);
  });
}