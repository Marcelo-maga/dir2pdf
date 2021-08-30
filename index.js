const fs = require('fs-extra')
const image_size = require('image-size')
const pdfkit = require('pdfkit');
const naturalCompare = require("natural-compare-lite")

function dir2pdf(dir, fileOutput){
  let pdf = new pdfkit({ autoFirstPage: false })
  fs.readdir(dir, function (_,files){
    files.sort(naturalCompare).forEach( function (file){
      const filePath = `${dir}/${file}`;
        const size = image_size(filePath);
        pdf.addPage({ size: [size.width, size.height] })
        pdf.image(filePath, 0, 0, { width: size.width, height: size.height });
    });
    pdf.pipe(fs.createWriteStream(fileOutput));
    pdf.end();
  })
}

module.exports = dir2pdf