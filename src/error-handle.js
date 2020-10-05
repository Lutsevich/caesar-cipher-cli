module.exports.errorHandle = function (err) {
  if (err) {
    switch(err.code) {
      case 'ENOENT':
        console.error('File not found:', err.path);
        break;
      case 'EPERM':
        console.error('File access permissions problem:', err.path);
        break;
      default:
        console.error('Encryption failed.', err);
    }
    process.exit(1);
  } else {
    console.log('Encryption succeeded.')
  }
}
