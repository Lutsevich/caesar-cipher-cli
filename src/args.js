const { program } = require('commander');

program
  .storeOptionsAsProperties(false)
  .requiredOption('-s, --shift <number>', 'caesar cipher shift')
  .requiredOption('-a, --action <type>', 'an action encode/decode')
  .option('-i, --input <path>', 'an input file')
  .option('-o, --output <path>', 'an output file')
  .parse(process.argv);

module.exports = program.opts();
