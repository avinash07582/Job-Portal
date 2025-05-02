 const DataUriParser = require("datauri/parser")
 const path = require("path");

 const getDataUri = (file)=>{
   if (!file) {
      throw new Error("File is undefined. Ensure Multer is handling the upload properly.");
  }
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
 }
 module.exports = getDataUri;
