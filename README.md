<h1 align="center">Dir2Pdf</h1>

### A simple module to turn a folder images into a Pdf file, following the order of the images.

# How to use?

## Install :
```shell
npm i dir2pdf 

yarn add dir2pdf
```
## Declaration: 
```js
  const dir2pdf = require('dir2pdf')

  dir2pdf('images/', 'file.pdf')
```

### Sorts files in the directory naturally, so it will follow a numerical order, not like a string.
``` JSON
{ "01.jpg", "02.jpg", "010.jpg", ... }
```

### This module was inspired by the repository: </br>
### https://github.com/wellwind/images-to-pdf
### I made some changes to get the result I wanted.



