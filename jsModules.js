function somethingToExport() {
  console.log('Just a print statement and a returned value')
  return 42
}

console.log('This is run when we import the module')

// In any given module we can 
module.exports = { somethingToExport }