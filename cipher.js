const { pipeline } = require('stream');
const { shift, action, input, output } = require('./src/args');
const { getTransformStream, getInputStream, getOutputStream } = require('./src/get-streams');
const { errorHandle } = require('./src/error-handle');

pipeline(
  getInputStream(input),
  getTransformStream(+shift, action),
  getOutputStream(output),
  errorHandle
);
