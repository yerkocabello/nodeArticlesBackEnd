let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ArticleListSchema = Schema({
    exhaustiveNbHits: Boolean,
    hits: Array,
    hitsPerpage: Number,
    nbHits: Number,
    nbPages: Number,
    page: Number,
    params: String,
    processingTimeMS: Number,
    query: String
});

module.exports= mongoose.model('ArticleList', ArticleListSchema);
