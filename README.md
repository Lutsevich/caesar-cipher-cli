# Caesar Cipher CLI
This is a command line application. It encode and decode text with [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).
Change only letter of the Latin alphabet.

## Prerequisites
download this repo.
`npm i` install only one dependency - commander package (it uses internally).

## Options
1. **-a, --action**: an action encode/decode (required)
2. **-s, --shift**: a shift for Caesar cipher, any number (required)
3. **-i, --input**: an input file (if not specified, standard stdin is used)
4. **-o, --output**: an output file (if not specified, standard stdout is used)

## Cautions
  If you pass file names, but program don't found they, you'll see an error about it.
  For simplicity place files in same folder where 'cipher.js'

## Usage Examples
`node cipher --action encode --shift 3 --input 'input.txt' --output 'output.txt'`

`node cipher -a decode -s 3 -i output.txt -o input.txt`

`node cipher -a encode -s 3`

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
