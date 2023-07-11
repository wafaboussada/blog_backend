const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        default: '',
    },
    username: {
        type: String,
        required: true,
    },
    categories: { //['Music', 'Sport'] 
        type: Array,
        required: false,
    },
    // categories: [
    //     {type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
    // ]
},
{ timestamps: true}
)

module.exports = mongoose.model('Post', PostSchema);