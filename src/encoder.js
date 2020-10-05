const { Transform } = require('stream');
const { caesarShift } = require('./caesar-shift');

module.exports.Encoder = class extends Transform {
  setShift(shift) {
    this._shift = shift;
  }

  constructor(options) {
    super(options);
  }

  _transform(chunk, encode, callback) {
    const transformedChunk = caesarShift(chunk.toString(), this._shift);
    this.push(transformedChunk);
    callback();
  }
}
