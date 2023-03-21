const express = require('express');
const app = express();
const fs = require('fs');
const multer = require('multer');
app.use(express.json());
app.listen(5000,()=>{
    console.log('http://localhost:5000');
})
const upl = multer({storage: new multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./');
    },
    filename:(req,file,cb)=>{
        cb(null,'.jpg');
    }
})})    
app.post('/',upl.single('image'),(req,res)=>{
    const base = fs.readFileSync(req.file.path,{encoding:'base64'});
    fs.writeFile('image.png',base,{encoding:'base64'},(err,result)=>{
        console.log('file created successsfully');
    })
    console.log(base.length);
    res.json({base:"data:image/gif;base64,"+base});
})
