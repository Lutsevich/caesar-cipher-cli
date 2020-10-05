const path = require('path');
const fs = require('fs');
const { Encoder } = require('./encoder');

module.exports.getTransformStream = function(shift, action) {
  const transformStream = new Encoder();

  switch(action) {
    case 'encode':
      transformStream.setShift(shift);
      break;
    case 'decode':
      transformStream.setShift(-shift);
      break;
    default:
      console.error('ERROR: incorrect action action name. It can be \'encode\' or \'decode\'');
  }

  return transformStream;
}

module.exports.getInputStream = function(input) {
  return input
    ? fs.createReadStream(path.normalize(input))
    : process.stdin;
}

module.exports.getOutputStream = function(output) {
  return output
    ? fs.createWriteStream(path.normalize(output), { flags: fs.constants.O_WRONLY | fs.constants.O_APPEND })
    : process.stdout;
}
