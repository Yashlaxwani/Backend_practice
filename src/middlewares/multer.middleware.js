import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")//callback
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)//callback
    }
  })
export const upload = multer({ 
    storage
})