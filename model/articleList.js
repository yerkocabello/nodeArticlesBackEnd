let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ArticleListSchema = Schema({
    exhaustiveNbHits: boolean,
    hits: Array,
    hitsPerpage: number,
    nbHits: number,
    nbPages: number,
    page: number,
    params: string,
    processingTimeMS: number,
    query: string
});

module.exports= mongoose.model('ArticleList', ArticleListSchema);
