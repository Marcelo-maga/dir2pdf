const fs = require('fs-extra')
const image_size = require('image-size')
const pdfkit = require('pdfkit');
const naturalCompare = require("natural-compare-lite")

function dir2pdf(dir, outputPath){
  let doc = new pdfkit({ autoFirstPage: false })
  fs.readdir(dir, function (files){
    files.sort(naturalCompare).forEach( function (file){
      const filePath = `${dir}/${file}`;
        const size = image_size(filePath);
        doc.addPage({ size: [size.width, size.height] })
        doc.image(filePath, 0, 0, { width: size.width, height: size.height });
    });
    doc.pipe(fs.createWriteStream(outputPath));
    doc.end();
  })
}

export default dir2pdf()