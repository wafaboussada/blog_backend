const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const authRoute = require('./routes/auth');
const categoryRoute = require('./routes/category');
const postRoute = require('./routes/post');

dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")))
mongoose.connect(process.env.MONGO_URL)
    .then(console.log('connected successfully !!!'))
    .catch((err) => console.log('erreur mongo', err));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images')
    },
    filename: function (req, file, cb) {
        cb(null, req.body.name)
    }
})
const upload = multer({ storage: storage })
app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json('file has been uploaded!')
})
app.use('/auth/', authRoute);
app.use('/categories', categoryRoute);
app.use('/posts', postRoute);

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})